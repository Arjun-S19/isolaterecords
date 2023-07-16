const axios = require("axios");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// MongoDB connection string
const connectionString = process.env.MONGO_URL;

// Define a Video schema
const videoSchema = new mongoose.Schema({
   url: String,
   date: String,
});

// Create a Video model
const Video = mongoose.model("Video", videoSchema);

module.exports = (async () => {
   try {
      // Connect to MongoDB
      await mongoose.connect(connectionString, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");

      return async (req, res) => {
         try {
            const today = new Date().toISOString().split("T")[0]; // Get the current date

            // Check if the latest video URL exists for the current date in the database
            let latestVideo = await Video.findOne({ date: today });

            if (latestVideo) {
               console.log("Retrieved video URL from the database");
               res.status(200).json({ videoURL: latestVideo.url });
            } else {
               // Fetch the latest video URL from the YouTube API
               const channelIdList = [
                  process.env.CHANNEL_ID_1,
                  process.env.CHANNEL_ID_2,
                  process.env.CHANNEL_ID_3,
                  process.env.CHANNEL_ID_4,
                  process.env.CHANNEL_ID_5,
                  process.env.CHANNEL_ID_6,
               ];
               const apiKey = process.env.YOUTUBE_API_KEY;

               let latestVideoURL = "";
               let latestPublishDate = null;

               // Iterate over the channel IDs and fetch the latest video
               for (const channelId of channelIdList) {
                  try {
                     const response = await axios.get(
                        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&maxResults=1`
                     );

                     const videoURL = `https://www.youtube.com/watch?v=${response.data.items[0].id.videoId}`;
                     const publishDate =
                        response.data.items[0].snippet.publishTime;

                     if (
                        !latestPublishDate ||
                        publishDate > latestPublishDate
                     ) {
                        latestPublishDate = publishDate;
                        latestVideoURL = videoURL;
                     }
                  } catch (error) {
                     if (
                        error.response ||
                        error.response.status === 403 ||
                        error.response.data.error.errors[0].reason ||
                        "quotaExceeded"
                     ) {
                        console.error("YouTube API quota exceeded");

                        latestVideo = await Video.findOne().sort({ date: -1 });
                        if (latestVideo) {
                           latestVideoURL = latestVideo.url;
                           console.log(
                              "Retrieved latest video URL from the database"
                           );
                        }
                     } else {
                        throw error;
                     }
                  }
               }

               // If there is no entry for today's date, retrieve the latest video from our database
               if (!latestVideoURL) {
                  latestVideo = await Video.findOne().sort({ date: -1 });
                  if (latestVideo) {
                     latestVideoURL = latestVideo.url;
                     console.log(
                        "Retrieved latest video URL from the database"
                     );
                  }
               }

               // Save the latest video URL to the database
               if (latestVideoURL) {
                  await Video.create({ url: latestVideoURL, date: today });
               }

               console.log(
                  "Fetched video URL from YouTube API and saved to the database"
               );
               res.status(200).json({ videoURL: latestVideoURL });
            }
         } catch (error) {
            console.error("Error fetching latest video:", error);
            res.status(500).json({ error: "Failed to fetch latest video" });
         }
      };
   } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
   }
})();

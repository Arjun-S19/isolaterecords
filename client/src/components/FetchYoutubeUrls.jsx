import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchYoutubeUrls = () => {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const apiKey = import.meta.env.VITE_APP_YOUTUBE_API_KEY;
            const channelIdList = [
               import.meta.env.VITE_APP_CHANNEL_ID_1,
               import.meta.env.VITE_APP_CHANNEL_ID_2,
               import.meta.env.VITE_APP_CHANNEL_ID_3,
               import.meta.env.VITE_APP_CHANNEL_ID_4,
               import.meta.env.VITE_APP_CHANNEL_ID_5,
               import.meta.env.VITE_APP_CHANNEL_ID_6,
            ];

            const tempVideos = [];

            for (const channelId of channelIdList) {
               const searchResponse = await axios.get(
                  `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=id&maxResults=100`
               );

               const videoIds = searchResponse.data.items.map(
                  (item) => item.id.videoId
               );

               const videosResponse = await axios.get(
                  `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds.join(
                     ","
                  )}&part=snippet&maxResults=50`
               );

               const formattedVideos = videosResponse.data.items.map(
                  (video) => {
                     const {
                        id,

                        snippet: { publishedAt, channelId },
                     } = video;

                     return {
                        id,

                        snippet: {
                           publishedAt,
                           channelId,
                        },
                     };
                  }
               );

               tempVideos.push(...formattedVideos);
            }
            console.log(tempVideos);
            setVideos(tempVideos);
            console.log("Videos: ", videos);
         } catch (error) {
            console.error("An error occurred:", error);
         }
      };

      fetchData();
   }, []);

   return (
      <div>
         <h1>YouTube Videos</h1>
         {videos?.map((video) => (
            <div key={video.id}>
               <h3>{video.snippet.title}</h3>
               <p>{video.snippet.description}</p>
            </div>
         ))}
      </div>
   );
};

export default FetchYoutubeUrls;

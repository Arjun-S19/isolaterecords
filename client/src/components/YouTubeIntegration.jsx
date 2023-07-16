import React, { useEffect, useState } from "react";
import axios from "axios";
import backendUrl from "../api/index";

const YouTubeIntegration = () => {
   const [latestVideoURL, setLatestVideoURL] = useState("");

   useEffect(() => {
      const fetchLatestVideoURL = async () => {
         try {
            let latestVideoURL = sessionStorage.getItem("latestVideoURL");

            if (!latestVideoURL) {
               const response = await axios.get(backendUrl);
               latestVideoURL = response.data.videoURL;
               sessionStorage.setItem("latestVideoURL", latestVideoURL);
            }

            setLatestVideoURL(latestVideoURL);
         } catch (error) {
            console.error("Error fetching latest video:", error);
         }
      };

      fetchLatestVideoURL();
   }, []);

   return (
      <div>
         {latestVideoURL && (
            <iframe
               width="560"
               height="315"
               src={latestVideoURL.replace("watch?v=", "embed/")}
               allowFullScreen
               className="mx-auto"
            ></iframe>
         )}
      </div>
   );
};

export default YouTubeIntegration;

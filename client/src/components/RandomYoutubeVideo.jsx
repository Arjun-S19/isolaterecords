import React, { useEffect, useState } from "react";
import data from "../Data";

const RandomYoutubeVideo = () => {
    const [randomVideoURL, setRandomVideoURL] = useState("");

    useEffect(() => {
        const randomObject = data[Math.floor(Math.random() * data.length)];
        const videoId = randomObject.id;

        if (videoId) {
            const randomVideoURL = `https://www.youtube.com/watch?v=${videoId}`;
            setRandomVideoURL(randomVideoURL);
        }
    }, []);

    return (
        <div>
            {randomVideoURL && (
                <iframe
                    width="560"
                    height="315"
                    src={randomVideoURL.replace("watch?v=", "embed/")}
                    allowFullScreen
                    title="Random YouTube Video"
                ></iframe>
            )}
        </div>
    );
};

export default RandomYoutubeVideo;

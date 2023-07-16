import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [details, setDetails] = useState([
    {
      label: "Email",
      value: "IsolateRecordsOfficial@gmail.com",
    },
    {
      label: "Instagram",
      value: "IsolateRecordsOfficial",
      link: "https://www.instagram.com/isolaterecordsofficial/",
    },
    {
      label: "Discord Server",
      value: "Isolate Records Discord Server",
      link: "https://discord.com/invite/uNjK6CmBxB",
    },
    {
      label: "YouTube",
      value: "Isolate Records",
      link: "https://www.youtube.com/@isolaterecords",
    },
    {
      label: "Tiktok",
      value: "IsolateRecordsOfficial",
      link: "https://www.tiktok.com/@isolaterecordsofficial",
    },
  ]);
  return (
    <div className="w-9/12 mx-auto py-10">
      <div className="space-y-10">
        <div className="relative z-10 py-10 px-16  overflow-x-hidden space-y-7   overlay w-full">
          <h1 className="text-[1.875rem] font-bold">Contact Us:</h1>
        </div>

        {details.map((e, index) => {
          return (
            <div
              className="relative z-10 py-10 px-16  overflow-x-hidden space-y-7   overlay w-full"
              key={index}
            >
              <h1 className="text-2xl font-medium ml-10">
                {e.label}:
                {e.link ? (
                  <a href={e.link} className="underline ml-3" target="_blank">
                    {e.value}
                  </a>
                ) : (
                  <span className="ml-3">{e.value}</span>
                )}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;

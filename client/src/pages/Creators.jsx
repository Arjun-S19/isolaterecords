import React, { useState } from "react";
import { Link } from "react-router-dom";
import agp from "../assets/images/agp high.png";
import arsunol from "../assets/images/arsunol high.png";
import aero from "../assets/images/aero high.png";
import keta from "../assets/images/keta high.png";
const Creators = () => {
  const [creatorsData, setCreatorsData] = useState([
    {
      img: agp,
      name: "AGP",
      post: "Producer",
      link: "https://www.youtube.com/@agpbeats6916",
    },
    {
      img: arsunol,
      name: "Arsunol",
      post: "Artist/Editor/Producer",
      link: "https://arsunol.carrd.co/",
    },
    {
      img: aero,
      name: "aero",
      post: "Producer",
      link: "https://www.youtube.com/@prodAero",
    },
    {
      img: keta,
      name: "keta",
      post: "Producer",
      link: "https://www.youtube.com/@prodbyketa",
    },
  ]);
  return (
    <div className="pt-10 pb-60 mx-auto relative z-50 w-full">
      <div className="w-9/12 mx-auto ">
        <div className="flex justify-between gap-20  font_robotoMono flex-wrap w-full">
          {creatorsData.map((creator, index) => {
            return (
              <div className="flex flex-col justify-center items-center  text-[1.87rem] w-[45%]  py-10 relative z-[100] card">
                <div className="absolute -z-30 w-full h-full  cardStyle"></div>
                <img src={creator.img} alt="" />
                <h1 className="capitalize -mb-1">{creator.name}</h1>
                <h1 className=" ">{creator.post}</h1>
                <a
                  href={creator.link}
                  target="_blank"
                  className="underline font-bold mt-3"
                >
                  View Portfolio
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Creators;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import agp from "../assets/images/agp high.png";
import arsunol from "../assets/images/arsunol high.png";
import aero from "../assets/images/aero high.png";
import keta from "../assets/images/keta high.png";
import acid from "../assets/images/acid high.png";
import emlex from "../assets/images/emlex high.png";
import raiden from "../assets/images/raiden high.png";
import tenxten from "../assets/images/tenxten high.png";
import ilysaucy from "../assets/images/ilysaucy high.png";
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
      name: "Aero",
      post: "Producer",
      link: "https://www.youtube.com/@prodAero",
    },
    {
      img: keta,
      name: "Keta",
      post: "Producer",
      link: "https://www.youtube.com/@slowdownketa",
    },
    {
      img: acid,
      name: "Acid",
      post: "Producer",
      link: "https://www.youtube.com/@7Shadowx",
    },
    {
      img: tenxten,
      name: "TenxTen",
      post: "Artist",
      link: "https://www.linktr.ee/lmaotenn",
    },
    {
      img: ilysaucy,
      name: "ilysaucy",
      post: "Artist",
      link: "https://www.linktr.ee/ilysaucy/",
    },
    {
      img: emlex,
      name: "Emlex",
      post: "Producer",
      link: "https://www.youtube.com/@Emlex",
    },
    {
      img: raiden,
      name: "Raiden",
      post: "Producer",
      link: "https://www.youtube.com/@ProdRAIDEN",
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

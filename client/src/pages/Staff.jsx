import React, { useState } from "react";
import agp from "../assets/images/agp high.png";
import arsunol from "../assets/images/arjun.png";
import hillary from "../assets/images/hillary.png";
const Staff = () => {
  const [staffData, setStaffData] = useState([
    {
      img: agp,
      name: "Advaita G. alias AGP",
      post: "Director of Administration",
      link: "/",
    },
    {
      img: arsunol,
      name: "Arjun S. alias Arsunol",
      post: "Director of Operations",
      link: "/",
    },
    { img: hillary, name: "Hillary C. alias Hillary", post: "Director of Marketing", link: "/" },
  ]);
  return (
    <div className="pt-10 pb-60 mx-auto relative z-50 w-full">
      <div className="w-10/12 mx-auto ">
        <div className="flex flex-col space-y-10  font_robotoMono  w-full ">
          {staffData.map((staff, index) => {
            return (
              <div className="flex  items-center space-y-3 text-[1.87rem] w-full py-10 relative z-[100] card ">
                <div className="absolute -z-30 w-full h-full  cardStyle"></div>

                <div className="w-[18.5rem] h-[18.5rem]  flex items-center justify-center ml-14">
                  <img
                    src={staff.img}
                    alt={staff.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center">
                  <h1 className="text-[3rem] font-bold">{staff.name}</h1>
                  <h1 className="text-[2.25rem] font-medium">{staff.post}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Staff;

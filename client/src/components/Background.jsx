import React from "react";
import bg from "../assets/images/bg-compress.webp";
const Background = () => {
  return (
    <>
      {" "}
      <div className="fixed inset-0 w-screen h-screen">
        {" "}
        <img src={bg} alt="background" className="w-full h-full object-cover " />
      </div>
      <div className="w-screen h-screen fixed bgOverlay -z-0"></div>
    </>
  );
};

export default Background;

import React from "react";

const Container = (props) => {
  return (
    <div className="relative z-10 p-10  overflow-x-hidden space-y-7   overlay w-full">
      <h1 className="text-2xl font-bold">{props?.title}</h1>

      <p className="text-2xl">{props?.desc}</p>
      {props?.children}
    </div>
  );
};

export default Container;

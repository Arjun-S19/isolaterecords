import React from "react";
import agp from "../assets/images/agp.png";
import arsunol from "../assets/images/arsunol.png";
import aero from "../assets/images/aero.png";
import YouTubeIntegration from "../components/YouTubeIntegration";
import RandomYoutubeVideo from "../components/RandomYoutubeVideo";
const Home = () => {
    return (
        <div className="relative z-10 py-12 text-center w-screen overflow-x-hidden space-y-10">
            <h1
                className="uppercase  2xl:text-[6rem] text-7xl font_planetKosmos mx-auto tracking-wide"
                style={{
                    textShadow: "0 0 5px white",
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.5)",
                }}
            >
                Isolate Records
            </h1>

            <p className="font_robotoMono  text-2xl 2xl:text-2xl  w-4/5 mx-auto  2xl:w-10/12  font-normal">
                A non-profit community label dedicated to developing student
                content creators skills and create <br /> opportunities for them
                in the music industry
            </p>
            <div className="w-11/12 mx-auto overlay flex items-start justify-center space-x-40 py-10">
                <div className="text-center w-4/12">
                    <h1 className="font_robotoMono text-xl 2xl:text-2xl">
                        Recent Creator Drop:
                    </h1>
                    {/* <div className="w-full h-52 bg-white my-3"> */}
                    <div className="w-full flex justify-center  my-3">
                        <YouTubeIntegration />
                    </div>
                </div>
                <div className="text-center w-4/12">
                    <h1 className="font_robotoMono text-xl 2xl:text-2xl">
                        Popular Creator Drop:
                    </h1>
                    <div className="w-full flex justify-center my-3">
                        <RandomYoutubeVideo />
                    </div>
                </div>
            </div>
            <div className="w-10/12 mx-auto overlay  p-10">
                <h1 className="font_robotoMono text-xl 2xl:text-2xl text-left mb-6">
                    Top Creators This Month:
                </h1>

                <div className="flex items-center justify-around w-9/12 mx-auto ">
                    <div className="space-y-3">
                        <img src={agp} alt="agp" className="" />
                        <p className="text-2xl">AGP</p>
                    </div>
                    <div className="space-y-3">
                        <img src={arsunol} alt="agp" className="" />
                        <p className="text-2xl">Arsunol</p>
                    </div>
                    <div className="space-y-3">
                        <img src={aero} alt="agp" className="" />
                        <p className="text-2xl">Aero</p>
                    </div>
                    {/* <YouTubeIntegration/> */}
                </div>
            </div>
        </div>
    );
};

export default Home;

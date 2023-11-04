import React from "react";
import Container from "../components/Container";

const About = () => {
    return (
        <div className="w-11/12 mx-auto my-10 space-y-10">
            <div className="relative z-10 p-10  overflow-x-hidden space-y-1   overlay w-full">
                <h1 className="text-[3rem] font-normal font_planetKosmos mx-auto tracking-wide">
                    isolate records <span className="font_robotoMono">has</span>
                </h1>

                <div className="ml-10 space-y-5">
                    <p className="text-[2.25rem]">
                        over
                        {" "}
                        <span className="font_planetKosmos text-[3rem]">
                            900
                        </span>{" "}
                        passionate student content creators in its community
                    </p>
                    <p className="text-[2.25rem]">
                        mentored{" "}
                        <span className="font_planetKosmos text-[3rem]">
                            63{" "}
                        </span>
                        aspiring student producers
                    </p>
                    <p className="text-[2.25rem]">
                        hosted{" "}
                        <span className="font_planetKosmos text-[3rem]">4</span>{" "}
                        community-wide events for creators to show off their
                        skills
                    </p>
                </div>
            </div>

            <Container
                title="What is Isolate Records?"
                desc={
                    <div>
                    Isolate Records is a registered 509(a)(2) non-profit community label dedicated to developing student content creators' skills and creating opportunities for them in the music industry. We provide the aid and opportunities for student creators to excel, connect, and learn. Join our community{" "}
                    <a href='http://discord.gg/isolaterecords' style={{ color: '#00C112' }}>
                        <strong><u>here</u></strong>
                    </a>.
                    </div>
                }
            />

            <Container
                title="Founding Story:"
                desc={`Isolate Records was created mid 2022, a period of chaos in the world
          from the fading COVID-19 pandemic to other issues like Russia's war
          against Ukraine and Elon Musk's acquisition of Twitter. AGP, a high
          school junior, Arsunol, a high school junior, and OfficialBobForces, 
          a high school sophomore, noticed how music was a big part of their community 
          and how many student artists did not know how to grow their content both in popularity and
          in skill, they decided to create "Isolate Records", a record label
          that would sign various student artists to promote their work, help
          them connect with more students, and develop their overall passions in
          music. Along with Poisonfy and Skparab1, AGP, Arsunol, and 
          OfficialBobForces decided to kick off Isolate Records by building
          infrastructure, connecting with more student artists, and developing
          their own passions in music throughout the journey. Three months of
          hard work had paid off as we launched Isolate Records on January 22,
          2023 and continued to work hard and persevere, no matter what
          obstacles we faced. From disapproving parents to internal struggles,
          we've gone through it all in order to make the idea of a student led
          record label for fellow students, a reality.`}
            />

            <div className="relative z-10 p-10  overflow-x-hidden space-y-7   overlay w-full">
                <h1 className="text-2xl font-bold">
                    How you can get involved:
                </h1>

                <p className="text-2xl">
                    Isolate Records is always looking for new student content
                    creators and staff who are interested in joining, to take
                    the next steps regarding joining Isolate, fill out the
                    respective form(s):
                </p>
                <div className=" flex items-start justify-center space-x-40 py-10">
                    <div className="text-center w-6/12">
                        <h1 className="font_robotoMono mx-auto text-xl 2xl:text-2xl">
                            Content Creators
                        </h1>
                        <div className="w-full  my-3 hideScroll">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSdAxanksmIRrUtu3_7EQC_srNufiGpX3d6dCI82Zw1O8y_EvA/viewform?embedded=true"
                                width="670"
                                height="700"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className="mx-auto hideScroll"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                    <div className="text-center w-6/12">
                        <h1 className="font_robotoMono text-xl 2xl:text-2xl">
                            Staff
                        </h1>
                        {/* <div className="w-full h-52 bg-white my-3"></div> */}

                        <div className="w-full my-3 hideScroll">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSecbAs1XMXxZeOsaHk58DI55kpLR0jbQ9RoQsw_YfHLj9MRFQ/viewform?embedded=true"
                                width="640"
                                height="700"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className="mx-auto hideScroll "
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import React from "react";

const Donate = () => {
    return (
        <div className="pt-5 pb-10 mx-auto relative z-50 w-full">
            <div className="w-11/12 mx-auto overlay  p-10">
                <h1 className="text-2xl font-bold mb-4">
                    Donate to Isolate Records:
                </h1>

                <p className="text-2xl">
                    Donations towards Isolate Records are greatly appreciated
                    and are eligible for tax deductions since we hold a{" "}
                    <span style={{ whiteSpace: "nowrap" }}>509(a)(2)</span>{" "}
                    public charity status
                </p>

                {/* <div className="w-[36rem] bg-white h-[35rem] mx-auto my-10"></div> */}
                <div className="w-[36rem]  mx-auto my-10">
                    <iframe
                        src="https://donorbox.org/embed/donate-to-isolate-records?default_interval=o"
                        name="donorbox"
                        allowpaymentrequest="allowpaymentrequest"
                        seamless="seamless"
                        frameborder="0"
                        scrolling="no"
                        height="900px"
                        width="100%"
                        style={{
                            maxWidth: "500px",
                            minWidth: "310px",
                            maxHeight: "none!important",
                        }}
                        // style="max-width: 500px; min-width: 310px; max-height:none!important"
                    ></iframe>

              
                </div>
            </div>
        </div>
    );
};

export default Donate;

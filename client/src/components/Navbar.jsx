import React from "react";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
   const nav = useNavigate();
   return (
      <div className="w-screen h-[11rem]  relative z-30">
         <div className="absolute navOverlay w-full h-full z-10"></div>
         <div className="container mx-auto flex items-center justify-center space-x-20 uppercase h-full text-2xl 2xl:text-[2.125rem] relative z-30">
            <Link
               to="/about-us"
               className="linkStyle "
               style={{ userSelect: "none" }}
            >
               About us
            </Link>
            <Link
               to="/donate"
               className="linkStyle "
               style={{ userSelect: "none" }}
            >
               Donate
            </Link>
            <img
               src={logo}
               alt=""
               className="w-36 cursor-pointer"
               onClick={() => nav("/")}
               style={{ userSelect: "none" }}
            />
            <Link
               to="/creators"
               className="linkStyle "
               style={{ userSelect: "none" }}
            >
               Creators
            </Link>
            <Link
               to="/staff"
               className="linkStyle "
               style={{ userSelect: "none" }}
            >
               Staff
            </Link>
         </div>

         <Link
            to="/contact-us"
            className="linkStyle2 absolute z-50 top-5 right-10"
            style={{ userSelect: "none" }}
         >
            Contact Us
         </Link>
      </div>
   );
};

export default Navbar;

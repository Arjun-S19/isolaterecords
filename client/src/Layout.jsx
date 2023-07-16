import React from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
   const navigate = useNavigate();
   return (
      <div className="flex flex-col min-h-screen">
         {/* Background  */}
         <Background />

         {/* Navbar */}
         <Navbar />

         {props.children}

         {/* footer */}
         <div className="flex-shrink-0 bg-black py-4 px-6 text-[0.95rem] relative mt-auto">
            Ⓒ Isolate Records, NPO
         </div>
      </div>
   );
};

export default Layout;

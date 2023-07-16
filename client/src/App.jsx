import React from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import About from "./pages/About";
import Creators from "./pages/Creators";
import Donate from "./pages/Donate";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";
import Testing from "./pages/Testing";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route
               path="/"
               element={
                  <Layout>
                     <Home />
                  </Layout>
               }
            />
            <Route path="/testing" element={<Testing />} />
            <Route
               path="/about-us"
               element={
                  <Layout>
                     <About />
                  </Layout>
               }
            />
            <Route
               path="/creators"
               element={
                  <Layout>
                     <Creators />
                  </Layout>
               }
            />
            <Route
               path="/donate"
               element={
                  <Layout>
                     <Donate />
                  </Layout>
               }
            />
            <Route
               path="/staff"
               element={
                  <Layout>
                     <Staff />
                  </Layout>
               }
            />
            <Route
               path="/contact-us"
               element={
                  <Layout>
                     <Contact />
                  </Layout>
               }
            />
            <Route
               path="*"
               element={
                  <Layout>
                     <Home />
                  </Layout>
               }
            />
         </Routes>
      </Router>
   );
};

export default App;

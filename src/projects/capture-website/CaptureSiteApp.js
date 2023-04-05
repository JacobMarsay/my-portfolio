import React from "react";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/base/GlobalStyle";
import { AnimatePresence } from "framer-motion";
import TopPage from "./components/TopPage";
import Cursor from "../../components/Cursor";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
import HomeButton from "../../components/HomeButton";

const CaptureSite = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Cursor />
      <HomeButton />
      <GlobalStyle />
      <Nav />
      <TopPage />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default CaptureSite;

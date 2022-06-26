import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Features from "../components/Features";
import About from "../components/About";
import Modal from "../components/Modal";
const Main = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Banner />
      <NavBar showModal={showModal} setShowModal={setShowModal} />
      <HeroSection showModal={showModal} setShowModal={setShowModal}/>
      <About />
      <Features />
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Main;

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Services from "../components/Services";
import About from "../components/About";
import Modal from "../components/Modal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Announcement />
      <NavBar showModal={showModal} setShowModal={setShowModal} />
      <Slider />
      <About />
      <Services />
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Main;

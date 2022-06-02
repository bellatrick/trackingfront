import React from 'react'
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Services from "../components/Services";
import About from "../components/About";

const main = () => {
    return (
        <div>
            <Announcement />
             <NavBar />
             <Slider />
             <About />
             <Services />
             <Footer />
        </div>
    );
}

export default main;

import React from "react";
import "./About.css";
import img2 from "../assets/img2.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-header">
        <div className="about-header-one">
          <p>Rexs Logistics Solutions </p>
          <h3>About Us</h3>
        </div>
      </div>
      <div className="mission">
        <div className="mission-global">
          <h3>0.1 GLOBAL</h3>
          <h5>We are distributing our services across the globe</h5>
          <p>
            We span major hubs on all continents providing a <br />
            seamless supply chain solution focused on quality <br />
            systems throughout. We operate strategically <br />
            located transportation, distribution <br />
            and value-added service centers <br /> throughout North America,
            Europe and Asia.
          </p>
        </div>
        <div className="mission-global">
          <h3>0.2 VISION</h3>
          <h5>We have a unique philosophy and protect it</h5>
          <p>
            Our culture is tuned to exceeding every customer’s <br />
            expectations while providing a place for employees
            <br /> to build their careers and prosper. Our environment
            <br /> breeds success, and you’ll notice our people move
            <br /> faster, work harder and are better rewarded than <br /> the
            competition.
          </p>
        </div>
        <div className="mission-global">
          <h3>0.3 MISSION</h3>
          <h5>We are adding value to each step of your supply chain</h5>
          <p>
            Our job is to make sure that from raw material to finished <br />
            goods, to returns management, we provide the critical services{" "}
            <br />
            and information necessary to We then build a solution customized
            <br /> to your cost and service requirements using all possible
            information <br />
            and our proven experience.{" "}
          </p>
        </div>
      </div>
      <div className="glance">
        <div className="glance-head">
          <h3>Our Organization at glance</h3>
        </div>
        <div className="glance-about">
          <div className="glance-about-img">
            <img src={img2} alt="glance" />
          </div>
          <div className="glance-about-para">
            <p>
              Our transportation company with 30 years of experience is you best
              choice for shipping cargo of any size, storage, packing or
              delivering wares to your customers. Our professional employees
              will take care of your goods, whenever you send them. You are
              granted complete control over the process of delivery by phone or
              by our mobile app. Your freight is tracked every step of the way.
              We provide a high standard of shipping, regardless of its volume.{" "}
              <br />
              If your company needs to establish a supply chain, we have
              prepared several readymade solutions with flexible pricing rates
              for you. Our urgent cargo services offer defined time frames for
              convenience of your business. Our supply chain services include
              shipping, warehousing, packaging, quality control and
              distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
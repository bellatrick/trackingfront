import React from "react";
import "./About.css";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <div id="about">
      <>
        <div className="about-header">
          <div className="about-header-one">
            {" "}
            <p className='text-purple-800'>Rex Logistics Solutions </p>
            <h3 className='text-purple-800'>About Us</h3>
          </div>
        </div>
      </>
      <div className="mission">
        <Slide right>
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
        </Slide>
        <Slide left>
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
        </Slide>
        <Slide right>
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
        </Slide>
      </div>
    </div>
  );
};

export default About;

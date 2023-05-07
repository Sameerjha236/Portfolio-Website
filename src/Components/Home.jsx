import React from "react";
import { NavLink } from "react-router-dom";
import Sameer from ".././Assests/Sameer_Jha_Resume.pdf";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h4>Hello, I'm</h4>
        <h1>
          <Typewriter
            options={{
              strings: ["Sameer Jha"],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </h1>
        <p>
          A web developer with a passion for creating exceptional websites that
          deliver great user experiences. I'm always learning new skills and
          technologies to improve my craft.
        </p>
        <div className="btn-sect">
          <a href={Sameer} className="btn" download>
            Download CV
          </a>

          <NavLink to="/contact" className="btn">
            Let's Talk
          </NavLink>
        </div>
      </div>
      <div className="something"></div>
    </div>
  );
};

export default Home;

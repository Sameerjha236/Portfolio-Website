import React, { useEffect } from "react";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaGithub } from "react-icons/fa";
import Sameer from ".././Assests/Sameer_Jha_Resume.pdf";
import Typewriter from "typewriter-effect";

const Home = ({ isLoading, setIsLoading }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [setIsLoading]);

  if (isLoading) return <Loading />;

  return (
    <div className="home">
      <div className="hero">
        <h4>Hello, I'm</h4>
        <h1>
          <Typewriter
            className="typo"
            options={{
              strings: ["Sameer Jha"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>
          A Web Developer with a passion for creating exceptional websites that
          deliver great user experiences. I'm always learning new skills and
          technologies to improve my craft.
        </p>
        <div className="links-home">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/sameerjha23/"
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sameerjha236"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
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

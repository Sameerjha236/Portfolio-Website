import React, { useEffect } from "react";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Sameer from ".././Assests/Sameer.pdf";
// import Avatar from "../Assests/Avar.jpeg";
import Typewriter from "typewriter-effect";

const Home = ({ isLoading, setIsLoading }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);
  if (isLoading) return <Loading />;

  return (
    <div className="home">
      <div className="hero">
        <h4>Hello, I'm</h4>
        <h1>Sameer Jha</h1>
        <p className="home-text">
          A{" "}
          <span className="typo">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "Web Developer", "Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className="justify-text">
            with a passion for creating exceptional websites that deliver great
            user experiences. I'm always learning new skills and technologies to
            improve my craft.
          </p>
        </p>
        <div className="links-home">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/sameer-jha/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
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
    </div>
  );
};

export default Home;

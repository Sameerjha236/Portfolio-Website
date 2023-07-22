import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import profile from "../Assests/Profile_face.JPG";
import Loading from "./Loading";
const About = ({ isLoading, setIsLoading }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);
  if (isLoading) return <Loading />;
  return (
    <div className="about">
      <div className="header">
        <h4>Get to Know</h4>
        <h3>Me</h3>
      </div>
      <div className="image-container">
        <img src={profile} alt="Sameer Jha" />
      </div>
      <div className="about-data">
        <div className="about-desc">
          Hello! I'm Sameer Jha, a frontend developer passionate about crafting
          captivating websites that resonate with users. My background in data
          science and competitive programming equips me with problem-solving
          prowess and a knack for innovative solutions. Beyond coding, I thrive
          on exploring new technologies and experimenting with diverse tools to
          give life to ideas. JavaScript and React are my favorites, but I'm
          also well-versed in Python, C++, and more. I firmly believe in the
          power of collaboration and teamwork, and I'm eager to join forces with
          fellow developers to create amazing projects. If you're seeking an
          enthusiastic and dedicated developer for your team, search no further!
        </div>
        <div className="about-lang">
          <div className="lang">
            <TbBrandCpp className="logo" />
            <div>
              <p>C++</p>
              <p>3+ Years</p>
            </div>
          </div>
          <div className="lang">
            <IoLogoPython className="logo" />
            <div>
              <p>Python</p>
              <p>2+ Years</p>
            </div>
          </div>
          <div className="lang">
            <GrReactjs className="logo" />
            <div>
              <p>React</p>
              <p>1+ Years</p>
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/contact" className="btn">
        Let's Talk
      </NavLink>
    </div>
  );
};

export default About;

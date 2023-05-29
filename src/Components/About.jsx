import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import profile from "../Assests/Profile_face.JPG";
import Loading from "./Loading";
const About = ({ isLoading, setIsLoading }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
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
          <li>
            <span className="list-icon">
              <AiOutlineArrowRight />
            </span>
            Hi there! My name is Sameer Jha and I'm a frontend developer who's
            passionate about creating awesome websites that people love to use.
            I've got a background in data science and competitive programming,
            so I'm no stranger to solving complex problems and developing
            creative solutions.
          </li>
          <li>
            <span className="list-icon">
              <AiOutlineArrowRight />
            </span>
            When I'm not busy coding, you can usually find me exploring new
            technologies and frameworks. I love learning new things and
            experimenting with different tools to find the best way to bring
            ideas to life. I'm a big fan of JavaScript and React, and I've also
            got experience with Python, C++, and more.
          </li>
          <li>
            <span className="list-icon">
              <AiOutlineArrowRight />
            </span>
            I believe that the best way to get things done is through
            collaboration and teamwork, and I'm always excited to work with
            other developers to build amazing things. So if you're looking for a
            passionate and enthusiastic developer to join your team, look no
            further!
          </li>
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

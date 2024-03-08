import React, { useEffect } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiPython, SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import Loading from "./Loading";
const Skills = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);
  if (isLoading) return <Loading />;
  return (
    <div className="skills">
      <div className="header">
        <h4>What Skills I Have</h4>
        <h3>My Experince</h3>
      </div>
      <div className="card-section">
        <div className="pair">
          <div className="card">
            <h3>Frontend Development</h3>
            <div className="skills-list">
              <p className="item">
                <FaReact />
                <h4>React</h4>
              </p>
              <p className="item">
                <FaJs />
                <h4>JavaScript</h4>
              </p>
              <p className="item">
                <FaBootstrap />
                <h4>Bootstrap</h4>
              </p>
              <p className="item">
                <SiTailwindcss />
                <h4>Tailwind</h4>
              </p>
              <p className="item">
                <FaHtml5 />
                <h4>HTML</h4>
              </p>
              <p className="item">
                <FaCss3 />
                <h4>CSS</h4>
              </p>
            </div>
          </div>
          <div className="card">
            <h3>Backend Development</h3>
            <div className="skills-list">
              <p className="item">
                <SiPython />
                <h4>Python</h4>
              </p>
              <p className="item">
                <IoLogoNodejs />
                <h4>Node.js</h4>
              </p>
              <p className="item">
                <SiExpress />
                <h4>Express.js</h4>
              </p>
              <p className="item">
                <SiMysql />
                <h4>MySQL</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

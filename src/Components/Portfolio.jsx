import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Loading from "./Loading";
import Car from "../Assests/Car.jpeg";
import Port from "../Assests/Portfolio.jpeg";
const Portfolio = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);

  if (isLoading) return <Loading />;

  return (
    <div className="portfolio">
      <div className="header">
        <h4>My Recent</h4>
        <h3>Work</h3>
      </div>
      <div className="card-section ">
        <div className="card">
          <img className="project-pic" src={Car} alt="Card 1" />
          <div className="card-overlay">
            <h3>CarWale</h3>
            <a
              className="github"
              href="https://github.com/Sameerjha236/CarWale"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Port} className="project-pic" alt="Card 2" />
          <div className="card-overlay">
            <h3>Portfolio Website</h3>
            <a
              className="github"
              href="https://github.com/Sameerjha236/CarWale"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

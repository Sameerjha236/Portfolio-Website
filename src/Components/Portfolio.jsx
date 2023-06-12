import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Loading from "./Loading";
import Car from "../Assests/Car.jpeg";
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
            <h5>CarWale</h5>
            <p>
              Carwale is a web app that offers personalized car recommendations
              and price predictions to its users.
            </p>
            <a
              className="github"
              href="https://github.com/Sameerjha236/CarWale"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="card">
          <img src="image2.jpg" className="project-pic" alt="Card 2" />
          <div className="card-overlay">
            <h5>Portfolio Website</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              sequi praesentium iste.
            </p>
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

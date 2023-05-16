import React, { useEffect } from "react";
import Loading from "./Loading";

const Portfolio = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [setIsLoading]);
  if (isLoading) return <Loading />;
  return (
    <div className="portfolio">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed culpa
        officia.
      </p>
    </div>
  );
};

export default Portfolio;

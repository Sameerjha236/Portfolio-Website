import React, { useEffect } from "react";
import Loading from "./Loading";
const Contact = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div className="contact">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vitae
        quo?
      </p>
    </div>
  );
};

export default Contact;

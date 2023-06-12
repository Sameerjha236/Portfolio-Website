import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className="error">
      <h2>You landed on Wrong Page</h2>
      <NavLink to="/" data-text="Home">
        Go Back To home Page
      </NavLink>
    </div>
  );
};

export default Error;

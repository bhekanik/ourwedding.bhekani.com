import React from "react";
import { Link } from "react-router-dom";

import "./callToAction.css";

const CallToAction = () => {
  return (
    <div className="cta">
      <h2>You're important to us</h2>
      <h3>Thank you for being part of our special day</h3>
      <Link to="/contact">View Thank You Message</Link>
    </div>
  );
};

export default CallToAction;

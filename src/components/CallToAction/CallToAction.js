import React from "react";
import { Link } from "react-router-dom";

import "./callToAction.css";

const CallToAction = () => {
  return (
    <div className="cta">
      <h2>You're important to us</h2>
      <h3>We'd like you to be a part of our special day</h3>
      <Link to="/contact">RSVP</Link>
    </div>
  );
};

export default CallToAction;

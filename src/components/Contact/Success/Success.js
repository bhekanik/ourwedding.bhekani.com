import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../App";
import "./success.css";

const Success = () => {
  const { setNavTheme, setCurrentPage } = useContext(Context);

  useEffect(() => {
    setCurrentPage("success");
    setNavTheme("solid");
  }, [setNavTheme, setCurrentPage]);

  return (
    <div className="success">
      <h1 className="success__heading">Thank You</h1>
      <p className="success__desc">
        Thank you for visiting our wedding website. To see more details about 
        our special day, click the link below.
      </p>
      <Link to="/about">View Wedding Details</Link>
    </div>
  );
};

export default Success;

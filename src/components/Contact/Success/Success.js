import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./success.css";

import { Context } from "../../../App";

const Success = () => {
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "success" });
    dispatch({
      type: "nav",
      payload: {
        navBackgroundColor: "white",
        linkColor: "#223843",
        boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
      }
    });
  }, []);

  return (
    <div className="success">
      <h1 className="success__heading">Success</h1>
      <p className="success__desc">
        Thank you, we look forward to seeing you at the wedding. if you need to know more details about the wedding, click the link below.
      </p>
      <Link to="/about">Details</Link>
    </div>
  );
};

export default Success;

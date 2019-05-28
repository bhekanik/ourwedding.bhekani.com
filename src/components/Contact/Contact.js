import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./contact.css";
import { Context } from "../../App";

const Contact = () => {

  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "contact" });
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
    <section className="contact" id="contact">
      <h1>RSVP</h1>
      <form
        name="rsvp"
        method="POST"
        action="/success"
        >
        <input type="hidden" name="form-name" value="rsvp" />
        <input type="hidden" name="bot-field" />

        <label className="name">
          Name:{name}
          <input type="text" id="name" name="name" required />
        </label>

        <label className="email">
          Email:
          <input type="email" id="email" name="email" required />
        </label>

        <label className="number">
          Number of guests:
          <input type="number" id="number" name="number" required />
        </label>

        <label className="message">
          Leave a message for the couple:
          <textarea name="message" id="message" rows="4" required />
        </label>

        <button className="button form-button" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

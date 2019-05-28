import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./contact.css";
import { Context } from "../../App";
import { statement } from "@babel/template";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const Contact = (props) => {
  const { name, email, number, message } = props;

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

  const handleSubmit = e => {
    console.log(props);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "rsvp", 
        name, 
        email, 
        number, 
        message
      })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => {
    dispatch({
      type: e.target.name,
      payload: {
        [e.target.name]: e.target.value,
      }
    });
  }

  return (
    <section className="contact" id="contact">
      <h1>RSVP</h1>
      <form
        name="rsvp"
        method="POST"
        action="/success"
        onSubmit={handleSubmit}
        >
        <input type="hidden" name="form-name" value="rsvp" />
        <input type="hidden" name="bot-field" />

        <label className="name">
          Name:{name}
          <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
        </label>

        <label className="email">
          Email:
          <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
        </label>

        <label className="number">
          Number of guests:
          <input type="number" id="number" name="number" value={number} onChange={handleChange} required />
        </label>

        <label className="message">
          Leave a message for the couple:
          <textarea name="message" id="message" rows="4" value={message} onChange={handleChange} required />
        </label>

        <button className="button form-button" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

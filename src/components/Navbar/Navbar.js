import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../App";

import "./navbar.css";

const Navbar = props => {
  const dispatch = useContext(Context);
  const { navbackgroundColor, homeLinkColor, detailsLinkColor, contactLinkColor, boxShadow, page } = props;

  const handleHover = (link, coloOfLink) => {
    const linkDispatch = (dispatchType, linkColor) => {      
      dispatch({
        type: dispatchType,
        payload: {
          linkColor
        }
      });
    }

    if (page !== "home") {
      if (link === "home") {
        linkDispatch("homeLink", coloOfLink);
      } else if (link === "details") {
        linkDispatch("detailsLink", coloOfLink);
      } else if (link === "contact") {        
        linkDispatch("contactLink", coloOfLink);
      }
    } else {
      if (window.outerWidth > 800) {
        if (
          document.querySelector(".intro").getBoundingClientRect().top - 60 <=
          0
        ) {
          if (link === "home") {
            linkDispatch("homeLink", coloOfLink);
          } else if (link === "details") {
            linkDispatch("detailsLink", coloOfLink);
          } else if (link === "contact") {        
            linkDispatch("contactLink", coloOfLink);
          }
        }
      } else {
        if (link === "home") {
          linkDispatch("homeLink", coloOfLink);
        } else if (link === "details") {
          linkDispatch("detailsLink", coloOfLink);
        } else if (link === "contact") {        
          linkDispatch("contactLink", coloOfLink);
        }
      }
    }
  }

  return (
    <nav
      className="navbar"
      style={{ background: navbackgroundColor, boxShadow: boxShadow }}>
      <ul>
        <li onClick={() => handleHover("home", "#e8e9eb")} onMouseEnter={() => handleHover("home", "#e8e9eb")} onMouseLeave={() => handleHover("home", "#223843")}>
          <Link style={{ color: homeLinkColor }} to="/">
            Home
          </Link>
        </li>
        <li onClick={() => handleHover("details")} onMouseEnter={() => handleHover("details", "#e8e9eb")} onMouseLeave={() => handleHover("details", "#223843")}>
          <Link style={{ color: detailsLinkColor }} to="/about">
            Details
          </Link>
        </li>
        <li onClick={() => handleHover("contact")} onMouseEnter={() => handleHover("contact", "#e8e9eb")} onMouseLeave={() => handleHover("contact", "#223843")}>
          <Link style={{ color: contactLinkColor }} to="/contact">
            RSVP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

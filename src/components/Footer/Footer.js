import React from "react";

import "./footer.css";

import facebookLogo from "../../img/facebook.png";
import instagramLogo from "../../img/instagram.png";
import twitterLogo from "../../img/twitter.png";
import youtubeLogo from "../../img/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.facebook.com/justlivinlife"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Facebook profile">
            <img src={facebookLogo} alt="Facebook Icon" />
          </a>
          <a
            className="social-icon"
            href="https://instagram.com/justlivinlifeonig"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Instagram profile">
            <img src={instagramLogo} alt="Instagram Icon" />
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/justlivinlifepc"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Twitter profile">
            <img src={twitterLogo} alt="Twitter Icon" />
          </a>
          <a
            className="social-icon"
            href="https://www.youtube.com/channel/UCNNaw5_xYuNle7jUU5Y8mmQ"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Youtube profile">
            <img src={youtubeLogo} alt="Youtube Icon" />
          </a>
        </div>
      </div>

      <p className="copyright">
        &copy; BK & Nobue - Official Website 2019
      </p>
    </footer>
  );
};

export default Footer;

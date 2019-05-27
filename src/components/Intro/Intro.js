import React from "react";

import "./intro.css";

import facebookLogo from "../../img/facebook.png";
import instagramLogo from "../../img/instagram.png";
import twitterLogo from "../../img/twitter.png";
import youtubeLogo from "../../img/youtube.png";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-left">
        <img src="https://lh3.googleusercontent.com/ueFxRkPFR-9X7HBylvs5H5KCNHsWvZhyWGpL9xLXD2t1z9tzrrv6aG0_rDDJ51uFn3LxBar1JHU2EJ8PDXSgKtT3yr7Fi66vHa_M2610s6k01_ptffVf-Fs8q4trES4Ikc3U6cjIBzU=w2400" alt="portfolio-item" alt="" />
      </div>
      <div className="intro-middle">
        <h2>{"Join Us!"}</h2>
        <p>{"We are excited to invite you to join us as we begin building our new future together. Each one of you plays a unique role in our lives, sharing with us memories we will always treasure. So we hope you can join us for yet another unforgettable moment, as we exchange vows and make a lasting commitment to one another."}</p>
        <div className="intro-social">
          <div className="intro-social-icons">
            <a
              className="intro-social-icon"
              href="https://www.facebook.com/justlivinlife"
              target="_blank"
              rel="noopener noreferrer">
              <img src={facebookLogo} alt="" target="_blank" />
            </a>
            <a
              className="intro-social-icon"
              href="https://instagram.com/justlivinlifeonig"
              target="_blank"
              rel="noopener noreferrer">
              <img src={instagramLogo} alt="" />
            </a>
            <a
              className="intro-social-icon"
              href="https://twitter.com/justlivinlifepc"
              target="_blank"
              rel="noopener noreferrer">
              <img src={twitterLogo} alt="" />
            </a>
            <a
              className="intro-social-icon"
              href="https://www.youtube.com/channel/UCNNaw5_xYuNle7jUU5Y8mmQ"
              target="_blank"
              rel="noopener noreferrer">
              <img src={youtubeLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <img src="https://lh3.googleusercontent.com/cY-0u52wrYxyLuAqAR9tYLoaholjXjxLoDjgxjPmTtzrwT4POUNosKYAzO_Sfo5iOTcBe4YZbZc6Y9OjJcqmkxiSmkntFn7Kbu3pXj-tDDmfOIlc5E1ggVquPMA9y5kmkX3aWhLhOtA=w2400" alt="" />
      </div>
    </section>
  );
};

export default Intro;

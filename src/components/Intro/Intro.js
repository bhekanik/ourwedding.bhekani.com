import React from "react";
import facebookLogo from "../../img/facebook.png";
import instagramLogo from "../../img/instagram.png";
import twitterLogo from "../../img/twitter.png";
import youtubeLogo from "../../img/youtube.png";
import "./intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-left">
        <img
          src="https://lh3.googleusercontent.com/ueFxRkPFR-9X7HBylvs5H5KCNHsWvZhyWGpL9xLXD2t1z9tzrrv6aG0_rDDJ51uFn3LxBar1JHU2EJ8PDXSgKtT3yr7Fi66vHa_M2610s6k01_ptffVf-Fs8q4trES4Ikc3U6cjIBzU=w2400"
          alt="portfolio-item"
        />
      </div>
      <div className="intro-middle">
        <h2>{"Our Journey"}</h2>
        <p>
          {
            "Thank you for being part of our journey as we build our future together. Each one of you played a unique role in our special day, sharing with us memories we will always treasure. We are grateful for the unforgettable moment when we exchanged vows and made our lasting commitment to one another."
          }
        </p>
        <p style={{ color: "#e8e9eb" }}>{"#BKWedsNobue"}</p>
        <div className="intro-social">
          <div className="intro-social-icons">
            <a
              className="intro-social-icon"
              href="https://www.facebook.com/justlivinlife"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Facebook profile"
            >
              <img src={facebookLogo} alt="Facebook Icon" />
            </a>
            <a
              className="intro-social-icon"
              href="https://instagram.com/justlivinlifeonig"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Instagram profile"
            >
              <img src={instagramLogo} alt="Instagram Icon" />
            </a>
            <a
              className="intro-social-icon"
              href="https://twitter.com/justlivinlifepc"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Twitter profile"
            >
              <img src={twitterLogo} alt="Twitter Icon" />
            </a>
            <a
              className="intro-social-icon"
              href="https://www.youtube.com/channel/UCNNaw5_xYuNle7jUU5Y8mmQ"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Youtube profile"
            >
              <img src={youtubeLogo} alt="Youtube Icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <img
          src="https://lh3.googleusercontent.com/cY-0u52wrYxyLuAqAR9tYLoaholjXjxLoDjgxjPmTtzrwT4POUNosKYAzO_Sfo5iOTcBe4YZbZc6Y9OjJcqmkxiSmkntFn7Kbu3pXj-tDDmfOIlc5E1ggVquPMA9y5kmkX3aWhLhOtA=w2400"
          alt=""
        />
      </div>
    </section>
  );
};

export default Intro;

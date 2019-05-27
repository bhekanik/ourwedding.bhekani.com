import React, { useContext, useEffect } from "react";

import Intro from "../Intro/Intro";
import CallToAction from "../CallToAction/CallToAction";
import { Context } from "../../App";

import "./home.css";

import arrow from "../../img/arrow.svg";

const Home = props => {
  const dispatch = useContext(Context);

  const changeNavStyle = () => {
    if (window.outerWidth > 800) {
      if (
        document.querySelector(".intro").getBoundingClientRect().top - 60 >
        0
      ) {
        dispatch({
          type: "nav",
          payload: {
            navBackgroundColor: "rgba(0,0,0,0.3)",
            linkColor: "#e8e9eb",
            boxShadow: "none"
          }
        });
      } else {
        dispatch({
          type: "nav",
          payload: {
            navBackgroundColor: "white",
            linkColor: "#223843",
            boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
          }
        });
      }
    } else {
      dispatch({
        type: "nav",
        payload: {
          navBackgroundColor: "white",
          linkColor: "#223843",
          boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
        }
      });
    }
  };

  useEffect(() => {
    dispatch({ type: "page", payload: "home" });

    changeNavStyle();

    window.addEventListener("scroll", changeNavStyle);
    window.addEventListener("resize", changeNavStyle);

    return () => {
      window.removeEventListener("scroll", changeNavStyle);
    };
  }, []);

  const smoothScroll = (targetSelector, duration) => {
    const target = document.querySelector(targetSelector);
    const getTargetPosition = () => {
      if (window.outerWidth > 800) {
        return target.getBoundingClientRect().top - 50;
      } else {
        return target.getBoundingClientRect().top;
      }
    };
    const startPosition = window.pageYOffset;
    const distance = getTargetPosition();
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  const smoothScrollRunner = () => {
    smoothScroll(".intro", 1000);
  };

  return (
    <>
      <div className="welcome parallax--bg" id="home">
        <h1>
          <span>{"BK Weds Nobue"}</span>
          <p>
            {
              "Our love is forever, always has been and always will be."
            }
          </p>
        </h1>
        <img
          className="welcome-down"
          src={arrow}
          alt=""
          onClick={smoothScrollRunner}
        />
      </div>
      <Intro />
      <div className="tech">
        <h2>{"Some quick details"}</h2>
        <p>
          {
            "Date: 06 October 2019 | Time: 10:00Hrs | Ceremony: Selbourne Park Seventh-Day Adventist Church | Reception: Mystique Conferences & Weddings"
          }
        </p>
      </div>
      <CallToAction />
    </>
  );
};

export default Home;

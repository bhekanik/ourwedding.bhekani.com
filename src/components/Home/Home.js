import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../../App";
import arrow from "../../img/arrow.svg";
import CallToAction from "../CallToAction/CallToAction";
import Countdown from "../Countdown/Countdown";
import Intro from "../Intro/Intro";
import "./home.css";

const Home = () => {
  const { setNavTheme, setCurrentPage } = useContext(Context);
  const introRef = useRef(null);

  useEffect(() => {
    setCurrentPage("home");

    // Use Intersection Observer for better performance
    const observerOptions = {
      root: null,
      rootMargin: '-60px 0px 0px 0px',
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (window.outerWidth > 800) {
          if (entry.isIntersecting) {
            setNavTheme("transparent");
          } else {
            setNavTheme("solid");
          }
        } else {
          setNavTheme("solid");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Wait for intro element to be available
    const checkAndObserve = () => {
      const introElement = document.querySelector('.intro');
      if (introElement) {
        observer.observe(introElement);
      }
    };
    
    // Try immediately and with a small delay as fallback
    checkAndObserve();
    const timeoutId = setTimeout(checkAndObserve, 100);

    // Handle resize events with throttling
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const introElement = document.querySelector('.intro');
        if (introElement) {
          const rect = introElement.getBoundingClientRect();
          if (window.outerWidth > 800) {
            if (rect.top > 60) {
              setNavTheme("transparent");
            } else {
              setNavTheme("solid");
            }
          } else {
            setNavTheme("solid");
          }
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    // Initial style
    if (window.outerWidth <= 800) {
      setNavTheme("solid");
    } else {
      setNavTheme("transparent");
    }

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(resizeTimeout);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [setNavTheme, setCurrentPage]);

  const scrollToIntro = () => {
    const introElement = document.querySelector('.intro');
    if (introElement) {
      const offset = window.outerWidth > 800 ? 50 : 0;
      const elementPosition = introElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="welcome parallax--bg" id="home">
        <div className="welcome__label">
          <span className="welcome__title">{"#JustLivinLife"}</span>
          <p className="tagline">
            {"Our love is forever, always has been and always will be."}
          </p>
          <Countdown />
        </div>
        <img
          className="welcome-down"
          src={arrow}
          alt="Scroll down"
          onClick={scrollToIntro}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <Intro ref={introRef} />
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
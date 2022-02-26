import React, { useEffect } from "react";
import "./countdown.css";

const Countdown = () => {
  useEffect(() => {
    const countdown = document.querySelector(".countdown");

    const weddingDate = new Date("Oct 6, 2019 10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      const timeRemaining = weddingDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      countdown.innerHTML = `
        <p class="timeLabel">${days} <span>Days</span></p>
        <p class="timeLabel">${hours} <span>Hours</span></p>
        <p class="timeLabel">${mins} <span>Minutes</span></p>
        <p class="timeLabel">${secs} <span>Seconds</span></p>
      `;

      if (weddingDate < 0) {
        clearInterval(interval);
        countdown.style.color = "var(--clr-accent)";
        countdown.innerHTML = "It is here!";
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="countdown"></div>;
};

export default Countdown;

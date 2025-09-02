import React, { useState, useEffect } from "react";
import "./countdown.css";

const Countdown = () => {
  const [timeSince, setTimeSince] = useState({
    years: 0,
    months: 0,
    days: 0
  });

  useEffect(() => {
    const weddingDate = new Date("Oct 6, 2019 10:00:00");
    
    const calculateTimeSince = () => {
      const now = new Date();
      
      let years = now.getFullYear() - weddingDate.getFullYear();
      let months = now.getMonth() - weddingDate.getMonth();
      let days = now.getDate() - weddingDate.getDate();
      
      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      setTimeSince({ years, months, days });
    };
    
    calculateTimeSince();
    const interval = setInterval(calculateTimeSince, 86400000); // Update daily
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <p className="timeLabel">Celebrating</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <p className="timeLabel">{timeSince.years} <span>Years</span></p>
        <p className="timeLabel">{timeSince.months} <span>Months</span></p>
        <p className="timeLabel">{timeSince.days} <span>Days</span></p>
      </div>
      <p className="timeLabel">of Marriage!</p>
    </div>
  );
};

export default Countdown;
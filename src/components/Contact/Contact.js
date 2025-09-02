import React, { useContext, useEffect } from "react";
import { Context } from "../../App";
import "./contact.css";

const Contact = () => {
  const { setNavTheme, setCurrentPage } = useContext(Context);

  useEffect(() => {
    setCurrentPage("contact");
    setNavTheme("solid");
  }, [setNavTheme, setCurrentPage]);

  return (
    <section className="contact" id="contact">
      <h1>Thank You!</h1>
      <div style={{ textAlign: 'center', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Our Wedding Day Has Passed</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: '20px' }}>
          We're incredibly grateful to everyone who joined us on October 6, 2019, 
          to celebrate our special day. Your presence made our wedding truly memorable.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: '20px' }}>
          Thank you for being part of our journey!
        </p>
        <p style={{ fontSize: '20px', marginTop: '30px', fontWeight: 'bold' }}>
          With love,<br />
          BK & Nobue
        </p>
      </div>
    </section>
  );
};

export default Contact;
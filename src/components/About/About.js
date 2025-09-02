import React, { useContext, useEffect } from "react";
import { Context } from "../../App";
import { weddingDetails } from "../../data/weddingDetails";
import CallToAction from "../CallToAction/CallToAction";
import "./about.css";

const About = () => {
  const { setNavTheme, setCurrentPage } = useContext(Context);

  useEffect(() => {
    setCurrentPage("about");
    setNavTheme("solid");
  }, [setNavTheme, setCurrentPage]);

  const { location, weddingParty, faq, images, title } = weddingDetails;

  return (
    <>
      <section className="about-me" id="about">
        <div className="detailscontainer">
          <h1 className="details-title">{title}</h1>
          <div className="details__imgs">
            <img
              src={images.main}
              alt="Bride and groom"
              className="details__img img-1"
            />
            <img
              src={images.secondary}
              alt="Bride and groom"
              className="details__img img-2"
            />
          </div>

          <section className="details">
            <div className="details__location">
              <div className="subtitle">
                <p>The Location</p>
              </div>

              <div className="desc">
                <p>
                  <span className="boldSpan">Ceremony</span> {location.ceremony.venue}, {location.ceremony.address} | {location.ceremony.time}
                </p>
                <p>
                  <span className="boldSpan">Reception</span> {location.reception.venue}, {location.reception.address} | {location.reception.time}
                </p>
              </div>
            </div>

            <div className="details__bridesmaids">
              <div className="subtitle">
                <p>The Maids of Honor</p>
              </div>

              <div className="desc">
                {weddingParty.maidsOfHonor.map((maid, index) => (
                  <p key={index}>
                    <span className="boldSpan">{maid.name}</span> - {maid.description}
                  </p>
                ))}
              </div>
            </div>

            <div className="details__bridesmaids">
              <div className="subtitle">
                <p>The Bridesmaids</p>
              </div>

              <div className="desc">
                {weddingParty.bridesmaids.map((bridesmaid, index) => (
                  <p key={index}>
                    <span className="boldSpan">{bridesmaid.name}</span> - {bridesmaid.description}
                  </p>
                ))}
              </div>
            </div>

            <div className="details__groomsmen">
              <div className="subtitle">
                <p>The Groomsmen</p>
              </div>

              <div className="desc">
                {weddingParty.groomsmen.map((groomsman, index) => (
                  <p key={index}>
                    <span className="boldSpan">{groomsman.name}</span> - {groomsman.description}
                  </p>
                ))}
              </div>
            </div>

            <div className="details__faq">
              <div className="subtitle">
                <p>Event FAQ</p>
              </div>

              <div className="desc">
                {faq.map((item, index) => (
                  <p key={index}>
                    <span className="boldSpan">{item.question}</span> {item.answer}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default About;
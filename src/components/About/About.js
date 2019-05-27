import React, { useEffect, useContext } from "react";

import CallToAction from "../CallToAction/CallToAction";
import { Context } from "../../App";

import "./about.css";

const About = () => {
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "about" });
    dispatch({
      type: "nav",
      payload: {
        navBackgroundColor: "white",
        linkColor: "#223843",
        boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
      }
    });
  }, []);

  return (
    <>
      <section className="about-me" id="about">
        <div className="detailscontainer">
            <h1 className="details-title">Everything you need to know</h1>
            <div className="details__imgs">
              <img
                src="https://lh3.googleusercontent.com/JOVMAMJ0nQe6qqV_FgVJRR4mqzlherGYXXb1dqAceQl2u-gk3ciXPQHmMB5AsRpTN2LRhT0iJvplcKuidA_XiEQyqgqwKAQKojnpVFgvZx1LvqRpcznyUlfPDLuptdKOxNE0_b1GDOc=w2400"
                alt="Bride and groom"
                className="details__img img-1"
              />
              <img
                src="https://lh3.googleusercontent.com/5JhXmpUMRtKi62YCp_88vCQ8bceqlifh6N6m9AM9JW5_FMeCSyqO8hZ7fm33Dvwej39NY9KfVukL0KCEwfHncUbT8kkWL06af6MXRcpwbiUyj0Ue_ZfOmMeXVpqCws-Ml0z9IO7t9_A=w2400" 
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
                    <span>Ceremony</span> Selbourne Park SDA Church, Cnr Gwanda Road &
                    Cecil Avenue, Bulawayo
                  </p>
                  <p>
                    <span>Reception</span> Mystique Weddings & Conferences, Mariot Road, Four Winds, Bulawayo
                  </p>
                </div>
              </div>

              <div className="details__bridesmaids">
                <div className="subtitle">
                  <p>The Bridesmaids</p>
                </div>

                <div className="desc">
                  <p><span>Nozi</span> - Bride's younger sister</p>
                  <p><span>Thandanani</span> - Bride's older sister</p>
                  <p><span>Thando</span> - Bride's childhood friend</p>
                  <p><span>Lucinda</span> - Bride's childhood friend</p>
                  <p><span>Stella</span> - Bride's close friend</p>
                  <p><span>Sineke</span> - Bride's close friend</p>
                </div>
              </div>

              <div className="details__groomsmen">
                <div className="subtitle">
                  <p>The Groomsmen</p>
                </div>

                <div className="desc">
                  <p>
                    <span>Cedric</span> - Groom's longtime friend, close confidante
                    and the best man.
                  </p>
                  <p>
                    <span>Mbeko</span> - Groom's longtime friend and high school roommate. 
                  </p>
                  <p><span>Jabu</span> - Groom's close friend from the trenches at NUST.</p>
                  <p><span>Dylan</span> - Groom's longtime friend. Fellow groomsman with the groom at way too many weddings.</p>
                  <p><span>Dalumuzi</span> - Groom's longtime friend, 1000s of hours were spent together in high school.</p>
                  <p><span>Panashe</span> - Groom's close friend with whom countless debates have been had about the NBA, DC and Marvel.</p>
                </div>
              </div>

              <div className="details__bridesmaids">
                <div className="subtitle">
                  <p>Wedding Registry</p>
                </div>

                <div className="desc">
                  <p>We have set up a wedding gift registry for those who would like to celebrate the occassion with a gift but aren't sure what to choose or won't be able to make it for the wedding in person. You can find our wedding registry at <span><a href="https://wrapistry.shop/giftregistry/?giftregistry_id=1393" target="_blank">BK and Nobue's Wedding Registry.</a></span></p>
                </div>
              </div>

              <div className="details__faq">
                <div className="subtitle">
                  <p>Event FAQ</p>
                </div>

                <div className="desc">
                  <p>
                    <span>What's the parking situation?</span> The venue has plenty of
                    parking. Bonus: it's free.
                  </p>
                  <p>
                    <span>What time should I arrive?</span> Ceremony starts at 10:00
                    sharp so make sure you arrive before that time.
                  </p>
                  <p><span>What's the wedding hashtag?</span> #BKWedsNobue.</p>
                  <p>
                    <span>Can I take pictures?</span> During the ceremony, we ask that
                    you do not take pictures; it allows you to be present in the
                    moment. Our photographer will make sure to get the perfect shot so
                    you don't have to ;). Feel free to take pictures at the reception, as long as you don't get in the way of the proceedings. And remember to share them on social media using the wedding hashtag, we'd love to relive the wedding from various points of view. 
                  </p>
                  <p>
                    <span>What's the dress code?</span> Smart casual or formal. Dress
                    comfortably.
                  </p>
                  <p>
                    <span>Can I bring a date?</span> Yeah sure, you're welcome to
                    bring a date.
                  </p>
                  <p>
                    <span>Will we be outdoors?</span> The ceremony will be indoors and
                    the reception will be outdoors.
                  </p>
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

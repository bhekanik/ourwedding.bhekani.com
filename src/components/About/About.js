import React, { useEffect, useContext } from "react";

import CallToAction from "../CallToAction/CallToAction";
import { Context } from "../../App";

import wrapistryLogo from "../../img/wrapistry.svg";

import "./about.css";

const About = () => {
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "about" });
    dispatch({
      type: "nav",
      payload: {
        navBackgroundColor: "white",
        detailsLinkColor: "#e8e9eb",
        homeLinkColor: "#223843",
        contactLinkColor: "#223843",
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
                    Cecil Avenue, Bulawayo | 10:00am
                  </p>
                  <p>
                    <span>Reception</span> Mystique Weddings & Conferences, Mariot Road, Four Winds, Bulawayo | 2:00pm
                  </p>
                </div>
              </div>

              <div className="details__bridesmaids">
                <div className="subtitle">
                  <p>Wedding Registry</p>
                </div>

                <div className="registry-desc desc">
                  <p>
                    We have set up a wedding gift registry for those who would like to celebrate the occassion with a gift but aren't sure what to choose or won't be able to make it for the wedding in person. You can find our wedding registry by clicking the image below: 
                  </p>
                  <div>
                    <a href="https://wrapistry.shop/giftregistry/?giftregistry_id=1393" target="_blank" rel="noopener noreferrer">
                    <figure className="registry-figure">
                      <img className="registry-img" src={wrapistryLogo} alt="Wrapistry Logo"></img>
                      <figcaption className="registry-img-caption">BK and Nobue's Wedding Registry</figcaption>
                    </figure>  
                    </a>
                  </div>
                </div>
              </div>

              <div className="details__bridesmaids">
                <div className="subtitle">
                  <p>The Maids of Honor</p>
                </div>

                <div className="desc">
                  <p><span>Nomtha</span> - Bride's literal day-one and ride or die. The one who would move heaven and earth to see the bride smile. The funniest one in the family and the best story teller. The sister.</p>
                  <p><span>Nkazie</span> - Groom's kidney donor, gotta keep this one alive and healthy for the groom's sake. She's full to the bream with personality and can challenge the bride on knowledge about the groom.</p>
                </div>
              </div>

              <div className="details__bridesmaids">
                <div className="subtitle">
                  <p>The Bridesmaids</p>
                </div>

                <div className="desc">
                  <p><span>Nozie</span> - Bride's favorite and bubbliest young sister, always has her sister's back. The best lady</p>
                  <p><span>Thandie</span> - Bride's most fun and entertaining older sister, the life of the party</p>
                  <p><span>Valentine</span> - Bride's multitalented aka "gifted-hands" and quiet cousin</p>
                  <p><span>Thando</span> - Bride's highschool roommate, turned friend, turned sister - the hype lady</p>
                  <p><span>Sineke</span> - Bride's gracious and classy high school friend</p>
                  <p><span>Nothabo</span> - Bride's quiet, level-headed childhood turned highschool friend</p>
                </div>
              </div>

              <div className="details__groomsmen">
                <div className="subtitle">
                  <p>The Groomsmen</p>
                </div>

                <div className="desc">
                  <p>
                    <span>Cedric</span> - Groom's longtime friend, close confidante
                    and the best man. Keeper of all the stories that must not be told.
                  </p>
                  <p>
                    <span>Mbeko</span> - Groom's longtime friend and high school roommate turned brother. Started together at the bottom, the Relevance representative.
                  </p>
                  <p><span>Jabu</span> - Groom's close friend. From hackathons to LAN parties to startups. The one who represents the groom's geek side.</p>
                  <p><span>Dylan</span> - Groom's longtime friend. Been fellow groomsman with the groom at way too many weddings, he should get married next.</p>
                  <p><span>Dalumuzi</span> - Groom's longtime friend, 1000s of hours were spent together in high school. Groom wouldn't have passed in highschool without his influence.</p>
                  <p><span>Panashe</span> - Groom's close friend with whom countless debates have been had about the NBA, DC and Marvel. Another one of the geeks.</p>
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
                    <span>What's the dress code?</span> Modest and elegant.
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

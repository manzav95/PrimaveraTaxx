import React from "react";
import { Helmet } from "react-helmet";
import maria from "../../images/maria-ea.png";
import jj from "../../images/juanjose.jpeg";
import home from "../../images/home-image.jpg";
import "./style.css";

function About() {
  return (
    <div className="about-wrapper">
      <Helmet>
        <title>About | Primavera Taxx</title>
      </Helmet>
      <section className="about-main">
        <div className="about-overlay"></div>
        <section className="a-wrapper">
          <section className="about-main-text">
            <h1 className="about-header">About Us</h1>
          </section>
        </section>
        {/* <section className="about-info">
          <p>
            Primavera Taxx was founded on the fundamental basis that our clients
            deserve to be treated as family and not just another tax filing
            process. We’re here to provide the TAX HELP you deserve and ensure
            you a friendly and secure environment were you can leave feeling
            relieved from any TAX related event.
          </p>
        </section> */}
      </section>
      <section className="about-info">
        <p>
          Primavera Taxx was founded on the fundamental basis that our clients
          deserve to be treated as family and not just another tax filing
          process. We’re here to provide the TAX HELP you deserve and ensure you
          a friendly and secure environment were you can leave feeling relieved
          from any TAX related event.
        </p>
      </section>
    </div>
  );
}

export default About;

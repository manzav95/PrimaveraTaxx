import React from "react";
import maria from "../../images/maria-ea.png";
import jj from "../../images/juanjose.jpeg";
import home from "../../images/home-image.jpg";
import "./style.css";

function About() {
  return (
    <div className="about-wrapper-main">
      <section className="about-owner">
        <img src={home} alt="Maria L Hernandez - Primavera Taxx Founder" />
        <section className="about-history">
          <h1>About Us</h1>
          <p>
            Primavera Taxx was established in 2011 by founder Maria Luisa
            Hernandez. It all started in a small office in Antioch, California
            and we have now expanded to a 1000 sq. ft location on Hillcrest Ave
            in the same city. We have constantly increased our customer base and
            this has been mainly due to word of mouth recommendations. Our main
            objective is to serve our clients professionally and efficiently.
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;

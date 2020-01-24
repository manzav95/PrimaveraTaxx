import React from "react";
import maria from "../../images/maria-ea.png";
import jj from "../../images/juanjose.jpeg";
import "./style.css";

function About() {
  return (
    <div className="about-wrapper-main">
      <section className="flex-about">
        <section className="about-team">
          <img src={maria} alt="maria l hernandez" width="350px" />
          <section className="about-main">
            <h1 className="header">Meet The Team</h1>
            <p className="maria-p">
              Primavera Taxx was established in 2011 by founder Maria Luisa
              Hernandez. It all started in a small office in Antioch, California
              and now we have expanded to a 1000 sq. ft location on Hillcrest
              Ave in the same city. We have constantly increased our customer
              base and this has been mainly due to word of mouth
              recommendations. Our main objective is to serve our clients
              professionally and efficiently.{" "}
            </p>
          </section>
        </section>
      </section>
      <section className="co-work-icons">
        <section className="worker">
          <img src={jj} alt="juanjose" className="image" />
          <p className="worker-name">Juan Jose Hernandez</p>
          <h6>CTEC and MBA</h6>
        </section>
        <section className="worker">
          <img src={jj} alt="juanjose" className="image" />
          <p className="worker-name">Juan Jose Hernandez</p>
          <h6>CTEC and MBA</h6>
        </section>
        <section className="worker">
          <img src={jj} alt="juanjose" className="image" />
          <p className="worker-name">Juan Jose Hernandez</p>
          <h6>CTEC and MBA</h6>
        </section>
        <section className="worker">
          <img src={jj} alt="juanjose" className="image" />
          <p className="worker-name">Juan Jose Hernandez</p>
          <h6>CTEC and MBA</h6>
        </section>
      </section>
      <section className="about-cowork">
        <h3 id="team-header">Rest of Team</h3>
        <section className="team-right-flex">
          <section className="right-team">
            <p className="right-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore perspiciatis eum error ratione accusantium voluptates
              explicabo asperiores, architecto iusto. Ipsum!
            </p>

            <img src={maria} alt="maria l hernandez" width="250px" />
          </section>
        </section>
        <section className="team-left-flex">
          <section className="left-team">
            <img src={maria} alt="maria l hernandez" width="250px" />
            <p className="left-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore perspiciatis eum error ratione accusantium voluptates
              explicabo asperiores, architecto iusto. Ipsum!
            </p>
          </section>
        </section>
      </section>
    </div>
  );
}

export default About;

import React from "react";
import "./style.css";
import enrolled from "../../images/enrolled.jpg";
import irs from "../../images/irs.jpg";
import nna from "../../images/nna.jpg";
import csea from "../../images/csea.jpg";
import maria from "../../images/maria-ea.png";

function Home() {
  return (
    <div className="home-wrapper-main">
      <section className="home-landing">
        <section className="landing-wrapper">
          <section className="landing-main-text">
            <p className="landing-header">Tax Season Has Arrived!</p>
            <p className="info">
              Click 'Get Started' to get in contact with one of our Enrolled
              Agents Today!
            </p>
            <a
              id="learn-btn"
              href="https://login.atomanager.com/ATOM_PRI/default.aspx?redirect=ProspectMessage.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </section>
        </section>
      </section>
      <section className="icons-wrapper">
        <div className="roll-image enrolled">
          <img src={enrolled} width="230px" />
        </div>
        <div className="roll-image">
          <img src={irs} width="100px" />
        </div>
        <div className="roll-image">
          <img src={csea} width="150px" />
        </div>

        <div className="roll-image nna">
          <img src={nna} width="200px" />
        </div>
      </section>

      <section className="second-hom">
        <section className="second-home">
          <img src={maria} alt="maria l hernandez" width="450px" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            debitis aut corporis repudiandae corrupti impedit harum ex hic odio
            perspiciatis, quidem vitae enim soluta reiciendis eos aperiam!
            Molestias laudantium ratione nulla omnis. Quaerat reprehenderit
            saepe ullam voluptatum sed corporis culpa iure maiores? Vero est
            totam odio deserunt quis laborum aliquam!
          </p>
        </section>
      </section>
    </div>
  );
}

export default Home;

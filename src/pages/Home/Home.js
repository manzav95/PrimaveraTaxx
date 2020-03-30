import React from "react";
import "./style.css";
import enrolled from "../../images/enrolled.jpg";
import irs from "../../images/irs.jpg";
import nna from "../../images/nna.jpg";
import csea from "../../images/csea.jpg";

function Home() {
  return (
    <div className="home-wrapper-main">
      <section className="home-landing">
        <div className="overlay"></div>
        <section className="landing-wrapper">
          <section className="landing-main-text">
            {/* <p className="landing-header">It's More Than Just Taxes</p> */}
            <p className="landing-header">This Ain't Your Mommas Tax Shop</p>
            <p className="info">
              <span className="get-started">Contact Us</span> to setup an
              appointment today!
            </p>
            <a
              id="start-btn"
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

      <div className="services-section">
        <h2>Services offered</h2>
        <div className="offered-services">
          <div className="service">
            <i class="fas fa-book-open"></i>
            <p>Bookkeeping</p>
          </div>
          <div className="service">
            <i class="fas fa-money-check-alt"></i>
            <p>Payroll Services</p>
          </div>
          <div className="service">
            <i class="fas fa-business-time"></i>
            <p>Business Tax Return</p>
          </div>
          <div className="service">
            <i class="fas fa-user-clock"></i>
            <p>Individual Tax Return</p>
          </div>
          <div className="service">
            <i class="fas fa-id-card"></i>
            <p>ITIN Services</p>
          </div>
          <div className="service">
            <i class="fas fa-file-signature"></i>
            <p>Notary Public</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

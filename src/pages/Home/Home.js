import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="home-wrapper-main">
      <section className="home-landing">
        <section className="landing-wrapper">
          <section className="landing-main-text">
            <p className="landing-header">Tax Season Has Arrived!</p>
            <p className="info">
              Learn how you can save the maximum amount on your tax refund
              today...
            </p>
            <button id="learn-btn" disabled="disabled">
              Learn More
            </button>
          </section>
        </section>
      </section>
      <section className="body-wrapper">Daaaaaamn</section>
    </div>
  );
}

export default Home;

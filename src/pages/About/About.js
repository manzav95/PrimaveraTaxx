import React from "react";
import maria from "../../images/maria-ea.png";

function About() {
  return (
    <div className="about-wrapper-main">
      <section className="about-header">
        {" "}
        <h1>Lets Meet The Team</h1>
        <p>
          Primavera Taxx was established in 2011 by founder Maria Luisa
          Hernandez. It all started in a small office in Antioch, California and
          now we have expanded to a 1000 sq. ft location on Hillcrest Ave in the
          same city. We have constantly increased our customer base and this has
          been mainly due to word of mouth recommendations. Our main objective
          is to serve our clients professionally and efficiently.{" "}
        </p>
      </section>
      <section className="second-hom">
        <section className="second-home">
          <img src={maria} alt="maria l hernandez" width="450px" />
          <section>
            <h2>
              Proudly Servicing Countless Of Businesses And Families ALL Year
              Round...
            </h2>
            <p>
              Primavera Taxx was founded on the fundamental basis that our
              clients deserve to be treated as family and not just another tax
              filing process. We’re here to provide the TAX HELP you deserve and
              ensure you a friendly and secure environment were you can leave
              feeling relieved from any TAX related event.
            </p>
            <p>
              Primavera Taxx isn’t just another “Tax Place Near Me” location.
              The reason we’ve grown to the point where we are today is thanks
              to all our satisfied customers speaking on behalf of our service.
              We’ve welcomed countless of new customers from other big name Tax
              corporations and continue to strive for the best Tax service
              experience possible not just in our area but remotely as well.
            </p>
            <p>
              An <span>Enrolled Agent (EA)</span> is a federally-authorized tax
              practitioner who has technical expertise in the field of taxation.
              The EA license is maintained by stringent annual continuing
              education requirements monitored by the IRS.{" "}
            </p>
          </section>
        </section>
      </section>
    </div>
  );
}

export default About;

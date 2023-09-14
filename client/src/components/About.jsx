import React from "react";
import "../styles/About.css";
function About() {
  return (
    <>
      <div className="About-page-intro">
        <div className="About-page-right">
          <div className="About-page-img-stack">
            <img
              src="https://easebuzz.in/static/base/images/partner-signup/payous.png"
              alt=""
              width="450px"
              height="450px"
              className="About-page-img"
            />
          </div>
        </div>
        <div className="About-page-left">
          <h2>About us</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur neque est soluta dignissimos eligendi. Quas porro in et
            eligendi blanditiis recusandae magni modi molestias
          </p>
          <a href="/Project">
            {" "}
            <button className="all-btn">Get Cv</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;

import React from "react";
import "../styles/About.css";
function Header() {
  return (
    <>
      <div className="About-page-intro">
        <div className="About-page-left">
          <h2>Learn with Inter,</h2>
          <h2 style={{ color: "#27b67a" }}>Grow! with Inter</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur neque est soluta dignissimos eligendi. Quas porro in et
          </p>
          <a href="/Project">
            {" "}
            <button className="all-btn">Know more</button>
          </a>
        </div>
        <div className="About-page-right">
          <div className="About-page-img-stack">
            <img
              src="https://www.thematrixlabs.com/static/media/icon-bg1.7d074b56bb498bf7ebcf539e407b63e5.svg"
              alt="gg"
              width="550px"
              height="450px"
              className="About-page-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

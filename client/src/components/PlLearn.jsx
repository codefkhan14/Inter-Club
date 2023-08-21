import React from "react";
import "../styles/TechnologieLearn.css";
import Html from "../assests/html.png";
import Css from "../assests/css.png";
import Js from "../assests/js.png";
import react from "../assests/react.png";
import angular from "../assests/angular.png";
import vue from "../assests/vue.png";
import bootstrap from "../assests/bootstrap.png";
import tailwind from "../assests/tailwind.png";
import nodejs from "../assests/nodejs.png";
import express from "../assests/express.png";
function PlLearn() {
  return (
    <div className="service">
      <h2>programming language</h2>
      <div className="service-item">
        <div className="service-item1">
          <img src={Html} alt="error" />

          <div className="service-detail">
            <h4>c</h4>
            <p>this is framwork of css</p>
            <a
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
            >
              <button>Learn</button>
            </a>
          </div>
        </div>
        <div className="service-item1">
          <img src={Css} alt="error" />

          <div className="service-detail">
            <h4>c++</h4>
            <p>this is framwork of css</p>
            <a
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
            >
              <a
                href="https://www.w3schools.com/css/default.asp"
                target="_blank"
              >
                <button>Learn</button>
              </a>
            </a>
          </div>
        </div>
        <div className="service-item1">
          <img src={Js} alt="error" />

          <div className="service-detail">
            <h4>java</h4>
            <p>this is framwork of css</p>
            <a
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
            >
              <button>Learn</button>
            </a>
          </div>
        </div>
        <div className="service-item1">
          <img src={react} alt="error" />

          <div className="service-detail">
            <h4>python</h4>
            <p>this is framwork of css</p>
            <a
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
            >
              <button>Learn</button>
            </a>
          </div>
        </div>
        <div className="service-item1">
          <img src={angular} alt="error" />

          <div className="service-detail">
            <h4>javascript</h4>
            <p>this is framwork of css</p>
            <a
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
            >
              <button>Learn</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlLearn;

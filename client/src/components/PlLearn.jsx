import React from "react";
import "../styles/TechnologieLearn.css";
import Js from "../assests/js.png";
import c from "../assests/c.png";
import cpp from "../assests/cpp.png";
import java from "../assests/java.png";
import js from "../assests/js.png";
import python from "../assests/python.png";

function PlLearn() {
  return (
    <div className="service">
      <h2>programming language</h2>
      <div className="service-item">
        <div className="service-item1">
          <img src={c} alt="error" />

          <div className="service-detail">
            <h4>c</h4>
            <p>A Programming Language</p>
            <a
              href="https://www.w3schools.com/c/index.php"
              target="_blank"
            >
              <button>Learn</button>
            </a>
          </div>
        </div>
        <div className="service-item1">
          <img src={cpp} alt="error" />

          <div className="service-detail">
            <h4>c++</h4>
            <p>A Programming Language</p>
            <a
              href="https://www.w3schools.com/cpp/default.asp"
              target="_blank"
            >
                <button>Learn</button>
              </a>
          </div>
        </div>
        <div className="service-item1">
          <img src={java} alt="error" />

          <div className="service-detail">
            <h4>java</h4>
            <p>A Programming Language</p>
            <a
              href="https://www.w3schools.com/java/default.asp"
              target="_blank"
            >
              <button>Learn</button>
            </a>
          </div>
        </div>
        <div className="service-item1">
          <img src={python} alt="error" />

          <div className="service-detail">
            <h4>python</h4>
            <p>A Programming Language</p>
            <a
              href="https://www.w3schools.com/python/default.asp"
              target="_blank"
            >
              <button>Learn</button>
            </a>
          </div>
        </div>
        <div className="service-item1">
          <img src={js} alt="error" />

          <div className="service-detail">
            <h4>javascript</h4>
            <p>A Programming Language</p>
            <a
              href="https://www.w3schools.com/js/default.asp"
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

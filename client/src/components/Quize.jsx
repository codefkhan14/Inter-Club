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
import { Link } from "react-router-dom";
function Quize() {
  return (
    <>
      <div className="All-tech-icons">
        <h1>Select topic</h1>
        <div className="icons-frow">
          <div className="html-icon">
            <Link
             to="/Learning/Quize/html"
             
            >
              <img src={Html} alt="error" />
            </Link>
            <h6>Html</h6>
          </div>
          <div className="html-icon">
            <Link to="/Learning/Quize/css" >
              <img src={Css} alt="error" />
            </Link>
            <h6>css</h6>
          </div>
          <div className="html-icon">
          <Link to="/Learning/Quize/js" >
              <img src={Js} alt="error" />
            </Link>
            <h6>Js</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={react} alt="error" />
            </a>
            <h6>reactjs</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={angular} alt="error" />
            </a>
            <h6>Angularjs</h6>
          </div>
        </div>

        <div className="icons-frow">
          <div className="html-icon">
            <a href="">
              <img src={vue} alt="error" />
            </a>
            <h6>Vue</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={nodejs} alt="error" />
            </a>
            <h6>nodejs</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={express} alt="error" />
            </a>
            <h6>express</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={bootstrap} alt="error" />
            </a>
            <h6>bootstrap</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={tailwind} alt="error" />
            </a>
            <h6>tailwind</h6>
          </div>
        </div>

        <div className="icons-frow">
          <div className="html-icon">
            <a href="">
              <img src={bootstrap} alt="error" />
            </a>
            <h6>bootstrap</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={tailwind} alt="error" />
            </a>
            <h6>tailwind</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>sass</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>Html</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>Html</h6>
          </div>
        </div>

        <h3>Data bases</h3>
        <div className="icons-frow">
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>mongo db</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>sql</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>my sql</h6>
          </div>
        </div>
        <h3>Core Subjects</h3>
        <div className="icons-frow">
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>dbms</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>oops</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>Ai</h6>
          </div>
          <div className="html-icon">
            <a href="">
              <img src={Html} alt="error" />
            </a>
            <h6>ml</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quize;

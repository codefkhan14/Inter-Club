import React from 'react'
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
    <div className="All-tech-icons">
    <h1>programming language</h1>
    <div className="icons-frow">
      <div className="html-icon">
        <a href="https://www.w3schools.com/html/default.asp" target="_blank">
          <img src={Html} alt="error" />
        </a>
        <h6>c</h6>
      </div>
      <div className="html-icon">
        <a href="https://www.w3schools.com/css/default.asp" target="_blank">
          <img src={Css} alt="error" />
        </a>
        <h6>c++</h6>
      </div>
      <div className="html-icon">
        <a href="">
          <img src={Js} alt="error" />
        </a>
        <h6>Java</h6>
      </div>
      <div className="html-icon">
        <a href="">
          <img src={react} alt="error" />
        </a>
        <h6>python</h6>
      </div>
      <div className="html-icon">
        <a href="">
          <img src={angular} alt="error" />
        </a>
        <h6>Javascript</h6>
      </div>
    </div>

    <div className="icons-frow">
        <div className="html-icon">
          <a href="">
            <img src={vue} alt="error" />
          </a>
          <h6>c#</h6>
        </div>
        <div className="html-icon">
          <a href="">
            <img src={nodejs} alt="error" />
          </a>
          <h6>go</h6>
        </div>
        <div className="html-icon">
          <a href="">
            <img src={express} alt="error" />
          </a>
          <h6>r</h6>
        </div>
        <div className="html-icon">
          <a href="">
            <img src={bootstrap} alt="error" />
          </a>
          <h6>perl</h6>
        </div>
        <div className="html-icon">
          <a href="">
            <img src={tailwind} alt="error" />
          </a>
          <h6>swift</h6>
        </div>
      </div>

  </div>
  )
}

export default PlLearn

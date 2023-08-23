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
import sql from "../assests/sql.png";
import mysql from "../assests/mysql.png";
import mongo from "../assests/mongodb.png";
import express from "../assests/express.png";
import dbm from "../assests/dbm.png";
import ai from "../assests/ai.png";
import ml from "../assests/ml.png";
import oops from "../assests/oops.png";

function Service() {
  return (
    <>
      <div className="service">
        <h2>Technologies</h2>
        <div className="service-item">
          <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>html</h4>
              <p>Building web pages</p>
          <a href="https://www.w3schools.com/html/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={Css} alt="error" />


            <div className="service-detail">
              <h4>css</h4>
              <p>Styling web pages</p>
          <a href="https://www.w3schools.com/css/default.asp" target="_blank">
              <button>Learn</button>

          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={Js} alt="error" />


            <div className="service-detail">
              <h4>javascript</h4>
              <p>Programming language</p>
          <a href="https://www.w3schools.com/js/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={react} alt="error" />



            <div className="service-detail">
              <h4>react js</h4>
              <p>A Frontend library</p>
          <a href="https://www.w3schools.com/react/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={angular} alt="error" />


            <div className="service-detail">
              <h4>angular js</h4>
              <p>The Frontend framwork</p>
          <a href="https://www.w3schools.com/angular/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={vue} alt="error" />



            <div className="service-detail">
              <h4>vue js</h4>
              <p>The Frontend framework</p>
          <a href="https://www.w3schools.com/vue/index.php" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={nodejs} alt="error" />



            <div className="service-detail">
              <h4>node js</h4>
              <p>Runtime environment.</p>
          <a href="https://www.w3schools.com/nodejs/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={express} alt="error" />




            <div className="service-detail">
              <h4>express</h4>
              <p>A Nodejs Framework</p>
          <a href="https://www.javatpoint.com/expressjs-tutorial" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={bootstrap} alt="error" />





            <div className="service-detail">
              <h4>bootstrap</h4>
              <p>A css Framework</p>
          <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
          <img src={tailwind} alt="error" />





            <div className="service-detail">
              <h4>tailwind</h4>
              <p>A Css Framwork</p>
          <a href="https://tailwindcss.com/" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
        </div>
        <h2>databases</h2>
        <div className="service-item">
        <div className="service-item1">
            <img src={mongo} alt="error" />


            <div className="service-detail">
              <h4>mongo db</h4>
              <p>A Non sql database</p>
          <a href="https://www.w3schools.com/mongodb/index.php" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
            <img src={sql} alt="error" />


            <div className="service-detail">
              <h4>sql</h4>
              <p>A language for database</p>
          <a href="https://www.w3schools.com/sql/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
            <img src={mysql} alt="error" />


            <div className="service-detail">
              <h4>my sql</h4>
              <p>Relational Database</p>
          <a href="https://www.w3schools.com/mysql/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
    
        </div>
        <h2>core subjects</h2>
        <div className="service-item">
        <div className="service-item1">
            <img src={dbm} alt="error" />


            <div className="service-detail">
              <h4>dbms</h4>
              <p>Database Managment</p>
          <a href="https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
            <img src={oops} alt="error" />


            <div className="service-detail">
              <h4>oops</h4>
              <p>Object Oriented</p>
          <a href="https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
            <img src={ai} alt="error" />


            <div className="service-detail">
              <h4>ai</h4>
              <p>Artificial Intelligence</p>
          <a href="https://www.w3schools.com/ai/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
          <div className="service-item1">
            <img src={ml} alt="error" />


            <div className="service-detail">
              <h4>ml</h4>
              <p>Machine Learning</p>
          <a href="https://www.w3schools.com/ai/default.asp" target="_blank">
              <button>Learn</button>
          </a>
            </div>
          </div> 
    
        </div>
      </div>


    </>
  );
}

export default Service;


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
         <div className="service">
        <h2>select topic</h2>
        <div className="service-item">
          <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>html</h4>
              <p>this is framwork of css</p>
              <Link to="/Learning/Quize/html">
              <button>attempt</button>
              
            </Link>



            </div>
          </div> 
          <div className="service-item1">
          <img src={Css} alt="error" />


            <div className="service-detail">
              <h4>css</h4>
              <p>this is framwork of css</p>
              <Link to="/Learning/Quize/css">
              <button>Attempt</button>
             
            </Link>

        
            </div>
          </div> 
          <div className="service-item1">
          <img src={Js} alt="error" />


            <div className="service-detail">
              <h4>javascript</h4>
              <p>this is framwork of css</p>
              <Link to="/Learning/Quize/html">
              <button>attempt</button>
            </Link>

            </div>
          </div> 
          <div className="service-item1">
          <img src={react} alt="error" />



            <div className="service-detail">
              <h4>react js</h4>
              <p>this is framwork of css</p>
              <Link to="/Learning/Quize/html">
              <button>attempt</button>
            </Link>

            </div>
          </div> 
          <div className="service-item1">
          <img src={angular} alt="error" />


            <div className="service-detail">
              <h4>angular js</h4>
              <p>this is framwork of css</p>
              <Link to="/Learning/Quize/html">
              <button>attempt</button>
            </Link>


         
            </div>
          </div> 
          <div className="service-item1">
          <img src={vue} alt="error" />



            <div className="service-detail">
              <h4>vue js</h4>
              <p>this is framwork of css</p>
              <Link to="/Learning/Quize/html">
              <button>attempt</button>
            </Link>

            </div>
          </div> 
          <div className="service-item1">
          <img src={nodejs} alt="error" />



            <div className="service-detail">
              <h4>node js</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
          <div className="service-item1">
          <img src={express} alt="error" />




            <div className="service-detail">
              <h4>express</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
          <div className="service-item1">
          <img src={bootstrap} alt="error" />





            <div className="service-detail">
              <h4>bootstrap</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
          <div className="service-item1">
          <img src={tailwind} alt="error" />





            <div className="service-detail">
              <h4>tailwind</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
        </div>
        <h2>databases</h2>
        <div className="service-item">
        <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>mongo db</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
          <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>sql</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
          <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>my sql</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
    
        </div>
        <h2>core subjects</h2>
        <div className="service-item">
        <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>dbms</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
          <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>oops</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
          <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>ai</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
          <div className="service-item1">
            <img src={Html} alt="error" />


            <div className="service-detail">
              <h4>ml</h4>
              <p>this is framwork of css</p>
            <Link to="/Learning/Quize/html">
             <button>attempt</button>
       </Link>
            </div>
          </div> 
    
        </div>
      </div>
    </>
  );
}

export default Quize;

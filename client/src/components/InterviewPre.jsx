import React from 'react'
// import "../styles/Header.css";
import "../styles/About.css";

import { Link } from 'react-router-dom';
function InterviewPre() {
  return (
    <>
       <div className="About-page-intro">
       
 
       <div className="About-page-left">
       <h2>Mock interview</h2>
    <h2>grow! with inter</h2>
       
         <p>
       itatibus nam illo perferendis veniam tenetur dicta quaerat error animi non similique atque modi molestiae omnis quos adipisci tempore totam alias nostrum, nobis hic?
         </p>
       <a href="/Project"> <button className="all-btn">Register</button></a> 
       <Link to="/Learning/Quize"> <button className="all-btn second-btn" >play Quize</button></Link> 
       </div>

         <div className="About-page-right">
         <div className="About-page-img-stack">
           <img
             src="https://themewagon.github.io/satner/img/about-us.png"
             alt=""
             width="450px"
             height="450px"
             className="About-page-img"
           />
         </div>
       </div>

     </div>
    </>
  //   <div className= "intro">
  //   <div className="left">
  //     <h2>Mock interview</h2>
  //     <h2>grow! with inter</h2>
    
  //     <p>
  //      Click the Register Button and book the slote Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, reprehenderit.
  //     </p>
  //   <a href="/"> <button className="intro-btn all-btn">Register</button></a> 

  //   <Link to="/Learning/Quize"> <button className="intro-btn all-btn second-btn" >play Quize</button></Link> 
  //   </div>

  //   <div className="right">
  //     <div className="img-stack">
  //       <img
  //         src="https://th.bing.com/th/id/OIP.TZieuHjSkekeGlRORqtd9AHaHa?pid=ImgDet&w=801&h=801&rs=1"
  //         alt=""
  //         width="450px"
  //         height="450px"
  //         className="img"
  //       />
  //     </div>
  //   </div>
  // </div>

  )
}

export default InterviewPre

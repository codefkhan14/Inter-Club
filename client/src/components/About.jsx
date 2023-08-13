import React from 'react'
import "../styles/About.css";
function About() {
  return (
    <div>
          <div className="About-page-intro">
       
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
       <div className="About-page-left">
         <h2>About us</h2>
       
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
           saepe perspiciatis fuga error reprehenderit cumque soluta
           provclassNameent placeat ratione eius!
<br />
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam delectus fugit facere recusandae architecto aliquam consequuntur libero dolorum magnam dolores.
         </p>
       <a href="/Project"> <button className="all-btn">get cv</button></a> 
       </div>

     </div>
    </div>
  )
}

export default About

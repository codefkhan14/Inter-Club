import React from 'react'
import "../styles/About.css";
function About() {

  return (
    <>
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur neque est soluta dignissimos eligendi. Quas porro in et eligendi blanditiis recusandae magni modi molestias sint unde. Necessitatibus nam illo perferendis veniam tenetur dicta quaerat error animi non similique atque modi molestiae omnis quos adipisci tempore totam alias nostrum, nobis hic?
         </p>
       <a href="/Project"> <button className="all-btn">get cv</button></a> 
       </div>

       

     </div>
    </>
  )
}

export default About

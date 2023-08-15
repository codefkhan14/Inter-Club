import React from 'react'
import "../styles/Header.css";
function Header() {
  return (
    <>
         <div className= "intro">
        <div className="left">
          <h2>learn with inter,</h2>
          <h2>grow! with inter</h2>
        
          <p>
            2nd is thi sis my wno eb  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet tempora at illo, esse perspiciatis consequuntur blanditiis id laudantium quisquam ducimus fuga aliquam, iste nam quod qui consectetur accusantium! Eaque id possimus impedit quos culpa iure veritatis perspiciatis quia, nobis voluptatum. Laborum dolorem adipisci eligendi, obcaecati voluptatem sed sit itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            saepe perspiciatis fuga error reprehenderit cumque soluta
            provclassNameent placeat ratione eius!
          </p>
        <a href="/"> <button className="intro-btn all-btn">know more</button></a> 
        </div>

        <div className="right">
          <div className="img-stack">
            <img
              src="https://th.bing.com/th/id/OIP.TZieuHjSkekeGlRORqtd9AHaHa?pid=ImgDet&w=801&h=801&rs=1"
              alt=""
              width="450px"
              height="450px"
              className="img"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

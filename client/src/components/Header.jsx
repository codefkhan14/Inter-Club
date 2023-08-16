import React from "react";
import "../styles/About.css";
function Header() {
  return (
    <>
      <div className="About-page-intro">
        <div className="About-page-left">
          <h2>learn with inter,</h2>
          <h2>grow! with inter</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur neque est soluta dignissimos eligendi. Quas porro in et
            eligendi blanditiis recusandae magni modi molestias sint unde.
            Necessitatibus nam illo perferendis veniam tenetur dicta quaerat
            error animi non similique atque modi molestiae omnis quos adipisci
            tempore totam alias nostrum, nobis hic?
          </p>
          <a href="/Project">
            {" "}
            <button className="all-btn">Know more</button>
          </a>
        </div>
        <div className="About-page-right">
          <div className="About-page-img-stack">
            <img
              src="https://th.bing.com/th/id/OIP.TZieuHjSkekeGlRORqtd9AHaHa?pid=ImgDet&w=801&h=801&rs=1"
              alt=""
              width="450px"
              height="450px"
              className="About-page-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

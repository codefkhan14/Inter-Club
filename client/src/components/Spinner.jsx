import React from "react";
import Loader from "../assests/spinner.gif";
import "../styles/Spinner.css";
function Spinner() {
  return (
    <div className="spinners">
      <img src={Loader} alt="error" className="spinner-img" />
      <span>Loading...</span>
    </div>
  );
}

export default Spinner;

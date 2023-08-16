import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Quizehtml from '../components/QuizeHtml'
import Spinner from "../components/Spinner";
import { API_BASE_URL } from "../config"; 

function QuizeCss() {
  const apilink = `${API_BASE_URL}/api/cssquiz`;
    const title  = "css quize"
    const [load, setLoad] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    });
    
  return (
    <>
        <>
      {load ? (
        <div>
           <Navbar/>
          <Spinner />
           <Footer/>
        </div>
      ) : (
        <div>
           <Navbar/>
        <Quizehtml api={apilink} title = {title} />
        <Footer/>
        </div>
      )}
    </>
    </>
  )
}

export default QuizeCss

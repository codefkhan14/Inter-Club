import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Aboutt from "../components/About";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
function About() {
    const [load, setLoad] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    });
  return (
    <>
    {load ? (
      <div>
        <Navbar />
        <Spinner />
        <Footer />
      </div>
    ) : (
      <div>
        <Navbar />
        <Aboutt />
        <Footer />
      </div>
    )}
  </>
  )
}

export default About

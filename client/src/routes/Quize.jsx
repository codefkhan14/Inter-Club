import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Quizee from "../components/Quize";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

function Quize() {
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
          <Quizee />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Quize;

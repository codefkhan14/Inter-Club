import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InterviewPre from "../components/InterviewPre";
import Spinner from "../components/Spinner";
function InterviewPrepration() {
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
        <InterviewPre />
        <Footer />
      </div>
    )}
  </>
  
  );
}

export default InterviewPrepration;

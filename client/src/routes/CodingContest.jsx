import React, { useEffect, useState } from "react";
import CommingSoon from '../components/ComminSoon'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Spinner from "../components/Spinner";

function CodingContest() {
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
         <Navbar/>
         <Spinner />
     <Footer/>
        </div>
      ) : (
        <div>
         <Navbar/>
     <CommingSoon/>
     <Footer/>
        </div>
      )}
    </>
  )
}

export default CodingContest

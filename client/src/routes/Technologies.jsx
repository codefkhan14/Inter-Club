import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import TechnologieLearn from '../components/TechnologieLearn'
import Footer from '../components/Footer'
import Spinner from "../components/Spinner";


function Technologies() {
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
          <Footer />

        </div>
      ) : (
        <div>
          <Navbar />
          <TechnologieLearn/>
          <Footer />
        </div>
      )}
    </>
 
  )
}

export default Technologies

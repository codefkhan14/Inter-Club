import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PlLearn from "../components/PlLearn";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

function Pl() {
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
          <PlLearn />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Pl;

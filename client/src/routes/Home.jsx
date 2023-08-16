import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

function Home() {
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
          <Spinner />
        </div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <About />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;

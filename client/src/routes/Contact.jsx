import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import ContactUs from "../components/ContactUs";

function Contact() {
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
       <ContactUs/>
        <Footer />
      </div>
    )}
  </>
  )
}

export default Contact

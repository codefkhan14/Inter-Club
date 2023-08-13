import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Quizehtml from '../components/QuizeHtml'
function QuizeHtml() {
  const apilink = "http://localhost:5000/api/htmlquiz"
  const title = "html quize"
  return (
    <>

        <Navbar/>
        <Quizehtml api={apilink} title = {title} />
        <Footer/>
    </>
  )
}

export default QuizeHtml

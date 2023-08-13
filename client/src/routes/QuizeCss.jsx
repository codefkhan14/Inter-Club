import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Quizehtml from '../components/QuizeHtml'
function QuizeCss() {
    const apilink = "http://localhost:5000/api/cssquiz"
    const title  = "css quize"
    
  return (
    <>
       <Navbar/>
        <Quizehtml api={apilink} title = {title} />
        <Footer/>
    </>
  )
}

export default QuizeCss

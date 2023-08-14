import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Quizehtml from '../components/QuizeHtml'
import { API_BASE_URL } from "../config"; 
function QuizeHtml() {
  const apilink = `${API_BASE_URL}/api/htmlquiz`;
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

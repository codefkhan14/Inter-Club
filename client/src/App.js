import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Technologies from './routes/Technologies';
import Quize from './routes/Quize';
import InterviewPrepration from './routes/InterviewPrepration';
import Pl from './routes/Pl';

import QuizeContest from './routes/QuizeContest';
import CodingContest from './routes/CodingContest';
import QuizeHtml from './routes/QuizeHtml';
import QuizeCss from './routes/QuizeCss';
function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Learning/Technologies" element={<Technologies/>} /> 
        <Route path="/Learning/Quize" element={<Quize/>} /> 
        <Route path="/Learning/Quize/html" element={<QuizeHtml/>} /> 
        <Route path="/Learning/Quize/css" element={<QuizeCss/>} /> 
        <Route path="/Learning/Interview-prepration" element={<InterviewPrepration/>} /> 
        <Route path="/Learning/Programming-Language" element={<Pl/>} /> 


        <Route path="/Contest/Coding-contest" element={<CodingContest/>} /> 
        <Route path="/Contest/Quize-contest" element={<QuizeContest/>} /> 
       
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;

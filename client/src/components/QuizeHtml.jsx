import React, { useEffect, useState } from 'react'
import QuizeHelper from './QuizeHelper'
import "../styles/QuizeHtml.css";
import axios from 'axios';
function QuizeHtml({api, title}) {
   
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(api) // Update with your backend URL
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching quiz data:', error);
      });
  }, []);
  const handleAnswerSubmit = (answer) => {
    setAnswers(prevAnswers => [...prevAnswers, answer]);
  };




  return (
    <div className="Quize-Que">
      <h1>{title}</h1>
      {questions.map((question, index) => (
        <QuizeHelper
          key={index}
          question={question.question}
          options={question.options}
          explanation={question.explanation}
          correctAnswer={question.correctAnswer}
          onAnswerSubmit={answer => handleAnswerSubmit(answer)}
        />
      ))}
    </div>
  );
}

export default QuizeHtml

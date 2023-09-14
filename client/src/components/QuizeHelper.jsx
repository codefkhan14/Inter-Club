// import React from 'react'
import React, { useState } from "react";
import "../styles/QuizeHelper.css";

function QuizeHelper({ question, options, correctAnswer, explanation }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [select, setSelect] = useState(false);
  const [clickButton, setClickButton] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const handleSelectAnswer = (option) => {
    setSelect(true);

    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (select) {
      setClickButton(!clickButton);
      setShowCorrectAnswer(true);
    }
  };
  return (
    <>
      <div className="Quize-helper">
        <h3>{question}</h3>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <label
                className={`option ${
                  selectedAnswer === option ? "selected" : ""
                } ${
                  showCorrectAnswer && correctAnswer === option ? "correct" : ""
                } ${
                  showCorrectAnswer &&
                  option === selectedAnswer &&
                  option !== correctAnswer
                    ? "incorrect"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleSelectAnswer(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <button className="quize-submit-btn" onClick={handleSubmitAnswer}>
          Submit
        </button>
        <div className={`Quize-exp ${clickButton ? "Submit-Quize" : ""} `}>
          <p>
            <strong>Explaination: </strong>
            {explanation}
          </p>
        </div>
      </div>
    </>
  );
}

export default QuizeHelper;

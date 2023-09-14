import React, { useState } from 'react';
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
import '../styles/Faq.css'
const Faq = () => {
  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.'
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn by running "npm install react" or "yarn add react".'
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn by running "npm install react" or "yarn add react".'
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn by running "npm install react" or "yarn add react".'
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn by running "npm install react" or "yarn add react".'
    },
    // Add more FAQ items here...
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [clickSign, setClickSign] = useState(false)
  const tapArrow = () =>{
    setClickSign(!clickSign);
  }
  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq">
      <div className="faq-details">
      
    <h2>FAQ</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque blanditiis, numquam minus ducimus autem voluptate labore velit optio veritatis tempora vitae porro atque praesentium perferendis. Numquam totam asperiores ipsam.</p>
      </div>

    <div className="faq-container">
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-que" onClick={tapArrow} >
             <div className="faq-question">

            {item.question}
             </div>
             <div className="faq-sign">

              {
                clickSign ? <IoIosArrowDown/> : <IoIosArrowUp/>
              }
             </div>
            </div>
          </div>
          {activeIndex === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
    </div>

  );
};

export default Faq;

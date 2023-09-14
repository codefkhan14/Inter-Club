import React from 'react';
import Faq from './Faq';

const faqData = [
  {
    question: 'What is React?',
    answer: 'React dljdslfjdslfjds;ljdsljdslfjss;ljsd;lfis a JavaScript library for building user interfaces.'
  },
  {
    question: 'How do I install React?',
    answer: 'You can install React using npm or yarn by running "npm install react" or "yarn add react".'
  },
  // Add more FAQ items here...
];

function FaqData() {
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <Faq faqData={faqData} />
    </div>
  );
}

export default FaqData;

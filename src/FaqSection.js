import React, { useState } from "react";
import "./FaqSection.css";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  function toggleFaq(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="FaqSection">
      <h1>FAQ</h1>
      {faqData.map((faq, index) => {
        <div key={index} className="faq" onClick={() => toggleFaq(index)}>
          <div className="question">
            <h2>{faq.question}</h2>
            <span>
              <i className="fa-solid fa-plus plus-icon"></i>
              <i className="fa-solid fa-minus minus-icon"></i>
            </span>
          </div>
          <div className="answer">
            <p>{faq.answer}</p>
          </div>
        </div>;
      })}
    </div>
  );
}

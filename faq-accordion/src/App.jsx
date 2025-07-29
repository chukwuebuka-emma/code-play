import starIcon from "./assets/images/icon-star.svg";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import { useState } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const faqs = [
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
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  function handleClick(index) {
    if (currentIndex === index) {
      setCurrentIndex(null);
      return;
    }
    setCurrentIndex(index);
  }

  return (
    <main className="faq">
      <section className="card">
        <header className="card__header">
          <img src={starIcon} alt="Star icon" className="card__icon" />
          <h1 className="card__title">FAQs</h1>
        </header>
        <div className="card__list">
          {faqs.map((faq, index) => (
            <div className="card__item" key={index}>
              <div
                className="card__question"
                onClick={() => handleClick(index)}>
                <span>{faq.question}</span>
                <img
                  src={currentIndex === index ? minusIcon : plusIcon}
                  alt="Expand icon"
                />
              </div>
              <p
                className={`card__answer ${
                  currentIndex === index ? "show" : ""
                }`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

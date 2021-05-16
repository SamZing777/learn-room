import React, { useState } from "react";
import Footer from "../partials/footer";
import Navigation from "../partials/navigation";

const Assessment = () => {
  const [questions, setQuestions] = useState([
    {
      question:
        "Root it has but no one sees, tall taller than trees, up it goes but it never grows",
      answer: "moutain",
      options: ["trees", "river", "moutain", "wall"],
    },
    {
      question: "Who is the current president of the United States of America",
      answer: "Joe biden",
      options: ["Joe biden", "Alli leavlets", "Simpson Batt", "Kellogs beltch"],
    },
  ]);
  const renderQuestions = questions.map((question, index) => {
    return (
      <div className="question-container" key={index}>
        <div className="question-top">
          <h5>Quesiton {index + 1}</h5>
        </div>
        <p className="question">{question.question}</p>
        <div className="options-container">
          {question.options.map((option, ind) => {
            return (
              <label htmlFor={`question-${index}-option-${ind}`} key={ind}>
                <input
                  type="radio"
                  name={`question-option-${index}`}
                  id={`question-${index}-option-${ind}`}
                />
                <div className="container">
                  <p>{option}</p>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <Navigation />
      <div className="assessment-container">
        <div className="center-container">
          <div className="assessment-left-container"></div>
          <div className="assessment-right-container">
            <h5>Assessment - Javascript for dummies</h5>
            <div className="questions-container">{renderQuestions}</div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Assessment;

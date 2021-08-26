import React from "react";

const AnswerComponent = ({ question, answers }) => {
  return (
    <>
      <h1>{question}</h1>
      {answers.map((answer, index) => (
        <h2 key={index}>{answer}</h2>
      ))}
    </>
  );
};

export default AnswerComponent;

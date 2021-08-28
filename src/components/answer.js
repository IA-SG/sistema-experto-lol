import React from "react";
import Button from "@material-ui/core/Button";

const AnswerComponent = ({ index, answerIndex, user, answer, handleFirstQuestions, handleQuestionNext }) => {
  return (
    <Button
      key={answerIndex}
      onClick={() => {
        !user.desglozar
          ? handleFirstQuestions(index - 1, answerIndex)
          : handleQuestionNext(index, answerIndex);
      }}
      style={{ margin: "10px" }}
      variant="contained"
      color="primary"
      size="large"
    >
      {answer}
    </Button>
  );
};

export default AnswerComponent;

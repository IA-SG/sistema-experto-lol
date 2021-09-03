<<<<<<< HEAD
import React from "react";
import Button from "@material-ui/core/Button";

const AnswerComponent = ({ index, answerIndex, user, answer, handleFirstQuestions, handleQuestionNext }) => {
  return (
    <Button
      key={answerIndex}
      onClick={() => {
        !user.desglozar
          ? handleFirstQuestions(index, answerIndex)
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
=======
import React from "react";
import Button from "@material-ui/core/Button";

const AnswerComponent = ({ index, answerIndex, user, answer, handleFirstQuestions, handleQuestionNext }) => {
  return (
    <Button
      key={answerIndex}
      onClick={() => {
        !user.desglozar
          ? handleFirstQuestions(index, answerIndex)
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
>>>>>>> 6d17bc8d6f3b0e48456fc7d04ad2787d9295265b

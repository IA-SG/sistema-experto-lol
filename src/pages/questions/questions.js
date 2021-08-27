import React, { useState } from "react";
import questionsMap from "../../assets/questions";
import QuestionComponent from "../../components/answer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./questions.css";

const QuestionsPage = () => {
  const [index, setIndex] = useState(1);

  const handleNext = () => {
    if (index < questionsMap.length) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="question__background">
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <div className="question__container">
          {questionsMap.length !== 0 && <h2>{questionsMap[index - 1].question}</h2>}
        </div>
        <div className="question__answer">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {questionsMap.length !== 0 &&
              questionsMap[index - 1].answers.map((answer) => (
                <Button onClick={handleNext} variant="outlined" color="primary">
                  {answer}
                </Button>
              ))}
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default QuestionsPage;

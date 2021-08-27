import React, { useState } from "react";
import { firstQuestionsArray, questionsArray } from "../../assets/questions";
import QuestionComponent from "../../components/answer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./questions.css";

const QuestionsPage = () => {
  const [index, setIndex] = useState(1);
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const [line, setLine] = useState("");
  const [damage, setDamage] = useState("");
  const [playerType, setPlayerType] = useState("");
  const [champions, setChampions] = useState([]);

  const hanldeQuestion = (line, damage, playerType) => {
    switch (line) {
      case line[0]:
        if (damage == damage[0]) {
          if (playerType == playerType[0]) {
            setIndex(2);
          } else {
            setIndex(1);
          }
        } else {
          if (playerType == playerType[0]) {
            setIndex(3);
          } else {
            setIndex(4);
          }
        }
        break;
      case line[1]:
        if (damage == damage[0]) {
          if (playerType == playerType[0]) {
            setIndex(5);
          } else {
            setIndex(4);
          }
        } else {
          if (playerType == playerType[0]) {
            setIndex(6);
          } else {
            setIndex(5);
          }
        }
        break;
      case line[2]:
        if (damage == damage[0]) {
          if (playerType == playerType[0]) {
            setIndex(9);
          } else {
            //champ response
          }
        } else {
          if (playerType == playerType[0]) {
            setIndex(9);
          } else {
            setIndex(8);
          }
        }
        break;
      case line[3]:
        if (damage == damage[0]) {
          if (playerType == playerType[0]) {
          } else {
          }
        } else {
          if (playerType == playerType[0]) {
          } else {
          }
        }
        break;
      case line[4]:
        if (damage == damage[0]) {
          if (playerType == playerType[0]) {
            setIndex(12);
          } else {
            setIndex(4);
          }
        } else {
          if (playerType == playerType[0]) {
            setIndex(10);
          } else {
            setIndex(11);
          }
        }
        break;
    }
  };

  const handleNext = () => {
    if (index < questionsArray.length) {
      setIndex(index + 1);
    }
  };

  const handleQuestionChanged = () => {
    setIndex(1);
  };

  const handleFirstQuestions = (questionIndex, responseIndex) => {
    if(questionIndex === 0) {
      setLine(firstQuestionsArray[questionIndex].answers[responseIndex]);
      setIndex(index + 1);
    } else if ( questionIndex === 1 ) {
      setDamage(firstQuestionsArray[questionIndex].answers[responseIndex]);
      setIndex(index + 1);
    } else {
      setPlayerType(firstQuestionsArray[questionIndex].answers[responseIndex]);
      setIsFirstQuestion(false);
    }
  }

  return (
    <div className="question__background">
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <div className="question__container">
          {isFirstQuestion
            ? firstQuestionsArray.length !== 0 && (
                <h2>{firstQuestionsArray[index - 1].question}</h2>
              )
            : questionsArray.length !== 0 && (
                <h2>{questionsArray[index - 1].question}</h2>
              )}
        </div>
        <div className="question__answer">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {isFirstQuestion
              ? firstQuestionsArray.length !== 0 &&
                firstQuestionsArray[index - 1].answers.map((answer, i) => (
                  <Button
                    onClick={() => handleFirstQuestions(index - 1, i)}
                    variant="outlined"
                    color="primary"
                  >
                    {answer}
                  </Button>
                ))
              : questionsArray.length !== 0 &&
                questionsArray[index - 1].answers.map((answer) => (
                  <Button
                    onClick={handleNext}
                    variant="outlined"
                    color="primary"
                  >
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

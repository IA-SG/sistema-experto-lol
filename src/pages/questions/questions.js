import React, { useState, useEffect } from "react";
import { firstQuestionsArray, questionsArray } from "../../assets/questions";
import QuestionComponent from "../../components/answer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./questions.css";

const QuestionsPage = () => {
  const [index, setIndex] = useState(1);
  const [newIndex, setNewIndex] = useState(1);
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const [line, setLine] = useState("");
  const [damage, setDamage] = useState("");
  const [playerType, setPlayerType] = useState("");
  const [champions, setChampions] = useState([]);

  const hanldeQuestion = (line, damage, playerType) => {
    console.log(`${playerType}`);
    switch (line) {
      case line[0]:
        if (damage == damage[0]) {
          if (playerType == playerType[0]) {
            setNewIndex(2);
          } else {
            setNewIndex(1);
          }
        } else {
          if (playerType == playerType[0]) {
            setNewIndex(3);
          } else {
            setNewIndex(4);
          }
        }
        break;
      case line[1]:
        if (damage == damage[0]) {
          if (playerType == playerType[0]) {
            setNewIndex(5);
          } else {
            setNewIndex(4);
          }
        } else {
          if (playerType == playerType[0]) {
            setNewIndex(6);
          } else {
            setNewIndex(5);
          }
        }
        break;
      case line[2]:
        if (damage == damage[0]) {
          if (playerType == playerType[0]) {
            setNewIndex(9);
          } else {
            //champ response
          }
        } else {
          if (playerType == playerType[0]) {
            setNewIndex(9);
          } else {
            setNewIndex(8);
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
            setNewIndex(12);
          } else {
            setNewIndex(4);
          }
        } else {
          if (playerType == playerType[0]) {
            setNewIndex(10);
          } else {
            setNewIndex(11);
          }
        }
        break;
    }
  };

  const handleFirstQuestions = (questionIndex, responseIndex) => {
    if (questionIndex === 0) {
      setLine(firstQuestionsArray[questionIndex].answers[responseIndex]);
      setIndex(index + 1);
    } else if (questionIndex === 1) {
      setDamage(firstQuestionsArray[questionIndex].answers[responseIndex]);
      setIndex(index + 1);
    } else if (questionIndex === 2) {
      setPlayerType(firstQuestionsArray[questionIndex].answers[responseIndex]);
      setIsFirstQuestion(false);
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
        <Box boxShadow={3} className="question__container">
          {isFirstQuestion
            ? firstQuestionsArray.length !== 0 && (
                <h2>{firstQuestionsArray[index - 1].question}</h2>
              )
            : questionsArray.length !== 0 && (
                <h2>{questionsArray[newIndex - 1].question}</h2>
              )}
        </Box>
        <Box boxShadow={3} className="question__answer">
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
                    onClick={() => {
                      handleFirstQuestions(index - 1, i);
                    }}
                    variant="outlined"
                    color="primary"
                    size="large"
                  >
                    {answer}
                  </Button>
                ))
              : questionsArray.length !== 0 &&
                questionsArray[newIndex - 1].answers.map((answer) => (
                  <Button
                    onClick={() => {
                      hanldeQuestion(line, damage, playerType);
                    }}
                    variant="outlined"
                    color="primary"
                    size="large"
                  >
                    {answer}
                  </Button>
                ))}
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default QuestionsPage;

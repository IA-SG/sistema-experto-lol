import React, { useState } from "react";
import { questionsArray } from "../../assets/questionsJson";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./questions.css";

const QuestionsPage = () => {
  const [index, setIndex] = useState(1);
  const [user, setUser] = useState({
    line: 0,
    damage: 0,
    playerType: 0,
  });
  const [champions, setChampions] = useState([]);

  const hanldeQuestion = (user, playerType) => {
    if (user.line === 0) {
      console.log("Entonces=");
      if (user.damage === 0) {
        if (playerType === 0) {
          setIndex(5);
        } else {
          setIndex(4);
        }
      } else {
        if (playerType === 0) {
          setIndex(6);
        } else {
          setIndex(7);
        }
      }
    } else if (user.line === 1) {
      if (user.damage === 0) {
        if (playerType === 0) {
          setIndex(8);
        } else {
          setIndex(7);
        }
      } else {
        if (playerType === 0) {
          setIndex(9);
        } else {
          setIndex(8);
        }
      }
    } else if (user.line === 2) {
      if (user.damage === 0) {
        if (playerType === 0) {
          setIndex(12);
        } else {
          //champ response
        }
      } else {
        if (playerType === 0) {
          setIndex(12);
        } else {
          setIndex(11);
        }
      }
    } else if (user.line === 3) {
      if (user.damage === 0) {
        if (playerType === 0) {
        } else {
        }
      } else {
        if (playerType === 0) {
        } else {
        }
      }
    } else if (user.line === 4) {
      if (user.damage === 0) {
        if (playerType === 0) {
          setIndex(15);
        } else {
          setIndex(7);
        }
      } else {
        if (playerType === 0) {
          setIndex(13);
        } else {
          setIndex(14);
        }
      }
    }
  };

  const handleFirstQuestions = (questionIndex, responseIndex) => {
    console.log("Hi");
    if (questionIndex === 0) {
      setUser({ ...user, line: responseIndex });
      setIndex(index + 1);
    } else if (questionIndex === 1) {
      setUser({ ...user, damage: responseIndex });
      setIndex(index + 1);
    } else if (questionIndex === 2) {
      setUser({ ...user, playerType: responseIndex });
      console.log(user);
      hanldeQuestion(user, responseIndex);
    }
  };

  return (
    <div className="question__background">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-items"
      >
        <Box boxShadow={3} className="question__container">
          {questionsArray.length !== 0 && (
            <>
              <h2>{questionsArray[index - 1].question}</h2>
            </>
          )}
        </Box>
        <div style={{ height: "5vh" }}></div>
        <Box boxShadow={3} className="question__answer">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {questionsArray.length !== 0 &&
              questionsArray[index - 1].answers.map((answer, i) => (
                <Button
                  onClick={() => {
                    handleFirstQuestions(index - 1, i);
                  }}
                  style={{ margin: "10px" }}
                  variant="contained"
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

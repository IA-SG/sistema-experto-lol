import React, { useState, useEffect } from 'react';
import {
    firstQuestionsArray,
    questionsArray,
} from '../../assets/questionsJson';
import QuestionComponent from '../../components/answer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './questions.css';

const QuestionsPage = () => {
    const [index, setIndex] = useState(1);
    const [user, setUser] = useState({
        line: 0,
        damage: 0,
        playerType: 0,
    });
    let question = {};
    const [champions, setChampions] = useState([]);

    useEffect(() => {
        question = questionsArray.filter(
            (question) => question.id === index
        )[0];
        console.log('Question ', question);
    }, [index]);

    const hanldeQuestion = (user, playerType) => {
        console.log(user);
        if (user.line === 0) {
            console.log('Entonces=');
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
        console.log('Hi');
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
                justifyContent="space-evenly"
                alignItems="center">
                <Box boxShadow={3} className="question__container">
                    {false
                        ? questionsArray.length !== 0 && (
                              <h2>
                                  {
                                      questionsArray.filter(
                                          (question) => question.id == index
                                      ).id
                                  }
                              </h2>
                          )
                        : questionsArray.length !== 0 && (
                              <>
                                  <h2>{questionsArray[index - 1].question}</h2>
                                  <p>{user.playerType}</p>
                              </>
                          )}
                </Box>
                <Box boxShadow={3} className="question__answer">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center">
                        {false
                            ? firstQuestionsArray.length !== 0 &&
                              firstQuestionsArray[index - 1].answers.map(
                                  (answer, i) => (
                                      <Button
                                          onClick={() => {
                                              handleFirstQuestions(index, i);
                                          }}
                                          variant="outlined"
                                          color="primary"
                                          size="large">
                                          {answer}
                                      </Button>
                                  )
                              )
                            : questionsArray.length !== 0 &&
                              questionsArray[index - 1].answers.map(
                                  (answer, i) => (
                                      <Button
                                          onClick={() => {
                                              handleFirstQuestions(
                                                  index - 1,
                                                  i
                                              );
                                          }}
                                          variant="outlined"
                                          color="primary"
                                          size="large">
                                          {answer}
                                      </Button>
                                  )
                              )}
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};

export default QuestionsPage;

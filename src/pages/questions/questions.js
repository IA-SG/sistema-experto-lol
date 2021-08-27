import React, { useState } from 'react';
import { questionsArray } from '../../assets/questionsJson';
import { championArray } from '../../assets/championsJson';
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
        desglozar: false,
    });
    const [champions, setChampions] = useState([]);
    const [isChampions, setIsChampions] = useState(false);

    const hanldeQuestion = (user, playerType) => {
        console.log('Hola');
        if (user.line === 0) {
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
        setUser({ ...user, desglozar: true });
    };

    const handleQuestionNext = (questionIndex, reponseIndex) => {
        console.log(questionIndex, reponseIndex);
        if (questionIndex === 5) {
            if (reponseIndex === 0) {
                setChampions([championArray[0], championArray[1]]);
                
            } else {
                setChampions([championArray[2], championArray[3]]);
                
            }
        } else if (questionIndex === 4) {
            if (reponseIndex === 0) {
                setChampions([championArray[4], championArray[5]]);
            } else {
                setChampions([championArray[6]]);
            }
        } else if (questionIndex === 6) {
            if (reponseIndex === 0) {
                setChampions([championArray[7], championArray[8]]);
            } else {
                setChampions([championArray[9], championArray[10]]);
            }
        } else if (questionIndex === 7) {
            if (reponseIndex === 0) {
                setChampions([championArray[11]]);
            } else {
                setChampions([championArray[12], championArray[13]]);
            }   
        } else if (questionIndex === 8) {
            if (reponseIndex === 0) {
                setChampions([championArray[14], championArray[15], championArray[16]]);
            } else {
                setChampions([championArray[17]]);
            }
        } else if (questionIndex === 9) {
            if (reponseIndex === 0) {
                setChampions([championArray[18], championArray[19]]);
            } else {
                setChampions([championArray[20]]);
            }
        //Peleas grupales o uno contra uno
        } else if (questionIndex === 10) {
            if (reponseIndex === 0) {
                setChampions([championArray[21]]);
            } else {
                setChampions([championArray[22]]);
            }
        // Control de masas jungle
        } else if (questionIndex === 11) {
            if (reponseIndex === 0) {
                setChampions([championArray[23]]);
            } else {
                setChampions([championArray[25]]);
            }
        } else if (questionIndex === 13) {
            if (reponseIndex === 0) {
                setChampions([championArray[26]]);
            } else {
                setChampions([championArray[29]]);
            }
        } else if (questionIndex === 15) {
            if (reponseIndex === 0) {
                setChampions([championArray[31]]);
            } else {
                setChampions([championArray[32]]);
            }
        } else if (questionIndex === 16) {
            if (reponseIndex === 0) {
                setChampions([championArray[33]]);
            } else {
                setChampions([championArray[34]]);
            }
        } else if (questionIndex === 17) {
            if (reponseIndex === 0) {
                setChampions([championArray[35]]);
            } else {
                setChampions([championArray[36]]);
            }
        }
        setIsChampions(true);
    };

    const handleFirstQuestions = (questionIndex, responseIndex) => {
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
            {!isChampions ? (
                <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center">
                    <Box boxShadow={3} className="question__container">
                        {questionsArray.length !== 0 && (
                            <>
                                <h2>{questionsArray[index - 1].question}</h2>
                            </>
                        )}
                    </Box>
                    <Box boxShadow={3} className="question__answer">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center">
                            {questionsArray.length !== 0 &&
                                questionsArray[index - 1].answers.map(
                                    (answer, i) => (
                                        <Button
                                            onClick={() => {
                                                !user.desglozar
                                                    ? handleFirstQuestions(
                                                          index - 1,
                                                          i
                                                      )
                                                    : handleQuestionNext(
                                                          index,
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
            ) : (
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center">
                    <Box boxShadow={3} className="question__answer">
                        {champions.length !== 0 &&
                            champions.map((champion, i) => (
                                <h2>{champion.name}</h2>
                            ))}
                    </Box>
                </Grid>
            )}
        </div>
    );
};

export default QuestionsPage;

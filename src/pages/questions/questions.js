import React, { useState } from 'react';
import CardComponent from '../../components/card';
import QuestionComponent from '../../components/question';
import AnswerComponent from '../../components/answer';
import BackgroundComponent from '../../components/background_animation';
import {
    LINE,
    DAMAGE,
    PLAYER_TYPE,
    questionsArray,
} from '../../assets/questionsJson';
import { championArray } from '../../assets/championsJson';
import { Grid, Box, IconButton, Tooltip } from '@material-ui/core';
import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import images from '../../assets/images';
import './questions.css';

const QuestionsPage = () => {
    const [index, setIndex] = useState(0);
    const [user, setUser] = useState({
        line: 0,
        damage: 0,
        typePlayer: 0,
        desglozar: false,
    });
    const [champions, setChampions] = useState([]);
    const [isChampions, setIsChampions] = useState(false);

    const hanldeQuestion = (user, player) => {
        if (user.line.toLowerCase() === 'mid' &&
            user.damage.toLowerCase() === 'ad'
            && player.toLowerCase() === 'pasivo') {
            const finalChamps = championArray.filter(
                (champion) => champion.idQuestion === 100
            );
            setChampions(finalChamps);
            setIsChampions(true);
            return;
        }
        const questionsArrayInt = questionsArray.filter(
            (question) =>
                question.line.toLowerCase() === user.line.toLowerCase() &&
                question.damage.toLowerCase() === user.damage.toLowerCase() &&
                question.typePlayer.toLowerCase() === player.toLowerCase()
        )[0];
        setIndex(questionsArrayInt.id);
        setUser({ ...user, typePlayer: player, desglozar: true });
    };

    const handleQuestionNext = (questionIndex, reponseIndex) => {
        const campeonesArray = championArray.filter(
            (champion) => champion.idQuestion === index
        );
        const finalChamps = campeonesArray.filter(
            (champion) => champion.answer === reponseIndex
        );
        setChampions(finalChamps);
        setIsChampions(true);
    };

    const handleFirstQuestions = (questionIndex, responseIndex) => {
        if (questionIndex === 0) {
            setUser({ ...user, line: LINE[responseIndex] });
            setIndex(index + 1);
        } else if (questionIndex === 1) {
            setUser({ ...user, damage: DAMAGE[responseIndex] });
            setIndex(index + 1);
        } else if (questionIndex === 2) {
            const player = PLAYER_TYPE[responseIndex];
            hanldeQuestion(user, player, DAMAGE[responseIndex]);
        }
    };

    const renderImages = (imageId) => {
        return images
            .filter((image) => image.id === imageId)
            .map((newImage) => (
                <CardComponent
                    id={newImage.id}
                    src={newImage.src}
                    title={newImage.title}
                />
            ));
    };

    const handleClick = () => {
        if (index !== 1) {
            setUser({
                line: 0,
                damage: 0,
                typePlayer: 0,
                desglozar: false,
            });
            setIndex(0);
            setIsChampions(false);
            setChampions([]);
        }
    };
    return (
        <>
            <BackgroundComponent />
            <div className="question__background">
                <div>
                    <Tooltip title="Reiniciar preguntas" placement="right" >
                        <IconButton
                            onClick={handleClick}
                            color="primary"
                            aria-label="reiniciar formulario">
                            <LoopRoundedIcon
                                className="question__background__icon"
                                style={{ fontSize: 30 }}
                            />
                        </IconButton>
                    </Tooltip>
                </div>
                {!isChampions ? (
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start">
                        <QuestionComponent
                            questionsArray={questionsArray}
                            index={index}
                        />
                        <div style={{ height: '5vh' }}></div>
                        <Box boxShadow={3} className="question__answer">
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center">
                                {questionsArray.length !== 0 &&
                                    questionsArray[index].answers.map(
                                        (answer, answerIndex) => (
                                            <AnswerComponent
                                                user={user}
                                                answer={answer}
                                                index={index}
                                                answerIndex={answerIndex}
                                                handleFirstQuestions={
                                                    handleFirstQuestions
                                                }
                                                handleQuestionNext={
                                                    handleQuestionNext
                                                }
                                            />
                                        )
                                    )}
                            </Grid>
                        </Box>
                    </Grid>
                ) : (
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        className="question__images">
                        {champions.length !== 0 &&
                            champions.map((champion) => (
                                <>{renderImages(champion.name)}</>
                            ))}
                    </Grid>
                )}
            </div>
        </>
    );
};

export default QuestionsPage;

import React, { useState } from 'react';
import CardComponent from '../../components/card';
import QuestionComponent from '../../components/question';
import AnswerComponent from '../../components/answer';
import {
    LINE,
    DAMAGE,
    PLAYER_TYPE,
    questionsArray,
} from '../../assets/questionsJson';
import { championArray } from '../../assets/championsJson';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
    const [isHover, setIsHover] = useState(false);

    const hanldeQuestion = (user, player) => {
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
        <div className="question__background">
            <LoopRoundedIcon
                onClick={handleClick}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="question__background__icon"
                style={{ fontSize: !isHover ? 28 : 30 }}
            />
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
    );
};

export default QuestionsPage;

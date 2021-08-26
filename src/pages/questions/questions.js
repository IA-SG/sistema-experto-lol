import React from "react";
import questionsMap from "../../assets/questions";
import QuestionComponent from "../../components/answer";
import Grid from "@material-ui/core/Grid";
import "./questions.css";

const QuestionsPage = () => {
  return (
    <div className="question__background">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <div
          style={{ width: "80vw", backgroundColor: "pink" }}
        >
          <h2 style={{ textAlign: "center" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h2>
        </div>
        <div style={{  paddingTop: '20px', width: "80vw", backgroundColor: "red"}}>
          <div style={{ width: "100px"}}>2312312</div>
          <div style={{ width: "100px"}}>2312312</div>
          <div style={{ width: "100px"}}>2312312</div>
          <div style={{ width: "100px"}}>2312312</div>
          <div style={{ width: "100px"}}>2312312</div>
        </div>
      </Grid>
    </div>
  );
};

export default QuestionsPage;

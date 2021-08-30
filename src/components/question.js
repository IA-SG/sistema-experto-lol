import React from "react";
import Box from "@material-ui/core/Box";

const QuestionComponent = ({ questionsArray, index }) => {
  return (
    <Box boxShadow={3} className="question__container">
      {questionsArray.length !== 0 && (
        <>
          <h2>{questionsArray[index].question}</h2>
        </>
      )}
    </Box>
  );
};

export default QuestionComponent;

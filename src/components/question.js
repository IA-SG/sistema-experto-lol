<<<<<<< HEAD
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
=======
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
>>>>>>> 6d17bc8d6f3b0e48456fc7d04ad2787d9295265b

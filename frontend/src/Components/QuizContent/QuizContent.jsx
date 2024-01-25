import React from "react";
import "./QuizContent.css";

const QuizContent = (props) => {
    return ( 
        <div className="quiz-question">
            {props.quizTheme}
        </div>
     );
}
 
export default QuizContent;
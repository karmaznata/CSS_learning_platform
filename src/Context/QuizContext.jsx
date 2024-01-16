import React, { createContext } from "react";
import all_quiz_tasks from "../Components/Assets/all_quizzes";

export const QuizContext = createContext(null);

const QuizContextProvider = (props ) =>{

    const contextValue ={all_quiz_tasks};

    return(
        <QuizContext.Provider values={contextValue}>
            {props.quiz_theme}
        </QuizContext.Provider>
    )
}
export default QuizContextProvider;
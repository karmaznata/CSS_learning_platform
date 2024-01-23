import React, { createContext } from "react";
import all_quiz_tasks from "../Components/Assets/all_quiz_tasks";

export const QuizContext = createContext(null);

const QuizContextProvider = (props ) =>{


    const startQuiz = (quiz) =>{
        console.log(quiz);
    }
    const contextValue ={all_quiz_tasks, startQuiz};
    return(
        <QuizContext.Provider value={contextValue}>
            {props.children}
        </QuizContext.Provider>
    )
}
export default QuizContextProvider;
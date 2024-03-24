import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { QuizTask } from "../Models/QuizTask";

export const QuizContext = createContext<QuizTask[]>([]);

interface QuizContextProviderProps {
    children: ReactNode;
}

// Use React.FC to define the component type and specify the type of props
const QuizContextProvider: React.FC<QuizContextProviderProps> = (props) => {
    const [quizTasks, setQuizTasks] = useState<QuizTask[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/quizzes", { withCredentials: true });
                console.log("quizTasks", response)
                setQuizTasks(response.data);
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            }
        };
        fetchData();

    }, []);

    return (
        <QuizContext.Provider value={quizTasks}>
            {props.children}
        </QuizContext.Provider>
    );
};
export default QuizContextProvider;
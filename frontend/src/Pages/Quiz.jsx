import React, { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './CSS/Quiz.css';

import { QuizContext } from "../Context/QuizContext";

const Quiz = () => {

    const { quizTheme } = useParams();
    const { all_quiz_tasks } = useContext(QuizContext);

    const [filteredQuizTasks, setFilteredQuizTasks] = useState([]);

    useEffect(() => {
        const filteredTasks = all_quiz_tasks.filter((task) => task.quiz_theme === quizTheme && task.answer_options !== undefined);
        setFilteredQuizTasks(filteredTasks);
    }, [all_quiz_tasks, quizTheme]);

    return (
        <div className="quiz-content">
          {filteredQuizTasks.map((task) => (
            <div key={task.id}>
              <div className="quiz-item">
                <div>{task.question}</div>
                <div className="answer-options">
                  {Object.entries(task.answer_options).map(([key, value]) => (
                    <div className="answer-option" key={key}>
                      <input type="radio" value={`${value}`} checked={true} />
                      {` ${value}`}
                    </div>
                  ))}
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      );
}

export default Quiz;
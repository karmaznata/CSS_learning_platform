import React, { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './CSS/Quiz.css';
import { QuizContext } from "../Context/QuizContext";
import CodeEditor from "../Components/CodeEditor/CodeEditor"

const Quiz = () => {

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');

  const { quizTheme } = useParams();
  const { all_quiz_tasks } = useContext(QuizContext);

  const [filteredQuizTasks, setFilteredQuizTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [srcDoc, setSrcDoc] = useState('')

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 3));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
            <body>${htmlCode}</body>
            <style>${cssCode}</style>
          </html>
        `)
    }, 250)
    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode])

  useEffect(() => {
    const filteredTasks = all_quiz_tasks.filter((task) => task.quiz_theme === quizTheme && task.answer_options !== undefined);
    setFilteredQuizTasks(filteredTasks);
  }, [all_quiz_tasks, quizTheme]);

  return (
    <div className="quiz-page">
      <div className="quiz-content">
        {currentPage === 1 && filteredQuizTasks.map((task, index) => (
          <div key={task.id}>
            <div className="quiz-item">
              <div>{index + 1}. {task.question}</div>
              <div className="answer-options">
                {Object.entries(task.answer_options).map(([key, value]) => (
                  <div className="answer-option" key={key}>
                    <input type="radio" value={`${value}`} checked={false} />
                    {` ${value}`}
                  </div>
                ))}
              </div>
            </div>
            <hr />
          </div>
        ))
        }
        {currentPage === 2 && (
          <div className="code-editor">
            <div className="pane top-pane">
              <CodeEditor
                language="xml"
                displayName="HTML"
                value={htmlCode}
                onChange={setHtmlCode}
              />
              <CodeEditor
                language="css"
                displayName="CSS"
                value={cssCode}
                onChange={setCssCode}
              />
            </div>
            <div className="pane">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
        {currentPage === 3 && (
          <div>
            <h2>Chapter 3</h2>
            <p>This is the content of Chapter 3.</p>
          </div>
        )}
      </div>
      <button onClick={handlePrevPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
      <p>Page {currentPage}</p>
    </div>

  );
}

export default Quiz;
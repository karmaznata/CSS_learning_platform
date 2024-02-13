import React, { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './CSS/Quiz.css';
import { QuizContext } from "../Context/QuizContext";
import CodeEditor from "../Components/CodeEditor/CodeEditor"
import CssCodeInput from "../Components/CssCodeInput/CssCodeInput";

const Quiz = () => {

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [selectedRadioValue, setSelectedRadioValue] = useState([]);
  const [quizTasks, setQuizTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userInputAnswers, setUserInputAnswers] = useState([]);
  const [resultChecked, setResultChecked] = useState(false);
  const [answerAllQuestions, setAnswerAllQuestions] = useState(false);
// const [userSelection, setUserSelection] = useState([]);
// const [mistakes, setMistakes] = useState([]);
// const [checkResult, setCheckResult] = useState();
// incorrect answers[key]
// score = usersanswers*100/count the amount of the all possible answers from one quiz.
// disable radio buttons

  const { quizTheme } = useParams();
  const { all_quiz_tasks } = useContext(QuizContext);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : 1));
    setResultChecked(false);
  };

  useEffect(() => {
    const radioSelection = Object.values(selectedRadioValue);
    const missedAnswer = radioSelection.length == 3 && radioSelection.some(answer => answer !== null);
    setAnswerAllQuestions(missedAnswer);
  }, [selectedRadioValue]);

  const checkResults = () => {
    switch(currentPage){
      case 1:
        let user_answers = [];
        quizTasks.map((task, taskIndex) => {
          const selectedOption = selectedRadioValue[taskIndex];
          user_answers.push({answers: selectedOption, taskId: task.id, quizTheme: task.quiz_theme});
          if(selectedOption !== task.right_answer.toString()){
            const elements = document.querySelectorAll(`#answer-option-${taskIndex}-${selectedOption-1}`);
            elements.forEach((element) => {
            element.classList.add("wrong");
          });
          }else{
            const elements = document.querySelectorAll(`#answer-option-${taskIndex}-${selectedOption-1}`);
            elements.forEach((element) => {
            element.classList.add("correct");
          });
          }
        });
        setUserAnswers(user_answers);
        break;
      case 2: 
      userAnswers[3] = {answers: Object.values(userInputAnswers), taskId: quizTasks[3].id, quizTheme: quizTasks[3].quiz_theme};
      setUserAnswers([...userAnswers]);
        Object.values(userInputAnswers).forEach((value, index) => {
          value = value.replace(/\s/g, '');
          if(quizTasks[3].right_answer[index] === value){
           
          }
        });
        break;
      case 3:
        userAnswers[4]= {answers: Object.values(userInputAnswers), taskId: quizTasks[4].id, quizTheme: quizTasks[4].quiz_theme};
        setUserAnswers([...userAnswers]);
        Object.values(userInputAnswers).forEach((value, index) => {
          value = value.replace(/\s/g, '');
          if(quizTasks[4].right_answer[index] === value){
        
          }
        });
        break;
      default:
        break;
    }
    setResultChecked(true);
  };

  const calculateScore = () => {
    let score = 0;

    userAnswers.forEach(answ => {
      const task = quizTasks.find(task => task.id === answ.taskId);
      if (task) {
        Object.values(answ.answers).forEach(answerValue => {
          if (task.task_type === "multipleChoice") {
            if (answerValue === task.right_answer.toString()) {
              score++;
            }
          } else {
            const rightAnswers = Array.isArray(task.right_answer) ? task.right_answer : [task.right_answer];
            if (rightAnswers.includes(answerValue)) {
              score++;
            }
          }
        });
      }
    });
  
    const allQuestions = allQuestionToAnswer();
    const userScore = (score * 100) / allQuestions;
  };

  const allQuestionToAnswer = () => {
    let all_questions = 0;
    quizTasks.forEach(item => {
        if (Array.isArray(item.right_answer)) {
            all_questions += item.right_answer.length;
        } else {
            all_questions++;
        }
    });
    return all_questions;
};
  const handleCodeContent = (html, css) => {
    return `
          <html>
            <body>${html}</body>
            <style>${css}</style>
          </html>
        `

  };
  const handleRadioChange = (key, taskIndex) => {
    const newValue = key;
    //setResultChecked(false);
    setSelectedRadioValue(prevValues => {
      const newValues = [...prevValues];
      newValues[taskIndex] = newValue;
      return newValues;
    });
    // if(selectedRadioValue.length!==3){
    //   setResultChecked(true);
    // }
  }

  useEffect(() => {
    const filteredTasks = all_quiz_tasks.filter((task) => task.quiz_theme === quizTheme);
    //const filteredTasks = all_quiz_tasks.filter((task) => task.quiz_theme === quizTheme && task.answer_options !== undefined);
    const filteredHtmlCode = all_quiz_tasks.filter((task) => task.quiz_theme === quizTheme && task.htmlCode !== undefined);
    const filteredCssCode = all_quiz_tasks.filter((task) => task.quiz_theme === quizTheme && task.cssCode !== undefined);
    setCssCode(filteredCssCode);
    setHtmlCode(filteredHtmlCode);
    setQuizTasks(filteredTasks);
  }, [all_quiz_tasks, quizTheme]);

  return (
    <div className="quiz-page">
      <div className="quiz-content">
        {currentPage === 1 && quizTasks.map((task, taskIndex) => (
          task.task_type === "multipleChoice" && (
            <div key={task.id}>
              <div className="quiz-item">
                <div>{taskIndex + 1}. {task.question}</div>
                <div className={`answer-options-container-${taskIndex}`}>
                  {Object.entries(task.answer_options).map(([key, value], index) => (
                    <div className="answer-option" id={`answer-option-${taskIndex}-${index}`} key={key}>
                      <input
                        id={`radioSelection-${taskIndex}-${index}`}
                        value={value}
                        onChange={(e)=> handleRadioChange(key, taskIndex)}
                        type="radio"
                        checked={selectedRadioValue[taskIndex] === key}
                      />
                      {` ${value}`}
                    </div>
                  ))}
                </div>
              </div>
              <hr />
            </div>
          )
        ))
        }
        {currentPage === 2 && (
          <div className="code-editor">
            <div className="pane top-pane">
              <CodeEditor
                language="xml"
                displayName="HTML"
                value={htmlCode[0].htmlCode}
                onChange={setHtmlCode}
                readOnly={true}
              />
              <CssCodeInput
                cssCode={cssCode[0].cssCode}
                displayName="CSS"
                setUserInputAnswers={setUserInputAnswers}
              />
            </div>
            <div className="pane">
              <iframe
                srcDoc={handleCodeContent(htmlCode[0].htmlCode, cssCode[0].cssCode)}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
        {currentPage === 3 && (
          <div className="code-editor">
            <div className="pane top-pane">
              <CodeEditor
                language="xml"
                displayName="HTML"
                value={htmlCode[1].htmlCode}
                onChange={setHtmlCode}
                readOnly={true}
              />
              <CssCodeInput
                cssCode={cssCode[1].cssCode}
                displayName="CSS"
                setUserInputAnswers={setUserInputAnswers}
              />
            </div>
            <div className="pane">
              <iframe
                srcDoc={handleCodeContent(htmlCode[1].htmlCode, cssCode[1].cssCode)}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
      </div>
      {!resultChecked && <button onClick={checkResults} disabled={!answerAllQuestions}>Check Result</button>}
      {(resultChecked && currentPage !== 3) && <button onClick={handleNextPage}>Next Page</button>}
      {(currentPage === 3 && resultChecked) && <button onClick={calculateScore}>Finish the test</button>}
    </div>

  );
}

export default Quiz;
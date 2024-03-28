import React, { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './CSS/Quiz.css';
import { QuizContext } from "../Context/QuizContext";
import CodeEditor from "../Components/CodeEditor/CodeEditor"
import CssCodeInput from "../Components/CssCodeInput/CssCodeInput";
import { UserAnswers } from "../Models/UserAnswer";
import { QuizTask } from "../Models/QuizTask";
import axios from "axios";
import { UserScore } from "../Models/UserScores";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { EventRegister } from "react-native-event-listeners";
import { User } from "../Models/User";
import InteractiveQuizTask from "./InteractiveQuizTask";
import quizTask4 from "../Components/Assets/quizTask-Flexbox-4.png";

interface UserProps {
  user: User;
}

const Quiz: React.FC<UserProps> = ({ user }) => {

  const navigate = useNavigate();
  const [htmlCode, setHtmlCode] = useState<QuizTask[]>([]);
  const [cssCode, setCssCode] = useState<QuizTask[]>([]);
  const [selectedRadioValue, setSelectedRadioValue] = useState<any[]>([]);
  const [quizTasks, setQuizTasks] = useState<QuizTask[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userAnswers, setUserAnswers] = useState<UserAnswers[]>([]);
  const [userInputAnswers, setUserInputAnswers] = useState<string[]>([]);
  const [resultChecked, setResultChecked] = useState(false);
  const [answerAllQuestions, setAnswerAllQuestions] = useState(false);
  const [allQuizTasks, setAllQuizTasks] = useState<QuizTask[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [userScore, setUserScore] = useState<UserScore>();

  // const [userSelection, setUserSelection] = useState([]);
  // const [mistakes, setMistakes] = useState([]);
  // const [checkResult, setCheckResult] = useState();
  // incorrect answers[key]
  // score = usersanswers*100/count the amount of the all possible answers from one quiz.
  // disable radio buttons

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/quizzes", { withCredentials: true });
        setAllQuizTasks(response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };
    fetchData();
  }, []);

  const { quizTheme } = useParams();

  useEffect(() => {
    const filteredTasks = allQuizTasks.filter((task) => task.quiz_theme === quizTheme);
    const filteredHtmlCode = allQuizTasks.filter((task) => task.quiz_theme === quizTheme && task.htmlCode !== undefined);
    const filteredCssCode = allQuizTasks.filter((task) => task.quiz_theme === quizTheme && task.cssCode !== undefined);
    setCssCode(filteredCssCode);
    setHtmlCode(filteredHtmlCode);
    setQuizTasks(filteredTasks.sort((a, b) => a.task_id - b.task_id));
    // const initialCss =
    // setApplyCss(filteredTasks.filter((task)=> task.cssCode));

  }, [allQuizTasks, quizTheme]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : 1));
    setResultChecked(false);
  };

  useEffect(() => {
    const radioSelection = Object.values(selectedRadioValue);
    const missedAnswer = radioSelection.length == 3 && radioSelection.some(answer => answer !== null);
    setAnswerAllQuestions(missedAnswer);
  }, [selectedRadioValue]);

  useEffect(() => {
    const radioSelection = Object.values(selectedRadioValue);
    const missedAnswer = radioSelection.length == 3 && radioSelection.some(answer => answer !== null);
    setAnswerAllQuestions(missedAnswer);
  }, [selectedRadioValue]);

  const checkResults = () => {
    switch (currentPage) {
      case 1:
        let user_answers: UserAnswers[] = [];
        quizTasks.map((task, taskIndex) => {
          const selectedOption = selectedRadioValue[taskIndex];
          user_answers.push({ user_answers: selectedOption, task_id: task.task_id, quiz_theme: task.quiz_theme });
          if (selectedOption !== task.right_answer.toString()) {
            const elements = document.querySelectorAll(`#answer-option-${taskIndex}-${selectedOption - 1}`);
            elements.forEach((element) => {
              element.classList.add("wrong");
            });
          } else {
            const elements = document.querySelectorAll(`#answer-option-${taskIndex}-${selectedOption - 1}`);
            elements.forEach((element) => {
              element.classList.add("correct");
            });
          }
        });
        setUserAnswers(user_answers);
        break;
      case 2:
        userAnswers[3] = { user_answers: Object.values(userInputAnswers), task_id: quizTasks[3].task_id, quiz_theme: quizTasks[3].quiz_theme };
        setUserAnswers([...userAnswers]);
        countEnteredValues(quizTasks[3]);
        break;
      case 3:
        userAnswers[4] = { user_answers: Object.values(userInputAnswers), task_id: quizTasks[4].task_id, quiz_theme: quizTasks[4].quiz_theme };
        setUserAnswers([...userAnswers]);
        countEnteredValues(quizTasks[4]);
        break;
      default:
        break;
    }
    setResultChecked(true);
  };

  const countEnteredValues = (quizTasks) => {
    Object.values(userInputAnswers).forEach((value, index) => {
      if (value) {
        value = value.replace(/\s/g, '');
        if (Object.values(quizTasks.right_answer)[index] === value) {
          const elements = document.querySelectorAll(`#pre-input-answer-${index}`);
          elements.forEach((element) => {
            element.classList.add("correct");
          });

        }
      } else {
        const elements = document.querySelectorAll(`#pre-input-answer-${index}`);
        elements.forEach((element) => {
          element.classList.add("wrong");
        });
      }
    });
  }

  const finishQuiz = () => {
    setQuizFinished(true);
    let score = 0;

    userAnswers.forEach(answ => {
      const task = quizTasks.find(task => task.task_id === answ.task_id);
      if (task) {
        Object.values(answ.user_answers).forEach(answerValue => {
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
    const userScore: UserScore = { user_id: user._id, quiz_theme: quizTheme, points_scored: (score * 100) / allQuestions };
    setUserScore(userScore);
    const recordScore = async () => {
      try {
        await axios.post("http://localhost:4000/recordScore", userScore);
      } catch (error) {
        console.error("Error recording score:", error);
      }
    };
    recordScore();
  };


  const retakeQuiz = () => {
    setCurrentPage(1);
    setUserAnswers([]);
    setQuizFinished(false);
    setSelectedRadioValue([]);
    setUserInputAnswers([]);
  }

  const toUserAccount = () => {
    EventRegister.emit('accoutViewEvent', 'overview-quizzes');
    navigate("/account");
  }

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

  const handleRadioChange = (key, taskIndex) => {
    const newValue = key;
    //setResultChecked(false);
    setSelectedRadioValue(prevValues => {
      let newValues = [...prevValues];
      newValues[taskIndex] = newValue;
      return newValues;
    });
    // if(selectedRadioValue.length!==3){
    //   setResultChecked(true);
    // }
  }

  return (
    <div className="quiz-page">
      <div className="quiz-content">
        {currentPage === 1 && !quizFinished && quizTasks.map((task, taskIndex) => (
          task.task_type === "multipleChoice" && (
            <div key={`${task.task_id}`}>
              <div className="quiz-item fs-5">
                <div>{taskIndex + 1}. {task.question}</div>
                <div className={`answer-options-container-${taskIndex} answers-container`}>
                  {Object.entries(task.answer_options).map(([key, value], index) => (
                    <div className="answer-option" id={`answer-option-${taskIndex}-${index}`} key={key}>
                      <input
                        id={`radioSelection-${taskIndex}-${index}`}
                        value={value}
                        onChange={(e) => handleRadioChange(key, taskIndex)}
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
        {currentPage === 2 && !quizFinished && quizTasks.map((task, taskIndex) => (
          task.task_type === "enterValue" && taskIndex == 3 && (
            // <div className="quiz-task-code-editor">
            //   <div className="code-editor">
            //     <CodeEditor
            //       language="xml"
            //       displayName="HTML"
            //       value={task.htmlCode}
            //       readOnly={true}
            //     />
            //   </div>
            //   <div className="quiz-interactive-task-question">
            //     <div className="quiz-interactive-task-question-header fs-5">4. {task.question}</div>
            //     <img src={quizTask4} alt="quiz-task-4 flexbox" className="quiz-task-4-img flexbox" />
            //   </div>
            //   <div className="code-editor">
            //     <CssCodeInput
            //       cssCode={task.cssCode}
            //       displayName="CSS"
            //       setUserInputAnswers={setUserInputAnswers}
            //       setApplyCss={setApplyCss}
            //     // checkEnteredValue={}
            //     />
            //   </div>
            //   <div className="output-area-iframe">
            //     <div className="output-area-header">Output</div>
            //     <iframe
            //       id="iframe-flexbox-question4"
            //       srcDoc={handleCodeContent(task.htmlCode, applyCss)}
            //       title="output"
            //       sandbox="allow-scripts"
            //       width="100%"
            //       height="100%"
            //     />
            //   </div>
            // </div>
            <InteractiveQuizTask
              setUserInputAnswers={setUserInputAnswers}
              quizTask={task}
              taskIndex={taskIndex}
            />
          )

        ))}
        {currentPage === 3 && !quizFinished && quizTasks.map((task, taskIndex) => (
          task.task_type === "enterValue" && taskIndex == 4 && (
            <InteractiveQuizTask
              setUserInputAnswers={setUserInputAnswers}
              quizTask={task}
              taskIndex={taskIndex}
            />
          )
        ))}
        {quizFinished && (
          <div className="quiz-fished-container">
            <div className="quiz-finished-content">
              <div className="quiz-finished-text">
                <h1 className="display-3" style={{ color: "white" }}>Finished!</h1>
              </div>
              <div className="quiz-score">
                <p className="fs-5">Your score: {userScore.points_scored}%</p>
              </div>
              <div className="redirection-buttons">
                <Button onClick={retakeQuiz}><FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon> Retake</Button>
                <Button onClick={toUserAccount}><FontAwesomeIcon icon={faList}></FontAwesomeIcon> All Scores</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="action-buttons">
        {!resultChecked && <Button onClick={checkResults} disabled={!answerAllQuestions}>Check Result</Button>}
        {(resultChecked && currentPage !== 3) && <Button onClick={handleNextPage}>Next Page</Button>}
        {(currentPage === 3 && resultChecked && !quizFinished) && <Button onClick={finishQuiz}>Finish the test</Button>}
      </div>
    </div>
  );
}

export default Quiz;
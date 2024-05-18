import React, { useState } from "react";
import "./InteractiveQuizTask.css";
import CodeEditor from "../CodeEditor/CodeEditor";
import CssCodeInput from "../CssCodeInput/CssCodeInput";

const InteractiveQuizTask = (props) => {

  const { setUserInputAnswers, quizTask, taskIndex, quizTaskImage } = props;
  const [applyCss, setApplyCss] = useState<string>('');

  const handleCodeContent = (html: string, css: string) => {
    return `
              <html>
                <body>${html}</body>
                <style>
                ${css}</style>
              </html>
            `
  };

  return (
    <div className="quiz-task-code-editor">
      <div className="code-editor">
        <CodeEditor
          language="xml"
          displayName="HTML"
          value={quizTask.htmlCode}
          readOnly={true}
        />
      </div>
      <div className="quiz-interactive-task-question">
        <div className="quiz-interactive-task-question-header fs-5">{taskIndex + 1}. {quizTask.question}</div>
        <div className="quiz-task-img-container">
          <img src={quizTaskImage} alt="quiz-task-image" className={`quiz-task-img ${quizTask.quiz_theme.toLowerCase()}`} />
        </div>
      </div>
      <div className="code-editor">
        <CssCodeInput
          cssCode={quizTask.cssCode}
          displayName="CSS"
          setUserInputAnswers={setUserInputAnswers}
          setApplyCss={setApplyCss}
        />
      </div>
      <div className="output-area-iframe">
        <div className="output-area-header">Output</div>
        <iframe
          id="iframe-flexbox-question4"
          srcDoc={handleCodeContent(quizTask.htmlCode, applyCss)}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default InteractiveQuizTask;
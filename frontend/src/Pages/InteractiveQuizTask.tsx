import React, { useEffect, useState } from "react";
import "./CSS/InteractiveQuizTask.css";
import CodeEditor from "../Components/CodeEditor/CodeEditor";
import CssCodeInput from "../Components/CssCodeInput/CssCodeInput";


const InteractiveQuizTask = (props) => {

    const {htmlCode, cssCode, setUserInputAnswers, quizTasks} = props;
    const [quizQuestion, setQuizQuestion] = useState([]);

    useEffect(()=>{
        const filteredQuestion = quizTasks.map((question)=> question[3])
        console.log("quizTasks",filteredQuestion)
    },[])

    const handleCodeContent = (html: string, css: string) => {
        return `
              <html>
                <body>${html}</body>
                <style>${css}</style>
              </html>
            `
    
      };

    return (
        <div className="interactive-task-component">
            <div className="quiz-task">
                
            </div>
            <div className="code-editor">
                <div className="pane top-pane">
                    <CodeEditor
                        language="xml"
                        displayName="HTML"
                        value={htmlCode}
                        readOnly={true}
                    />
                    <CssCodeInput
                        cssCode={cssCode}
                        displayName="CSS"
                        setUserInputAnswers={setUserInputAnswers}
                    />
                </div>
                <div className="pane">
                    <iframe
                        srcDoc={handleCodeContent(htmlCode, cssCode)}
                        title="output"
                        sandbox="allow-scripts"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
}

export default InteractiveQuizTask;
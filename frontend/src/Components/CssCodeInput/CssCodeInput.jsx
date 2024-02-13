import React, { useState, useEffect } from 'react';
import "./CssCodeInput.css";

const MyComponent = (props) => {

    const {displayName, cssCode, setUserInputAnswers} = props;
    const [cssCodeString, setCssCodeString] = useState([]);
    const [userInput, setUserInput] = useState([]);

    useEffect(() => {
        const regexValue = /^\s*([^\s]+):\s\s\s*(\{.*\}\s*)?$/gm;
        const regexProperty = /\s:\s*/;
      
        let cssCodeString = [];
        let lastIndex = 0;
        let match;
        
        while ((match = regexValue.exec(cssCode)) !== null) {
            if (match.index === regexValue.lastIndex) {
                regexValue.lastIndex++;
            }
            let substring = cssCode.substring(lastIndex, match.index + match[0].length);
            cssCodeString.push({ substring: substring, position: 'before' });
            lastIndex = regexValue.lastIndex;
        }
        if (lastIndex < cssCode.length) {
            cssCodeString.push({ substring: cssCode.substring(lastIndex), position: 'before' });
        }
        const modifiedCssCodeStrings = [];
        cssCodeString.forEach((string, index) => {
            if (regexProperty.test(string.substring)) {
                const parts = string.substring.split(regexProperty);
                parts.forEach((item, index) => {
                    modifiedCssCodeStrings.push({ substring: index === 0 ? item : `            : ${item}`, position: 'after' });
                });
            } else {
                modifiedCssCodeStrings.push(string);
            }
        });
        setCssCodeString(modifiedCssCodeStrings);
    }, [cssCode]);
  
    useEffect(()=>{
        setUserInputAnswers(userInput);
    },[userInput]);


    const changeHandler = (e, index) => {
        setUserInput({ ...userInput, [index]: e.target.value });
    };

    return (
        <div className="quiz-cssCode-container">
            <div className="editor-title">
                {displayName}
            </div>
            <div className="cssCode-content">
                {cssCodeString.map((item, index) => (
                    <pre className={`${item.position === "before" ? "before" : "after"}`} key={index}>
                        {item.substring}
                        {index !== cssCodeString.length - 1 &&
                            <input 
                                type="text"
                                name={`userInput${index}`}
                                id={`userInput${index}`}
                                value={userInput[index] || ''}
                                onChange={(e) => changeHandler(e, index)}
                            />
                        }
                        {item.position === "before" && <>;</>}
                    </pre>
                ))}
            </div>
        </div>
    );
};

export default MyComponent;

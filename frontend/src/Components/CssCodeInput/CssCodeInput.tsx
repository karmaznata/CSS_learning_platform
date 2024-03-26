import React, { useState, useEffect } from 'react';
import "./CssCodeInput.css";
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const CssCodeInput = (props) => {

    const { displayName, cssCode, setUserInputAnswers, setApplyCss } = props;
    const [cssCodeString, setCssCodeString] = useState([]);
    const [userInput, setUserInput] = useState({});

    useEffect(() => {
        setApplyCss(cssCode);
        // const regexValue = /^\s*([^:\s]+):\s\s\s*([^]*?)(?=\s*[^\s:]+:|\s*$)/gm;
        const regexValue = /^\s*([^\s]+):\s\s\s*(\{.*\}\s*)?$/gm;
        const regexProperty = /\s:\s*/;

        let cssCodeString = [];
        let lastIndex = 0;
        let match;
        //you cant add the ; at the end of the string, because of the strings structure
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
        let arrayWithUserAnswers: any[] = Array.from({ length: modifiedCssCodeStrings.length - 1 });
        setUserInput(arrayWithUserAnswers);
        setCssCodeString(modifiedCssCodeStrings);
    }, [cssCode]);

    useEffect(() => {
        setUserInputAnswers(userInput);
    }, [userInput]);

    const changeHandler = (e, index) => {
        setUserInput({ ...userInput, [index]: e.target.value });
    };

    const applyStyle = (cssCode) => {
        const styleString: string[] = [];
        let stringToPush: string = "";
        cssCode.forEach((string, stringIndex) => {
            if (userInput[stringIndex]) {
                string.position === "before" ? stringToPush = (string.substring + userInput[stringIndex].toString() + ";") 
                : stringToPush = (string.substring + userInput[stringIndex].toString());
                styleString.push(stringToPush);
            }
            else {
                styleString.push(string.substring);
                return string;
            }
        })
        let mergeString = styleString.map((obj) => obj).join("");
        setApplyCss(mergeString);
    }

    return (
        <div className="quiz-cssCode-container task-editor-container">
            <div className="editor-title">
                {displayName}
                <Button onClick={(e) => applyStyle(cssCodeString)}><FontAwesomeIcon icon={faPlay} /></Button>
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

export default CssCodeInput;

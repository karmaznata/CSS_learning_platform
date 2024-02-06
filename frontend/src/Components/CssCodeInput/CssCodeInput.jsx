import React, { useState, useEffect } from 'react';
import "./CssCodeInput.css";

const MyComponent = (props) => {

    const {displayName, cssCode} = props;
    const [cssCodeStrings, setCssCodeStrings] = useState([]);

    useEffect(() => {

        const regexValue = /^\s*([^\s]+):\s\s\s*(\{.*\}\s*)?$/gm;
        const regexProperty = /\s:\s*/;

        let cssCodeStrings = [];
        let lastIndex = 0;
        let match;
        
        while ((match = regexValue.exec(cssCode)) !== null) {
            if (match.index === regexValue.lastIndex) {
                regexValue.lastIndex++;
            }
            let substring = cssCode.substring(lastIndex, match.index + match[0].length);
            cssCodeStrings.push(substring);
            lastIndex = regexValue.lastIndex;
        }
        if (lastIndex < cssCode.length) {
            cssCodeStrings.push(cssCode.substring(lastIndex));
        }
        const modifiedCssCodeStrings = [];
        cssCodeStrings.forEach(string => {
            if (regexProperty.test(string)) {
                const parts = string.split(regexProperty);
                parts.forEach((item, index) => {
                    modifiedCssCodeStrings.push(index === 0 ? item : `            : ${item}`);
                });
            } else {
                modifiedCssCodeStrings.push(string);
            }
        });
        setCssCodeStrings(modifiedCssCodeStrings);

    }, [cssCode]);

    return (
        <div className="quiz-cssCode-container">
            <div className="editor-title">
                {displayName}
            </div>
            <div className="cssCode-content">
                {cssCodeStrings.map((string, index) => (
                    <pre key={index}>{string}{index !== cssCodeStrings.length - 1 && <input type='text'></input>}</pre>
                ))}
            </div>
        </div>
    );
};

export default MyComponent;

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./MultiColumn.css";
import TutorialPageTemplate from "../../../Components/TutorialPageTemplate/TutorialPageTemplate";
import StartQuizContainer from "../StartQuizContainer/StartQuizContainer";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";

const MultiColumn = ({ selectedTutorial }) => {

    const [columnSpan, setColumnSpan] = useState('none');
    const [columnFill, setColumnFill] = useState('auto');

    const htmlCodeExample1 = `<div class="container">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mauris non sapien interdum, sit amet sodales arcu fermentum. Mauris eu justo sed risus vehicula tempor.</p>\n  <p>Nullam venenatis, risus id consequat sodales, magna odio pharetra orci, eget efficitur felis metus id felis. Integer vel elit vel quam sollicitudin tempor.
    </p>\n  <p>Proin ultrices nisl vel arcu placerat, sed faucibus justo congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n  <p>Donec nec fringilla nunc. Nullam vitae eleifend ligula. Nam nec ex ligula. Ut vehicula, lacus at tincidunt tincidunt, justo nulla cursus magna, sed aliquam libero ex vel nulla.
    </p>\n  <p>Maecenas non felis nec est ullamcorper dapibus. Etiam nec nisi felis. Nulla non bibendum justo. Pellentesque pulvinar eleifend nunc, eu scelerisque lacus laoreet non.</p>\n</div>`;
    const htmlCodeExample2 = `<div class="container">\n   <h2>A sample header that spanning all columns</h2>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mauris non sapien interdum, sit amet sodales arcu fermentum. Mauris eu justo sed risus vehicula tempor.</p>\n  <p>Nullam venenatis, risus id consequat sodales, magna odio pharetra orci, eget efficitur felis metus id felis. Integer vel elit vel quam sollicitudin tempor.
    </p>\n  <p>Proin ultrices nisl vel arcu placerat, sed faucibus justo congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n  <p>Donec nec fringilla nunc. Nullam vitae eleifend ligula. Nam nec ex ligula. Ut vehicula, lacus at tincidunt tincidunt, justo nulla cursus magna, sed aliquam libero ex vel nulla.
    </p>\n  <p>Maecenas non felis nec est ullamcorper dapibus. Etiam nec nisi felis. Nulla non bibendum justo. Pellentesque pulvinar eleifend nunc, eu scelerisque lacus laoreet non.</p>\n</div>`;
    
    const htmlCodeExample3 = `<div class="container">\n  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero libero, placerat at hendrerit nec, vulputate consectetur nisi. Morbi scelerisque lectus id sapien laoreet accumsan.</p>\n</div>`;
    const [cssCodeExample2, setCssCodeExample2] = useState(`.container{\n  column-count: auto;\n  column-width: 10em;\n  column-gap: 2em;\n}`);
    const [cssCodeExample3, setCssCodeExample3] = useState(`.container{\n  column-count: auto;\n  column-width: 10em;\n  column-gap: 2em;\n  column-rule: 3px solid #ccc;\n}`);
    const [cssCodeExample4, setCssCodeExample4] = useState('');
    const [cssCodeExample5, setCssCodeExample5] = useState('');

    useEffect(() => {
        let cssCodeExample4 = `.container{\n  column-count: auto;\n  column-width: 10em;\n  column-gap: 2em;\n  column-rule: 3px solid #ccc;\n}\nh2{\n  column-span: ${columnSpan};\n};`;
        let cssCodeExample5 = `.container{\n  height: 120px;\n  columns: 4;\n  background: #99c5e9ff;\n  column-fill: ${columnFill};\n};`;
        setCssCodeExample4(`${cssCodeExample4}`);
        setCssCodeExample5(`${cssCodeExample5}`);
    }, [columnSpan, columnFill ])

    const scrDocExample1 = ` 
    <html>
        <body>${htmlCodeExample1}</body>
    </html>
    `;
    const scrDocExample2 = ` 
        <html>
            <body>${htmlCodeExample1}</body>
            <style>${cssCodeExample2}</style>
        </html>
    `;
    const scrDocExample3 = ` 
    <html>
        <body>${htmlCodeExample1}</body>
        <style>${cssCodeExample3}</style>
    </html>
    `;
    
    const scrDocExample4 = ` 
    <html>
        <body>${htmlCodeExample2}</body>
        <style>${cssCodeExample4}</style>
    </html>
    `;

    const scrDocExample5 = ` 
    <html>
        <body>${htmlCodeExample3}</body>
        <style>${cssCodeExample5}</style>
    </html>
    `;

    const handleActions = [
        ['handleRadioColumnSpan', setColumnSpan],
        ['handleRadioColumnFill', setColumnFill],
    ];

    const handleOnChange = (key, e) => {
        const [matchingKey, handleMethod] = handleActions.find(([k]) => k === key);
        if (matchingKey) handleMethod(e.target.value);
    };

    return (
        <div>
            <TutorialPageTemplate
                tutorialName={selectedTutorial}
                tutorialIntroText={'This tutorial introduces Multi-column layout , an approach of arranging a chunk of content, its main features, and CSS syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.'}
                tutorialDescription={`Multi-column layout is a CSS feature that allows content to flow into multiple columns within a container, facilitating better organization and readability of text-heavy content on a webpage.`}
                browserSupport={'widely'}
                browserSupportLink={`https://caniuse.com/?search=multicol`}
                usageGoalsHeading={`By using multicol you can:`}
                usageGoals={[`Effectively present long text content, making it easier for users to comprehend its content.`, `Position texts in the styles of magazines, newspapers, textbooks, educational materials, etc.`, `Display lists, such as products, in multiple columns.`, `Create image galleries or portfolios.`, `Provide responsive design.`]}
            />
            <div className="tutorial-content">
                <div className="learning-material-container">
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Container Properties:</h2>
                            <p className="fs-5 black-text subheading">Using the following container properties, you can create multi-column layouts that meet your design requirements, allowing you to use space more efficiently and improve readability, especially for pages with a lot of content.</p>
                            <div className="learning-material-text" >
                                <div className="property-container">
                                    <h5 className="black-text">column-count:</h5>
                                    <p className="fs-5 black-text property-description">is used to specify the number of columns an element should be divided into.</p>
                                </div>
                                <div className="property-container">
                                    <h5 className="black-text">column-width:</h5>
                                    <p className="fs-5 black-text property-description">is used to specify the width of each column individually.</p>
                                </div>
                                <p className="fs-5 black-text subheading">Combining these two properties, they create the complete <i className="important-point">columns</i> property, defining the count and width for columns in a multi-column layout.</p>
                                <div className="property-container">
                                    <h5 className="black-text">column-gap:</h5>
                                    <p className="fs-5 black-text property-description">is used to specify the gap between columns in the multi-column layout.</p>
                                </div>
                            </div>
                            <p className="fs-5 black-text subheading">Let's take a look at the example below:</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-multicol-1" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCodeExample1}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="output-area-iframe small-size">
                                <div className="output-area-header">Output</div>
                                <iframe
                                    srcDoc={scrDocExample1}
                                    title="output"
                                    sandbox="allow-scripts"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text subheading">This is how the default text view looks like. To split this text into columns for better readability, let's set the <i className="important-point">column-count, column-width</i> and <i className="important-point">column-gap</i> property for our container.</p>
                            <p className="fs-5 black-text subheading">You can drag a grin corner to expand the size of the container and change CSS property!</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-multicol-2" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCodeExample1}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor ">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={cssCodeExample2}
                                        onChange={setCssCodeExample2}
                                    />
                                </div>
                            </div>
                            <div id="iframe-resizeble" className="output-area-iframe medium-size">
                                <div className="output-area-header">Output</div>
                                <div className="resizible-container">
                                    <iframe
                                        srcDoc={scrDocExample2}
                                        title="output"
                                        sandbox="allow-scripts"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text subheading">So now the contents of the container are automatically divided into columns where each column has a width of 10em units. Moreover, multicol allows you to set rules (lines) between columns.</p>
                        </div>
                        <div className="learning-material-text">
                            <div className="property-container">
                                <h5 className="black-text">column-rule-width:</h5>
                                <p className="fs-5 black-text property-description">specifies the width of the rule between columns. It can be set using any valid CSS length unit (such as pixels, ems, rems, percentages, etc.)</p>
                            </div>
                            <div className="property-container">
                                <h5 className="black-text">column-rule-style:</h5>
                                <p className="fs-5 black-text property-description">specifies the style of the rule between columns. It can take various values, such as solid, dashed, dotted, double, groove, ridge, inset, outset, or none, representing different line styles.</p>
                            </div>
                            <div className="property-container">
                                <h5 className="black-text">column-rule-color:</h5>
                                <p className="fs-5 black-text property-description">specifies the color of the rule between columns. </p>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text subheading">When combined, these parts create the complete <i className="important-point">column-rule</i> property, defining the style, width, and color of the rule between columns in a multi-column layout. For example:</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-multicol-3" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={cssCodeExample3}
                                        onChange={setCssCodeExample3}
                                    />
                                </div>
                            </div>
                            <div id="iframe-resizeble" className="output-area-iframe medium-size">
                                <div className="output-area-header">Output</div>
                                <div className="resizible-container">
                                    <iframe
                                        srcDoc={scrDocExample3}
                                        title="output"
                                        sandbox="allow-scripts"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Column Spanning:</h2>
                            <p className="fs-5 black-text subheading">We have seen in the examples above that the content is completely controlled by the set values of the multicol properties. But in cases where the content has headings or other elements that should not be divided by columns, but should be located along the entire container, it is reasonable to use the <i className="important-point">column-span</i> property.</p>
                            <div className="learning-material-text">
                                <div className="property-container">
                                    <h5 className="black-text">The column-span property can have two values:</h5>
                                    <p className="fs-5 black-text property-description">"none": the default value. Specifies that the element should span only one column.</p>
                                    <p className="fs-5 black-text property-description">"all" : specifies that the element should span across all columns, effectively breaking the column layout.</p>
                                </div>
                            </div>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-multicol-4" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCodeExample2}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={cssCodeExample4}
                                        onChange={setCssCodeExample4}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component">
                                <div id="iframe-resizeble" className="output-area-iframe medium-size">
                                    <div className="output-area-header">Output</div>
                                    <div className="resizible-container">
                                        <iframe
                                            srcDoc={scrDocExample4}
                                            title="output"
                                            sandbox="allow-scripts"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                                <div className="radio-interaction-container">
                                    <div className="change-radio-container">column-span:
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="none" name="column-span" value="none"
                                                onChange={(e) => handleOnChange('handleRadioColumnSpan', e)} checked={columnSpan === 'none'} />none
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="all" name="column-span" value="all"
                                                onChange={(e) => handleOnChange('handleRadioColumnSpan', e)} checked={columnSpan === 'all'} />all
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Balancing Columns:</h2>
                            <p className="fs-5 black-text subheading">If the content of a paragraph doesn't fit in one column and goes to another, you can set <i className="important-point">column-fil</i> property to fix it. <i className="important-point">column-fil</i> controls how content is distributed across columns when there is insufficient content to fill all columns equally.</p>
                            <div className="learning-material-text">
                                <div className="property-container">
                                    <h5 className="black-text">The column-fill property also accepts two values:</h5>
                                    <p className="fs-5 black-text property-description">"auto": this is the default value. It allows content to be filled sequentially into columns. As a result, if one column has more content than another, it will overflow into the next column. This may lead to uneven column heights.</p>
                                    <p className="fs-5 black-text property-description">"balance" : this value attempts to balance content evenly across columns, ensuring that each column has a similar height. It redistributes the content to achieve a more visually balanced layout, reducing the likelihood of large gaps at the bottom of shorter columns.</p>
                                </div>
                            </div>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-multicol-5" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCodeExample3}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={cssCodeExample5}
                                        onChange={setCssCodeExample5}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component">
                                <div id="iframe-resizeble" className="output-area-iframe medium-size">
                                    <div className="output-area-header">Output</div>
                                    <div className="resizible-container">
                                        <iframe
                                            srcDoc={scrDocExample5}
                                            title="output"
                                            sandbox="allow-scripts"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                                <div className="radio-interaction-container">
                                    <div className="change-radio-container">column-fill:
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="auto" name="column-fill" value="auto"
                                                onChange={(e) => handleOnChange('handleRadioColumnFill', e)} checked={columnFill === 'auto'} />auto
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="balance" name="column-fill" value="balance"
                                                onChange={(e) => handleOnChange('handleRadioColumnFill', e)} checked={columnFill === 'balance'} />balance
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="note-container">
                            <p className="fs-5"><i className="fs-5 fw-bold">Remember!</i> Multi-column containers, although they mostly work with text, can also be used for containers with other content.</p>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Shorthand:</h2>
                            <p className="fs-5 black-text subheading">All of the previously considered grid properties can use shorthand in real-world examples. Here's a list of the most common ones:</p>
                            <h5 className="black-text">Specification: columns: {`<column-count>`} {`<column-width>`}; </h5><p className="fs-5 black-text property-description">Example: columns: 2 10rem; or just columns: 2; columns: 10rem;</p>
                            <h5 className="black-text">Specification: column-rule: {`<column-rule-width>`} {`<column-rule-style>`} {`<column-rule-color>`}; </h5><p className="fs-5 black-text property-description">Example: column-rule: 2px solid #ccc;</p>
                        </div>
                    </div>
                </div>
                <StartQuizContainer quizTheme={selectedTutorial} />
            </div>

        </div>
    );
}

export default MultiColumn;
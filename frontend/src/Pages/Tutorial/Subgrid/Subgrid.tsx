import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Subgrid.css"
import TutorialPageTemplate from "../../../Components/TutorialPageTemplate/TutorialPageTemplate";
import subgridExample1 from "../../../Components/Assets/subgrid_example_1.png";
import subgridExample2 from "../../../Components/Assets/subgrid_example_2.png";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import enableGridImage from "../../../Components/Assets/enable-grid-image.png";
import StartQuizContainer from "../StartQuizContainer/StartQuizContainer";

const Subgrid = ({ selectedTutorial }) => {

    const [htmlCodeExample1, setHtmlCodeExample1] = useState(`<div class="grid">\n  <div class="nested-grid">\n    <div class="item"></div>\n  </div>\n</div>`);
    const [cssCodeExample1, setCssCodeExample1] = useState(`.grid {\n  border-radius: 7px;\n  border: 0.5px solid black;\n  background-color: #cfcbc8ff;\n  height: 300px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n } 
    \n.nested-grid {\n  grid-column: 2 / 5;\n  grid-row: 1 / 3;\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-template-rows: subgrid;\n  border-radius: 7px;\n  border: 0.5px solid black;\n  background-color: #00375fff;\n } 
    \n.item {\n  background-color: white;\n  grid-column: 2 / 3;\n }`);

    const [htmlCodeExample2, setHtmlCodeExample2] = useState(`<div class="grid">\n  <div class="nested-grid">\n    <div class="item"></div>\n  </div>\n</div>`);
    const [cssCodeExample2, setCssCodeExample2] = useState(`.grid {\n  border-radius: 7px;\n  border: 0.5px solid black;\n  background-color: #cfcbc8ff;\n  height: 300px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n } 
    \n.nested-grid {\n  grid-column: 2 / 5;\n  grid-row: 1 / 3;\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  border-radius: 7px;\n  border: 0.5px solid black;\n  background-color: #00375fff;\n } 
    \n.item {\n  background-color: white;\n  grid-column: 2 / 3;\n }`);

    const scrDocExample1 = ` 
        <html>
            <body>${htmlCodeExample1}</body>
            <style>${cssCodeExample1}</style>
        </html>
    `;
    const scrDocExample2 = ` 
        <html>
            <body>${htmlCodeExample2}</body>
            <style>${cssCodeExample2}</style>
        </html>
    `;
    return (
        <div>
            <TutorialPageTemplate
                tutorialName={selectedTutorial}
                tutorialIntroText={'This tutorial introduces Subgrid, a technology for positioning elements on a page inside another grid, its main features, and CSS syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.'}
                tutorialDescription={`Subgrid is a two-dimensional layout method for positioning elements inside of another already created  grid.`}
                browserSupport={'supported'}
                browserSupportLink={`https://caniuse.com/?search=subgrid`}
                usageGoalsHeading={`Subgrid solves the following case:`}
                usageGoals={[`Create and position elements within the created grid that will inherit the properties of the parent grid, which allows you to manage a single set of tracks (columns and rows).`]}
            />
            <div className="tutorial-content">
                <div className="learning-material-container">
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">The difference between Inherit and Subgrid:</h2>
                            <p className="fs-5 black-text subheading">When you set the <i className="important-point">display: grid;</i> property for a container, the container's children (grid cells) are not affected by this property. That is, their properties will be equal to <i className="important-point">display: block;</i> or <i className="important-point">display: inline;</i> by default.
                                Therefore, we can set any other layout method for the children. Let's take a look at the following examples:</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-subgrid-1" className="code-editor-container vertical">
                                <div className="code-editor">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="grid">\n  <div class="nested-grid">\n    <div class="item"></div>\n  </div>\n</div>`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.grid {\n border-radius: 7px;\n border: 0.5px solid black;\n background-color: #cfcbc8ff;\n height: 300px;\n display: grid;\n grid-template-columns: repeat(5, 1fr);\n grid-template-rows: repeat(3, 1fr);\n } \n.nested-grid {\n border-radius: 7px;\n border: 0.5px solid black;\n background-color: #00375fff;\n grid-column: 2 / 5;\n grid-row: 1 / 3;\n display: inherit;\n grid-template-columns: inherit;\n grid-template-rows: inherit;\n }`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="example-image">
                                <img src={subgridExample1} alt="example-1-subgrid"></img>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text subheading">A nested grid uses inheritance to <i className="important-point">display, grid-template-columns, grid-template-rows</i> properties, thus creating its own layout independent of the parent container, which inherits the properties of the parent element: 5 columns and 3 rows.</p>
                            <p className="fs-5 black-text subheading">To establish the relationship between the subgrid and the parent grid, which means that their separation axes match, we can use the following: </p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-subgrid-1" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.nested-grid {\n grid-column: 2 / 5;\n grid-row: 1 / 3;\n display: grid;\n grid-template-columns: repeat(3, 1fr);\n grid-template-rows: repeat(2, 1fr);\n border-radius: 7px;\n border: 0.5px solid black;\n background-color: #00375fff;\n }`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="example-image">
                                <img src={subgridExample2} alt="example-2-subgrid"></img>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text subheading">Now the subgrid is completely matched with the parent grid markup, which allows us to manage them both at the same time. But in the code, we have to provide for the correct calculations for the correct positioning of the subgrid, which takes some time.</p>
                            <p className="fs-5 black-text subheading">By setting the <i className="important-point">subgrid</i> property, the dimensions for <i className="important-point">grid-template-columns</i> and <i className="important-point"> grid-template-rows</i> will be calculated automatically.</p>
                            <p className="fs-5 black-text subheading">Try to change!</p>
                            <div className="note-container">
                                <p className="fs-5"><i className="fs-5 fw-bold">Note!</i> In your browser console, you can enable the following to see the grid: <img id="enable-grid" src={enableGridImage}></img></p>
                            </div>
                        </div>
                        <div className="usage-example-container vertical">
                            <div className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCodeExample1}
                                        onChange={setHtmlCodeExample1}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={cssCodeExample1}
                                        onChange={setCssCodeExample1}
                                    />
                                </div>
                            </div>
                            <div className="output-area-iframe">
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
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Subgrid either for columns or for rows:</h2>
                            <p className="fs-5 black-text subheading">In cases where you need to inherit, for example, only columns or only rows, set the subgrid for the desired part and specify the opposite manually.</p>
                            <p className="fs-5 black-text subheading">Try swapping the subgrid property!</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCodeExample2}
                                        onChange={setHtmlCodeExample2}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={cssCodeExample2}
                                        onChange={setCssCodeExample2}
                                    />
                                </div>
                            </div>
                            <div className="output-area-iframe">
                                <div className="output-area-header">Output</div>
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
                </div>
                <StartQuizContainer quizTheme={selectedTutorial} />
            </div>
        </div>

    );
}

export default Subgrid;
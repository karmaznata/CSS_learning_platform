import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./Grid.css";
import TutorialPageTemplate from "../../../Components/TutorialPageTemplate/TutorialPageTemplate";
import StartQuizContainer from "../StartQuizContainer/StartQuizContainer";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import exampleTwoGrid from "../../../Components/Assets/example-2-grid.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const Grid = ({ quizTheme }) => {
    const [gridLevel, setGridLevel] = useState('');
    const [gridTemplateColumns, setGridTemplateColumns] = useState('repeat(3, 1fr)');
    const [gridTemplateRows, setGridTemplateRows] = useState('repeat(2, 1fr)');

    const [columnGap, setColumnGap] = useState(0);
    const [rowGap, setRowGap] = useState(0);

    const [htmlCode, setHtmlCode] = useState(`<div class="container">\n\t<header>Header</header>\n\t<nav>Navigation</nav>\n\t<main>Main area</main>\n\t<footer>Footer</footer>\n</div>`);
    const [cssCode, setCssCode] = useState(`.container {\n  display: grid;\n  height: 500px;\n  grid-template-areas:\n    "header header"\n    "nav  main"\n    "nav  footer";\n  grid-template-rows: 50px 1fr 30px;\n  grid-template-columns: 150px 1fr;\n}\n\n.container > header {\n  grid-area: header;\n  background-color: #add8e6;\n}\n\n.container > nav {\n  grid-area: nav;\n  background-color: #a0c4ff;\n}\n\n.container > main {\n  grid-area: main;\n  background-color: #e0ffff;\n}\n\n.container > footer {\n  grid-area: footer;\n  background-color: #c6f6d5;\n}`);
    
    const handleActions = [
        ['handleRadioChangeLevel', setGridLevel],
        ['handleGridTemplColumns', setGridTemplateColumns],
        ['handleGridTemplRows', setGridTemplateRows],
        ['handleColumnGap', setColumnGap, true],
        ['handleRowGap', setRowGap, true],

    ];

    const handleOnChange = (key, e) => {
        const [matchingKey, handleMethod, parseInt] = handleActions.find(([k]) => k === key);
        if (matchingKey) {
            if (parseInt) {
                handleMethod(Number(e.target.value));
            }
            else {
                handleMethod(e.target.value);
            }
        }
    };
    const scrDoc = ` 
        <html>
            <body>${htmlCode}</body>
            <style>${cssCode}</style>
        </html>
    `;

    return (
        <div>
            <TutorialPageTemplate
                tutorialName={'Grid'}
                tutorialIntroText={'This tutorial introduces Grid method for positioning elements on a page , its main features, and CSS syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.'}
                tutorialDescription={'Grid is a two-dimensional layout method for positioning elements in grid.'}
                browserSupport={'widely'}
                browserSupportLink={`https://caniuse.com/?search=grid`}
                usageGoalsHeading={`Grid solves the following tasks:`}
                usageGoals={[`Create intricate, multi-column layouts with ease.`, `Easily align items within the grid vertically and horizontally.`, `Create grids within grids, providing additional flexibility in layout design.`,
                    `Precisely control the dimension of elements.`, `Add gaps between grid items, providing spacing and improving readability.`]}
            />
            <div className="tutorial-content">
                <div className="learning-material-container">
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Container Properties:</h2>
                            <p className="fs-5 black-text subheading">The grid divides the parent container into rows <i className="important-point">and</i> columns, forming a virtual grid in which you can place your elements. Breaking the container into a grid starts with setting the <i className="important-point">display: grid;</i> properties
                                at the block level and <i className="important-point">display: inline-grid;</i> at the line level as the spans: </p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-1" className="code-editor-container vertical">
                                <div className="code-editor bigger ">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<span>Span element</span>\n<div class="container">\n\t<div class="item">1</div>\n\t<div class="item">2</div>\n\t<div class="item">3</div>\n</div>\n<span>Span element</span>\n`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.container{\n\tdisplay: grid/inline-grid;\n\twidth: 200px;\n}`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-container-grid ">
                                        <span>Span element</span>
                                        <div className="container-grid" style={{ width: '200px', display: gridLevel }}>
                                            <div className="item">1</div>
                                            <div className="item">2</div>
                                            <div className="item">3</div>
                                        </div>
                                        <span>Span element</span>
                                    </div>

                                    {/* <div id="primary-axis" className={`vl direction-${flexDirection}`}> <i className="arrow right"></i><span>Primary axis</span></div> */}
                                </div>
                                <div className="radio-interaction-container">
                                    <div className="change-radio-container">display:
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="grid" name="display" value="grid"
                                                onChange={(e) => handleOnChange('handleRadioChangeLevel', e)} checked={gridLevel === 'grid'} />grid
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="inlinr-grid" name="display" value="inline-grid"
                                                onChange={(e) => handleOnChange('handleRadioChangeLevel', e)} checked={gridLevel === 'inline-grid'} />inline-grid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="fs-5 black-text">Although we may not see much difference now after setting up the grid, our container has already set up a column of three elements. Let's see how you can manage columns and rows in a grid, using a 3x2 grid as an example:</p>
                        <div className="learning-material-text" style={{ display: 'flex' }}>
                            <div className="property-comtainer">
                                <h5 className="black-text">grid-template-columns:</h5>
                                <p className="fs-5 black-text property-description">is used to to specify number of columns and set the size of columns in a grid container.</p>
                            </div>
                            <div className="property-comtainer">
                                <h5 className="black-text">grid-template-rows:</h5>
                                <p className="fs-5 black-text property-description">is used to specify number of rows and set the size of rows in a grid container.</p>
                            </div>
                        </div>
                        <div className="usage-example-container vertical">
                            <div className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="container">\n\t<div class="item">1</div>\n\t<div class="item">2</div>\n\t<div class="item">3</div>\n\t<div class="item">4</div>\n\t<div class="item">5</div>\n\t<div class="item">6</div>\n</div>\n`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.container{\n\theight: 300px;\n\tdisplay: grid;\n\tgrid-template-columns: 100px 100px 100px;\n\tgrid-template-rows: 100px 100px;\n}`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="example-image">
                                <img src={exampleTwoGrid} alt="example-2-grid"></img>
                            </div>
                        </div>
                        <p className="fs-5 black-text property-description"> This way, we set up a grid of three columns and two rows with per-cell dimensions of 100px x 100px. The following is used for simplified
                            identification: <i className="important-point"> grid-template-columns: repeat(3, 100px);</i> <i className="important-point"> grid-template-rows: repeat(2, 100px);</i>.</p>
                        <p className="fs-5 black-text property-description"> When working with grids, the <i className="important-point">fr</i> unit dimension is often used. It allows you to define columns/rows that take up a fraction of the available space within the container.</p>
                        <div className="usage-example-container vertical">
                            <div className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.container{\n\theight: 300px;\n\tdisplay: grid;\n\tgrid-template-columns: ${gridTemplateColumns};\n\tgrid-template-rows: ${gridTemplateRows};\n}`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container bigger">
                                <div className="example-component">
                                    <div id="example-grid-3" className="example-container-grid" style={{ gridTemplateColumns: gridTemplateColumns, gridTemplateRows: gridTemplateRows }}>
                                        <div className="item">1</div>
                                        <div className="item">2</div>
                                        <div className="item">3</div>
                                        <div className="item">4</div>
                                        <div className="item">5</div>
                                        <div className="item">6</div>
                                    </div>
                                </div>
                                <div className="align-interaction-inputs">
                                    <div className="input-interaction-component">
                                        <label htmlFor="gridTemplColInputId" className="number-label">grid-template-columns:</label>
                                        <label htmlFor="gridTemplRowsInput" className="number-label">grid-template-rows:</label>
                                    </div>
                                    <div className="input-interaction-component">
                                        <input type="text" id="gridTemplColInputId" className="form-control number-input" value={gridTemplateColumns} onChange={(e) => handleOnChange('handleGridTemplColumns', e)} />;
                                        <input type="text" id="gridTemplRowsInput" className="form-control number-input" value={gridTemplateRows} onChange={(e) => handleOnChange('handleGridTemplRows', e)} />;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text property-description">What's more, the grid allows you to set spacing for columns (<i className="important-point">column-gap</i>) and (<i className="important-point">row-gap</i>).
                            The original drafts of the CSS Grid specification used grid-row-gap and grid-column-gap for these properties. Browsers still recognize them as other names for row-gap and column-gap to keep older websites working properly.</p>
                            <div className="note-container">
                                 <p className="fs-5"><i className="fs-5 fw-bold">Note!</i> Other values also can be used to set the dimensions, such as <i className="important-point">em</i>, <i className="important-point">vmin</i>, <i className="important-point">cm</i> and <i className="important-point">%</i>.</p>
                            </div>
                        </div>
                        <div className="usage-example-container vertical center">
                            <div className="interactive-component-container bigger">
                                <div className="example-component">
                                    <div id="example-grid-4" className="example-container-grid " style={{ rowGap: rowGap, columnGap: columnGap }}>
                                        <div className="item">1</div>
                                        <div className="item">2</div>
                                        <div className="item">3</div>
                                        <div className="item">4</div>
                                        <div className="item">5</div>
                                        <div className="item">6</div>
                                    </div>
                                </div>
                                <div className="range-interaction-component">
                                    <label htmlFor="columnGap" className="form-label">column-gap:</label>
                                    <input type="range" className="form-range" min={0} max={30} id="columnGap" value={columnGap} onInput={(e) => handleOnChange('handleColumnGap', e)} />
                                    <output>{columnGap}px;</output>
                                </div>
                                <div className="range-interaction-component">
                                    <label htmlFor="rowGap" className="form-label">row-gap:</label>
                                    <input type="range" className="form-range" min={0} max={30} id="rowGap" value={rowGap} onInput={(e) => handleOnChange('handleRowGap', e)} />
                                    <output>{rowGap}px;</output>
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">grid-template-areas:</h5>
                            <p className="fs-5 black-text property-description">this property, along with other possible area names, defines named grid areas within the grid layout. These areas can then be referenced by elements using the <i className="important-point">grid-area</i> property for placement.</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCode}
                                        onChange={setHtmlCode}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={cssCode}
                                        onChange={setCssCode}
                                    />
                                </div>                              
                            </div>
                            <div className="grid-area-iframe">
                                    <iframe   
                                        srcDoc={scrDoc}
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
                            <h2 className="blue-text">Item Placement Properties:</h2>
                            <p className="fs-5 black-text subheading"><i className="important-point">grid-column, grid-row</i> and <i className="important-point">grid-area</i> - these properties serve as a powerful tool for precisely placing elements in a grid, offering designers unprecedented control and flexibility.</p>
                        </div>
                        <div className="learning-material-text">
                            <div className="property-comtainer">
                                <h5 className="black-text">grid-columns:</h5>
                                <p className="fs-5 black-text property-description">is used to define on which grid columns an element should start and end. It allows elements to span across multiple columns, facilitating the creation of complex and responsive layouts.</p>
                                <p className="fs-5 black-text property-description"> Determining property values: <i className="property-values-point">{`grid-column: < grid-column-start >/< grid-column-end >`}</i></p>                            
                            </div>
                            <div className="property-comtainer">
                                <h5 className="black-text">grid-rows:</h5>
                                <p className="fs-5 black-text property-description">is used to dictate the starting and ending positions of an element, but along the grid's rows. It enables elements to span vertically, accommodating various content arrangements within the grid.</p>
                                <p className="fs-5 black-text property-description">Determining property values: <i className="property-values-point">{`grid-row: < grid-row-start >/< grid-row-end >`}</i>.</p>                            
                            </div>
                            <div className="property-comtainer">
                                <h5 className="black-text">grid-area:</h5>
                                <p className="fs-5 black-text property-description">Offering a more concise approach, grid-area assigns an element to a named grid area (as in the previous example) or is used as a shorthand for <i className="important-point">grid-column, grid-row</i>.</p>
                                <p className="fs-5 black-text property-description">In the second case, the value declaration: <i className="property-values-point">{`grid-area: < grid-row-start >/< grid-column-start >/< grid-row-end >/< grid-column-end >`}</i></p>
                            </div>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-1" className="code-editor-container vertical"></div>
                            <div className="interactive-component-container bigger"></div>
                        </div>
                    </div>
                </div>
                <StartQuizContainer quizTheme={quizTheme} />
            </div>

        </div>
    );
}

export default Grid;
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Button from "react-bootstrap/Button";
import "./Grid.css";
import TutorialPageTemplate from "../../../Components/TutorialPageTemplate/TutorialPageTemplate";
import StartQuizContainer from "../StartQuizContainer/StartQuizContainer";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import exampleTwoGrid from "../../../Components/Assets/example-2-grid.png"
import { TutorialModel } from "../../../Models/TutorialModel";

interface GridProps {
    tutorial: TutorialModel;
}

const Grid: React.FC<GridProps> = ({ tutorial }) => {

    const [gridLevel, setGridLevel] = useState('block');
    const [gridTemplateColumns, setGridTemplateColumns] = useState('repeat(3, 1fr)');
    const [gridTemplateRows, setGridTemplateRows] = useState('repeat(2, 1fr)');
    const [columnGap, setColumnGap] = useState(0);
    const [rowGap, setRowGap] = useState(0);
    const [justifyItems, setJustifyItems] = useState('normal');
    const [justifyContent, setJustifyContent] = useState('normal');
    const [alignItems, setAlignItems] = useState('normal');
    const [alignContent, setAlignContent] = useState('normal');

    const [htmlCodeExample1, setHtmlCodeExample1] = useState(`<div class="container">\n  <header>Header</header>\n  <nav>Navigation</nav>\n  <main>Main area</main>\n\  <footer>Footer</footer>\n</div>`);
    const [cssCodeExample1, setCssCodeExample1] = useState(`.container {\n  display: grid;\n  height: 500px;\n  grid-template-areas:\n    "header header"\n    "nav  main"\n    "nav  footer";\n  grid-template-rows: 50px 1fr 30px;\n  grid-template-columns: 150px 1fr;\n}\n\n.container > header {\n  grid-area: header;\n  background-color: #add8e6;\n}\n\n.container > nav {\n  grid-area: nav;\n  background-color: #a0c4ff;\n}\n\n.container > main {\n  grid-area: main;\n  background-color: #e0ffff;\n}\n\n.container > footer {\n  grid-area: footer;\n  background-color: #c6f6d5;\n}`);

    const [htmlCodeExample2, setHtmlCodeExample2] = useState(`<div class="grid-container">\n  <div class="item item1">1</div>\n  <div class="item item2">2</div>\n  <div class="item item3">3</div>\n  <div class="item item4">4</div>\n</div>`);
    const [cssCodeExample2, setCssCodeExample2] = useState(`body {\n  height: 32rem;\n}\n\n.grid-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 0.5fr);\n  gap: 10px;\n}\n\n.item {\n  background-color: lightblue;\n  border-radius: 1rem;\n  padding: 10px;\n  text-align: center;\n}\n\n.item1 {\n  grid-column: 1 / 3; \n  grid-row: 1;\n}\n\n.item2 {\n  grid-column: 2; \n  grid-row: 2; \n}\n\n.item3 {\n  grid-column: 3; \n  grid-row: 1 / 3; \n}\n\n.item4 {\n  grid-column: 1; \n  grid-row: 2; \n}`);

    const handleActions: [string, any, boolean?][] = [
        ['handleRadioChangeLevel', setGridLevel],
        ['handleGridTemplColumns', setGridTemplateColumns],
        ['handleGridTemplRows', setGridTemplateRows],
        ['handleJustifyItems', setJustifyItems],
        ['handleJustifyContent', setJustifyContent],
        ['handleAlignItems', setAlignItems],
        ['handleAlignContent', setAlignContent],
        ['handleColumnGap', setColumnGap, true],
        ['handleRowGap', setRowGap, true],

    ];

    const handleOnChange = (key, e) => {
        const [matchingKey, handleMethod, parseToInt] = handleActions.find(([k]) => k === key);
        if (matchingKey) {
            if (parseToInt) {
                handleMethod(Number(e.target.value));
            }
            else {
                handleMethod(e.target.value);
            }
        }
    };
    const scrDocExample5 = ` 
        <html>
            <body>${htmlCodeExample1}</body>
            <style>${cssCodeExample1}</style>
        </html>
    `;

    const scrDocExample6 = `
        <html>
            <body>${htmlCodeExample2}</body>
            <style>${cssCodeExample2}</style>
        </html>
    `;

    return (
        <div>
            <TutorialPageTemplate
                tutorialName={tutorial.tutorial_theme}
                tutorialIntroText={tutorial.tutorial_intro_text}
                tutorialDescription={tutorial.description}
                browserSupport={tutorial.method_browser_support}
                browserSupportLink={tutorial.browser_support_link}
                usageGoalsHeading={tutorial.usage_goals_heading}
                usageGoals={tutorial.usage_goals}
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
                                        value={`.container{\n\tdisplay: ${gridLevel};\n\twidth: 200px;\n}`}
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
                            <div className="property-container">
                                <h5 className="black-text">grid-template-columns:</h5>
                                <p className="fs-5 black-text property-description">is used to specify number of columns and set the size of columns in a grid container.</p>
                            </div>
                            <div className="property-container">
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
                            <h5 className="black-text">Responsive Square Grid with auto-fit and minmax() :</h5>
                            <p className="fs-5 black-text property-description"> Combining  <i className="important-point">auto-fit</i> with <i className="important-point">minmax()</i>  allows the grid to automatically adjust the number of columns based on available space, ensuring that each column has a set minimum width and expands to equally fill any additional, predefined space.
                                This is especially useful for creating responsive layouts where the number of columns dynamically changes based on the size of the viewport size. Check out the example below! You can drag a grin corner to expand the size of the container.</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-8" className="code-editor-container vertical">
                                <div className="code-editor">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="grid-container">\n  <div class="item item1">1</div>\n  <div class="item item2">2</div>\n  <div class="item item3">3</div>\n  <div class="item item4">4</div>\n</div>`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.grid-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    gap: 5px;\n}\n\n.item {\n  background-color: lightblue;\n  border: 1px solid darkblue;\n  padding: 10px;\n  text-align: center;\n}`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container" style={{ height: "auto" }}>
                                <div className="example-component">
                                    <div id="grid-auto-fit" className="example-resizable-container">
                                        <div className="item item1">1</div>
                                        <div className="item item2">2</div>
                                        <div className="item item3">3</div>
                                        <div className="item item4">4</div>
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
                            <p className="fs-5 black-text property-description">Try changing the code to see how the output changes!</p>
                        </div>
                        <div className="usage-example-container vertical">
                            {/* <iframe
                                height="300"
                                style={{ width: '100%', height: "35rem" }}
                                title="Deployment Diagram"
                                src="https://codepen.io/pokjbckn-the-scripter/embed/preview/gOyjGyW?default-tab=html%2Cresult&editable=true"
                                loading="lazy"
                                allowFullScreen={true}
                            >
                                See the Pen <a href="https://codepen.io/pokjbckn-the-scripter/pen/gOyjGyW">Untitled</a> by Наталія Кармазіна (
                                <a href="https://codepen.io/pokjbckn-the-scripter">@pokjbckn-the-scripter</a>) on{' '}
                                <a href="https://codepen.io">CodePen</a>.
                            </iframe> */}
                            <div className="code-editor-container vertical">
                                <div className="code-editor bigger editable">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCodeExample1}
                                        onChange={setHtmlCodeExample1}
                                    />
                                </div>
                                <div className="code-editor bigger editable">
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
                                    srcDoc={scrDocExample5}
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
                            <div className="property-container">
                                <h5 className="black-text">grid-columns:</h5>
                                <p className="fs-5 black-text property-description">is used to define on which grid columns an element should start and end. It allows elements to span across multiple columns, facilitating the creation of complex and responsive layouts.</p>
                                <p className="fs-5 black-text property-description"> Determining property values: <i className="property-values-point">{`grid-column: < grid-column-start >/< grid-column-end >`}</i></p>
                            </div>
                            <div className="property-container">
                                <h5 className="black-text">grid-rows:</h5>
                                <p className="fs-5 black-text property-description">is used to dictate the starting and ending positions of an element, but along the grid's rows. It enables elements to span vertically, accommodating various content arrangements within the grid.</p>
                                <p className="fs-5 black-text property-description">Determining property values: <i className="property-values-point">{`grid-row: < grid-row-start >/< grid-row-end >`}</i>.</p>
                            </div>
                            <div className="property-container">
                                <h5 className="black-text">grid-area:</h5>
                                <p className="fs-5 black-text property-description">Offering a more concise approach, grid-area assigns an element to a named grid area (as in the previous example) or is used as a shorthand for <i className="important-point">grid-column, grid-row</i>.</p>
                                <p className="fs-5 black-text property-description">In the second case, the value declaration: <i className="property-values-point">{`grid-area: < grid-row-start >/< grid-column-start >/< grid-row-end >/< grid-column-end >`}</i></p>
                            </div>
                        </div>
                        <p className="fs-5 black-text property-description">Try changing the code to see how the output changes!</p>
                        <div className="usage-example-container vertical">
                            <div className="code-editor-container vertical">
                                <div className="code-editor bigger editable">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={htmlCodeExample2}
                                        onChange={setHtmlCodeExample2}
                                    />
                                </div>
                                <div className="code-editor bigger editable">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={cssCodeExample2}
                                        onChange={setCssCodeExample2}
                                    />
                                </div>
                            </div>
                            <div className="output-area-iframe" >
                                <div className="output-area-header">Output</div>
                                <iframe
                                    srcDoc={scrDocExample6}
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
                            <h2 className="blue-text">Alignment Properties:</h2>
                            <p className="fs-5 black-text subheading">As in flexbox, there are the properties, which allow you to set the alignment of elements in the grid. Let's take a look at each of them.</p>
                            <div id="align-prop-container" className="property-container">
                                <div className="property-item">
                                    <h5 className="black-text">justify-items:</h5>
                                    <p className="fs-5 black-text property-description">this property aligns grid items within their respective grid cells horizontally, positioning them at the start of the grid cell.</p>
                                </div>
                                <div className="property-item">
                                    <h5 className="black-text">justify-content:</h5>
                                    <p className="fs-5 black-text property-description">this property aligns the entire grid content horizontally within the grid container. It distributes the space between grid items evenly along the main axis of the grid container, leaving no space at the start or end of the container.</p>
                                </div>
                                <div className="property-item">
                                    <h5 className="black-text">align-items:</h5>
                                    <p className="fs-5 black-text property-description">this property aligns grid items within their respective grid cells vertically, positioning them at the center of the grid cell.</p>
                                </div>
                                <div className="property-item">
                                    <h5 className="black-text">align-content:</h5>
                                    <p className="fs-5 black-text property-description">this property aligns the entire grid content vertically within the grid container. It distributes the space around grid rows evenly along the cross axis of the grid container, leaving equal space at the start and end of the container.</p>
                                </div>
                            </div>
                        </div>
                        <div className="usage-example-container vertical">
                            <div className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="grid-container">\n  <div class="grid-item">One</div>\n  <div class="grid-item">Two</div>\n  <div class="grid-item">Three</div>\n  <div class="grid-item">Four</div>\n  <div class="grid-item">Five</div>\n  <div class="grid-item">Six</div>\n</div>`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.grid-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    justify-content: ${justifyContent};\n    justify-items: ${justifyItems};\n    align-content: ${alignContent};\n    align-items: ${alignItems};\n}\n`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container bigger">
                                <div className="example-component">
                                    <div id="grid-align-prop-container" className="example-container" >
                                        <div className="grid-container" style={{ justifyContent: justifyContent, alignItems: alignItems, alignContent: alignContent, justifyItems: justifyItems }}>
                                            <div className="item grid-item">One</div>
                                            <div className="item grid-item">Two</div>
                                            <div className="item grid-item">Three</div>
                                            <div className="item grid-item">Four</div>
                                            <div className="item grid-item">Five</div>
                                            <div className="item grid-item">Six</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdowns-container">
                                    <div className="dropdown-interaction-component">
                                        justify-items:
                                        <select className="form-select" onChange={(e) => handleOnChange('handleJustifyItems', e)} style={{ width: '35%', margin: '2px' }}>
                                            <option value="normal">normal</option>
                                            <option value="start">start</option>
                                            <option value="end">end</option>
                                            <option value="center">center</option>
                                            <option value="space-between">space-between</option>
                                            <option value="space-around">space-around</option>
                                            <option value="space-evenly">space-evenly</option>
                                        </select>
                                    </div>
                                    <div className="dropdown-interaction-component">
                                        justify-content:
                                        <select className="form-select" onChange={(e) => handleOnChange('handleJustifyContent', e)} style={{ width: '35%', margin: '2px' }}>
                                            <option value="normal">normal</option>
                                            <option value="start">start</option>
                                            <option value="end">end</option>
                                            <option value="center">center</option>
                                            <option value="space-between">space-between</option>
                                            <option value="space-around">space-around</option>
                                            <option value="space-evenly">space-evenly</option>
                                        </select>
                                    </div>
                                    <div className="dropdown-interaction-component">
                                        align-items:
                                        <select className="form-select" onChange={(e) => handleOnChange('handleAlignItems', e)} style={{ width: '35%', margin: '2px' }}>
                                            <option value="normal">normal</option>
                                            <option value="start">start</option>
                                            <option value="end">end</option>
                                            <option value="center">center</option>
                                        </select>
                                    </div>
                                    <div className="dropdown-interaction-component">
                                        align-content:
                                        <select className="form-select" onChange={(e) => handleOnChange('handleAlignContent', e)} style={{ width: '35%', margin: '2px' }}>
                                            <option value="normal">normal</option>
                                            <option value="start">start</option>
                                            <option value="end">end</option>
                                            <option value="center">center</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Shorthand:</h2>
                            <p className="fs-5 black-text subheading">All of the previously considered grid properties can use shorthand in real-world examples. Here's a list of the most common ones:</p>
                            <h5 className="black-text">Specification: grid-template: {`<grid-template-rows>`}/{`<grid-template-columns>`}; </h5><p className="fs-5 black-text property-description">Example: grid-template: none / 100px 200px 1fr;</p>
                            <h5 className="black-text">Specification: grid-gap or just gap: {`<row-gap>`} {`<column-gap>`}; </h5><p className="fs-5 black-text property-description">Example: gap: 10px 20px;</p>
                            <h5 className="black-text">Specification: place-items: {`<justify-items>`} {`<align-items>`}; </h5><p className="fs-5 black-text property-description">Example: place-items: center start;</p>
                            <h5 className="black-text">Specification: place-content: {`<justify-content>`} {`<align-content>`}; </h5><p className="fs-5 black-text property-description">Example: place-content: space-evenly space-between;</p>
                        </div>
                    </div>
                </div>
                <StartQuizContainer quizTheme={tutorial.tutorial_theme} />
            </div>
        </div>
    );
}

export default Grid;
import React, { useState, useEffect, useRef } from "react";
import "./Flexbox.css";
import StartQuizContainer from "../StartQuizContainer/StartQuizContainer";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import ToggleSwitch from '../../../Components/toggleSwitch/toggleSwitch.js';
import TutorialPageTemplate from "../../../Components/TutorialPageTemplate/TutorialPageTemplate.jsx";

const Flexbox = ({tutorial}) => {
    
    const [flexDirection, setFlexDirection] = useState('row');
    const [flexWrap, setFlexWrap] = useState('');
    const [justifyContent, setJustifyContent] = useState('start');
    const [alignItems, setAlignItems] = useState('normal');
    const [alignContent, setAlignContent] = useState('normal');
    const [alignSelf, setAlignSelf] = useState('normal');
    const [addFlexgrow, setAddFlexgrow] = useState();

    const [flexgrow1, setFlexgrow1] = useState(1);
    const [flexgrow2, setFlexgrow2] = useState(0);
    const [flexgrow3, setFlexgrow3] = useState(0);

    const [flexbasis1, setFlexbasis1] = useState(0);
    const [flexbasis2, setFlexbasis2] = useState(0);
    const [flexbasis3, setFlexbasis3] = useState(0);

    const [flexshrink1, setFlexshrink1] = useState(1);
    const [flexshrink2, setFlexshrink2] = useState(1);

    const handleActions = [
        ['handleRadioChangeDirection', setFlexDirection],
        ['handleRadioChangeWrap', setFlexWrap],
        ['handleJustifyContent', setJustifyContent],
        ['handleAlignItems', setAlignItems],
        ['handleAlignContent', setAlignContent],
        ['handleAlignSelf', setAlignSelf],
        ['handleFlexgrow1Change', setFlexgrow1],
        ['handleFlexgrow2Change', setFlexgrow2],
        ['handleFlexgrow3Change', setFlexgrow3],
        ['handleFlexbasis1Change', setFlexbasis1, true],
        ['handleFlexbasis2Change', setFlexbasis2, true],
        ['handleFlexbasis3Change', setFlexbasis3, true],
        ['handleFlexshrink1Change', setFlexshrink1, true],
        ['handleFlexshrink2Change', setFlexshrink2, true],
    ];

    useEffect(() => {
        setAddFlexgrow(addFlexgrow);
    }, []);

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

    return (
        <div>
            <TutorialPageTemplate
                tutorialName={tutorial.tutorial_theme}
                tutorialIntroText={tutorial.tutorial_intro_text}
                tutorialDescription={tutorial.tutorial_theme}
                browserSupport={tutorial.tutorial_theme}
                browserSupportLink={tutorial.tutorial_theme}
                usageGoalsHeading={tutorial.tutorial_theme}
                usageGoals={tutorial.tutorial_theme}
            />
            <div className="tutorial-content">
                <div className="learning-material-container">
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Container Properties:</h2>
                            <p className="fs-5 black-text subheading">This method positions items according to the defined primary axis, which is a <i className="important-point">row</i> by default. Primary axis define the direction in which elements will be placed inside the parent container,
                                while the cross axis length determines the stretching of the elements. You can also reverse flexbox elements using the <i className="important-point">row-reverse</i> and <i className="important-point">column-reverse</i> values. Experiment with these values as well! You can set the direction of the positioning axis using the following properties</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-1" className="code-editor-container vertical">
                                <div className="code-editor">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="container">\n\t<div class="item">1</div>\n\t<div class="item">2</div>\n\t<div class="item">3</div>\n</div>`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.container{\n\tdisplay: flex;\n\tflex-direction: row/column/row-reverse/column-reverse;\n }`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-container" style={{ flexDirection: flexDirection }}>
                                        <div className="item">1</div>
                                        <div className="item">2</div>
                                        <div className="item">3</div>
                                    </div>
                                    <div id="primary-axis" className={`vl direction-${flexDirection}`}> <i className="arrow right"></i><span>Primary axis</span></div>

                                </div>
                                <div className="radio-interaction-container">
                                    <div className="change-radio-container">flex-direction:
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="row" name="flex-direction" value="row"
                                                onChange={(e) => handleOnChange('handleRadioChangeDirection', e)} checked={flexDirection === 'row'} />row
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="row-reverse" name="flex-direction" value="row-reverse"
                                                onChange={(e) => handleOnChange('handleRadioChangeDirection', e)} checked={flexDirection === 'row-reverse'} />row-reverse
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="column" name="flex-direction" value="column"
                                                onChange={(e) => handleOnChange('handleRadioChangeDirection', e)} checked={flexDirection === 'column'} />column
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="column-reverse" name="flex-direction" value="column-reverse"
                                                onChange={(e) => handleOnChange('handleRadioChangeDirection', e)} checked={flexDirection === 'column-reverse'} />column-reverse
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text">Items in the container are positioned automatically depending on the
                                available space. But when you have a large number of children inside a parent container with its set dimensions,, you may encounter the problem of container overflow.
                                To display all the children without overflowing, set the <i className="important-point">flex-wrap</i> property.
                            </p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-2" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="container">\n\t<div class="item">One</div>\n\t<div class="item">Two</div>\n\t<div class="item">Three</div>\n\t<div class="item">Four</div>\n\t<div class="item">Five</div>\n\t<div class="item">Six</div>\n\t<div class="item">Seven</div>\n</div>`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.container{\n\tdisplay: flex;\n\tflex-wrap: wrap/wrap-reverse;\n }`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-container" style={{ flexWrap: flexWrap }}>
                                        <div className="item item-1">One</div>
                                        <div className="item item-2">Two</div>
                                        <div className="item item-3">Three</div>
                                        <div className="item item-4">Four</div>
                                        <div className="item item-5">Five</div>
                                        <div className="item item-6">Six</div>
                                        <div className="item item-7">Seven</div>
                                    </div>
                                </div>
                                <div className="radio-interaction-container">
                                    <div className="change-radio-container">flex-wrap:
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="wrap" name="flex-wrap" value="wrap"
                                                onChange={(e) => handleOnChange('handleRadioChangeWrap', e)} checked={flexWrap === 'wrap'} />wrap
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="wrap-reverse" name="flex-wrap" value="wrap-reverse"
                                                onChange={(e) => handleOnChange('handleRadioChangeWrap', e)} checked={flexWrap === 'wrap-reverse'} />wrap-reverse
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <h2 className="blue-text">Container Alignment Properties:</h2>
                        <p className="fs-5 black-text subheading">Since the main direction of the elements has been determined, flexbox offers various alignment properties for these elements. Let's take a look at the most important ones.</p>
                        <div className="align-two-column" style={{ display: "flex" }}>
                            <div className="learning-material-text" style={{ textAlign: "justify", flex: 1 }}>
                                <h5 className="black-text">justify-content:</h5>
                                <p className="fs-5 black-text property-description">is used to align flex items along the main axis of the flex container. It defines how the available space along the main axis should be distributed among the flex items.</p>
                                <h5 className="black-text">align-items:</h5>
                                <p className="fs-5 black-text property-description">is used to the flex container and controls how flex items are aligned along the cross-axis (perpendicular to the main axis). It sets the default alignment for all flex items within the container.</p>
                            </div>
                            <div className="usage-example-container vertical" style={{ textAlign: "justify", flex: 1.5 }}>
                                <div className="code-editor-container vertical"></div>
                                <div className="interactive-component-container bigger">
                                    <div className="example-component">
                                        <div className="example-container" style={{ justifyContent: justifyContent, alignItems: alignItems }}>
                                            <div className="item">1</div>
                                            <div className="item">2</div>
                                            <div className="item">3</div>
                                        </div>
                                    </div>
                                    <div className="dropdown-interaction-component">
                                        justify-content:
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => handleOnChange('handleJustifyContent', e)} style={{ width: '35%', margin: '2px' }}>
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
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => handleOnChange('handleAlignItems', e)} style={{ width: '35%', margin: '2px' }}>
                                            <option value="normal">normal</option>
                                            <option value="start">start</option>
                                            <option value="end">end</option>
                                            <option value="center">center</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">align-content:</h5>
                            <p className="fs-5 black-text property-description">is used to align elements within a flex container along the transverse axis. This property works when elements occupy two or more rows, and has no effect on elements aligned on a single row,
                                i.e. requires preliminary setting of the property <i className="important-point">flex-wrap</i>:</p>
                        </div>
                        <div className="usage-example-container vertical smaller-center">
                            <div className="code-editor-container vertical"></div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-container" style={{ flexWrap: "wrap", alignContent: alignContent }}>
                                        <div className="item item-1">One</div>
                                        <div className="item item-2">Two</div>
                                        <div className="item item-3">Three</div>
                                        <div className="item item-4">Four</div>
                                        <div className="item item-5">Five</div>
                                        <div className="item item-6">Six</div>
                                        <div className="item item-7">Seven</div>
                                    </div>
                                </div>
                                <div className="dropdown-interaction-component">
                                    align-content:
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => handleOnChange('handleAlignContent', e)} style={{ width: '35%' }}>
                                        <option value="normal">normal</option>
                                        <option value="start">start</option>
                                        <option value="end">end</option>
                                        <option value="center">center</option>
                                        <option value="space-between">space-between</option>
                                        <option value="space-around">space-around</option>
                                        <option value="space-evenly">space-evenly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Item Properties:</h2>
                            <p className="fs-5 black-text subheading">In addition to setting the positioning of the elements according to the flexbox layout, you can position each element individually.</p>
                            <h5 className="black-text">align-self:</h5>
                            <p className="fs-5 black-text property-description">is applied directly to individual flex items. It allows you to override the align-items property for a specific flex item, giving it a unique alignment within the container.</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-5" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="container">\n\t<div class="item">Item 1</div>\n\t<div class="item">Item 2</div>\n\t<div class="item special">Item 3 (Special)</div>\n\t<div class="item">Item 4</div>\n</div>`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.container {\n\tdisplay: flex;\n\talign-items: start;\n\theight: 200px;\n\tborder: 1px solid #000;\n}\n\n.special {\n  align-self: center;\n}`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-container" style={{ alignItems: "start" }}>
                                        <div className="item">Item 1</div>
                                        <div className="item">Item 2</div>
                                        <div className="item special" style={{ alignSelf: alignSelf }}>Item 3 (Special)</div>
                                        <div className="item">Item 4</div>
                                    </div>
                                </div>
                                <div className="dropdown-interaction-component">
                                    align-content:
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => handleOnChange('handleAlignSelf', e)} style={{ width: '35%' }}>
                                        <option value="normal">normal</option>
                                        <option value="start">start</option>
                                        <option value="end">end</option>
                                        <option value="center">center</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">flex-grow:</h5>
                            <p className="fs-5 black-text property-description">You can set the proportions for each element using the <i className="important-point">flex-grow</i> property. It is a unitless number that determines how much the flex item will grow relative to the other flex items in the flex container.
                                If all flex items in the flex container have a <i className="important-point">flex-grow</i> value of 1, they will all grow proportionally to fill the available space. If one item has a <i className="important-point">flex-grow</i> value of 2 while the others have a value of 1,
                                it will take up twice as much available space as the other items. A value of 0 means the item will not grow.
                            </p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-6" className="code-editor-container vertical">
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="container">\n\t<div id="item-1">Item 1</div>\n\t<div id="item-2">Item 2</div>\n\t<div id="item-3">Item 3</div>\n</div>`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.container {\n\tdisplay: flex;\n}\n\n#item-1 {\n\tflex-grow: ${flexgrow1};\n}\n\n#item-2 {\n\tflex-grow: ${flexgrow2};\n}\n\n#item-3 {\n\tflex-grow: ${flexgrow3};\n}`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container bigger">
                                <div className="example-component">
                                    <div className="example-container">
                                        <div className="item" id="item-1-grow" style={{ flexGrow: flexgrow1 }}>Item 1</div>
                                        <div className="item" id="item-2-grow" style={{ flexGrow: flexgrow2 }}>Item 2</div>
                                        <div className="item" id="item-3-grow" style={{ flexGrow: flexgrow3 }}>Item 3</div>
                                    </div>
                                </div>
                                <div className="range-interaction-component">
                                    <label htmlFor="flexgrowInputId-1" className="form-label">item-1 flex-grow:</label>
                                    <input type="range" className="form-range" min="0" max="4" id="flexgrowInputId-1" value={flexgrow1} onInput={(e) => handleOnChange('handleFlexgrow1Change', e)} />
                                    <output>{flexgrow1}</output>
                                </div>
                                <div className="range-interaction-component">
                                    <label htmlFor="flexgrowInputId-2" className="form-label">item-2 flex-grow:</label>
                                    <input type="range" className="form-range" min="0" max="4" id="flexgrowInputId-2" value={flexgrow2} onInput={(e) => handleOnChange('handleFlexgrow2Change', e)} />
                                    <output>{flexgrow2}</output>
                                </div>
                                <div className="range-interaction-component">
                                    <label htmlFor="flexgrowInputId-3" className="form-label">item-3 flex-grow:</label>
                                    <input type="range" className="form-range" min="0" max="4" id="flexgrowInputId-3" value={flexgrow3} onInput={(e) => handleOnChange('handleFlexgrow3Change', e)} />
                                    <output>{flexgrow3}</output>
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">flex-basis:</h5>
                            <p className="fs-5 black-text property-description">In Flexbox, the <i className="important-point">flex-basis</i> property functions similarly to <i className="important-point">width</i> in a flex row and similarly to <i className="important-point">height</i> in a flex column. In Flexbox, most properties are aligned with either the primary or cross axis. For instance, <i className="important-point">justify-content</i> distributes items along the primary axis,
                                whether it's horizontal or vertical. However, width and height behave differently. Width always affects the horizontal size, even if the layout is switched from row to column.
                                To address this, Flexbox introduces <i className="important-point">flex-basis</i> as a generic "size" property. It acts like width or height but is aligned with the primary axis. This allows setting the tentative size of an element in the direction of the primary axis, regardless of its orientation.</p>
                        </div>
                        <div className="usage-example-container vertical bigger-center">
                            <div className="code-editor-container vertical"></div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-resizable-container">
                                        <div className="item" id="item-1-basis" style={{ flexBasis: flexbasis1, flexGrow: addFlexgrow === true ? flexgrow1 : '' }}>Item 1</div>
                                        <div className="item" id="item-2-basis" style={{ flexBasis: flexbasis2, flexGrow: addFlexgrow === true ? flexgrow2 : '' }}>Item 2</div>
                                        <div className="item" id="item-3-basis" style={{ flexBasis: flexbasis3, flexGrow: addFlexgrow === true ? flexgrow3 : '' }}>Item 3</div>
                                    </div>
                                </div>
                                <div className="align-row-inputs">
                                    <div className="number-interaction-component">
                                        <label htmlFor="flexbasisInputId-1" className="number-label">item-1 flex-basis:</label>
                                        <input type="number" id="flexbasisInputId-1" className="number-input" value={flexbasis1} onChange={(e) => handleOnChange('handleFlexbasis1Change', e)} min={50} max={400} step={50} />px;
                                    </div>
                                    <div className="number-interaction-component">
                                        <label htmlFor="flexbasisInputId-2" className="number-label">item-2 flex-basis:</label>
                                        <input type="number" id="flexbasisInputId-2" className="number-input" value={flexbasis2} onChange={(e) => handleOnChange('handleFlexbasis2Change', e)} min={50} max={400} step={50} />px;
                                    </div>
                                    <div className="number-interaction-component">
                                        <label htmlFor="flexbasisInputId-3" className="number-label">item-3 flex-basis:</label>
                                        <input type="number" id="flexbasisInputId-3" className="number-input" value={flexbasis3} onChange={(e) => handleOnChange('handleFlexbasis3Change', e)} min={50} max={400} step={50} />px;
                                    </div>
                                    <div className="toggle-switch">
                                        {`flex-grow *above:`} <ToggleSwitch setAddFlexgrow={setAddFlexgrow} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">flex-shrink:</h5>
                            <p className="fs-5 black-text property-description">In Flexbox, when items need to shrink to fit the container, they usually shrink proportionally based on their <i className="important-point">flex-grow</i> value. However, sometimes we may want to control how much each item shrinks relative to others. This is where the <i className="important-point">flex-shrink</i> comes into play.
                                By default, all flex items have a <i className="important-point">flex-shrink</i> value of 1, meaning they can shrink equally to fit the container if needed. But if we want certain items to shrink more or less than others, we can adjust their <i className="important-point">flex-shrink</i> values accordingly. Experiment with the example below to get the idea!</p>
                        </div>
                        <div className="usage-example-container vertical">
                            <div id="example-8" className="code-editor-container vertical">
                                <div className="code-editor narrower">
                                    <CodeEditor
                                        language="xml"
                                        displayName="HTML"
                                        value={`<div class="container">\n\t<div id="item-1">Item 1</div>\n\t<div id="item-2">Item 2</div>\n</div>`}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="code-editor bigger narrower">
                                    <CodeEditor
                                        language="css"
                                        displayName="CSS"
                                        value={`.container {\n\tdisplay: flex;\n}\n\n#item-1 {\n\tflex-shrink: ${flexshrink1};\n\twidth: 300px;\n}\n\n#item-2 {\n\tflex-shrink: ${flexshrink2};\n\twidth: 200px;\n}`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container bigger">
                                <div className="example-component">
                                    <div id="example-8" className="example-resizable-container">
                                        <div className="item" id="item-1-shrink" style={{ flexShrink: flexshrink1, width: '300px' }}>Item 1</div>
                                        <div className="item" id="item-2-shrink" style={{ flexShrink: flexshrink2, width: '200px' }}>Item 2</div>
                                    </div>
                                </div>
                                <div className="align-row-inputs">
                                    <div className="number-interaction-component">
                                        <label htmlFor="flexshrinkInputId-1" className="number-label">item-1 flex-shrink:</label>
                                        <input type="number" id="flexshrinkInputId-1" className="number-input" value={flexshrink1} onChange={(e) => handleOnChange('handleFlexshrink1Change', e)} min={0} max={5} step={1} />;
                                    </div>
                                    <div className="number-interaction-component">
                                        <label htmlFor="flexshrinkInputId-2" className="number-label">item-2 flex-shrink:</label>
                                        <input type="number" id="flexshrinkInputId-2" className="number-input" value={flexshrink2} onChange={(e) => handleOnChange('handleFlexshrink2Change', e)} min={0} max={5} step={1} />;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">Shorthand:</h2>
                            <p className="fs-5 black-text subheading">All of the previously considered flexbox properties can use shorthand in real-world examples. Here's a list of the most common ones:</p>
                            <h5 className="black-text">Specification: flex-flow: {`<flex-direction>`} {`<flex-wrap>`}; </h5><p className="fs-5 black-text property-description">Example: flex-flow: row wrap;</p>
                            <h5 className="black-text">Specification: flex: {`<flex-grow>`} {`<flex-shrink>`} {`<flex-basis>`}; </h5><p className="fs-5 black-text property-description">Example: flex: 1 1 auto;</p>
                        </div>
                    </div>
                </div>
                <StartQuizContainer quizTheme={tutorial.tutorial_theme} />
            </div>
        </div>
    );
}

export default Flexbox;
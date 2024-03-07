import React, { useState, useEffect } from "react";
import "./Flexbox.css";
import { Link } from "react-router-dom";
import BaselineIcon from "../../../Components/Assets/baseline-high-dark.png";
import StartQuizContainer from "../StartQuizContainer/StartQuizContainer";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";

const Flexbox = ({ quizTheme }) => {
    const [displayValue, setDisplayValue] = useState('default');

    const handleRadioChange = (e) => {
        setDisplayValue(e.target.value);
    };

    return (
        <div>
            <div className="intro-header">
                <div className="intro-header-background">
                    <div className="intro-content">
                        <div className="intro-text">
                            <div className="heading-tutorial display-1">Flexbox</div>
                            <div className="paragraph-bigger fs-6 fw-light">This tutorial introduces Flexbox, a technology for positioning elements on a page, its main features, and CSS  syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tutorial-content">
                <div className="tutorial-definition-wrap">
                    <div className="tutorial-definition-content">
                        <div className="heading-tutorial-small fs-2">Flexbox is a one-dimensional layout method for positioning elements in rows <i className="important-point">OR</i> columns. </div>
                        <Link to="https://caniuse.com/?search=flexbox">
                            <div className="browser-supporting-container-1">
                                <img className="baseline-icon" src={BaselineIcon} alt="baseline-high-dark" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="method-goals">
                            <h1 className="heading">Flexbox solves the following tasks:</h1>
                        </div>
                        <div className="goals-list-wrapper">
                            <ul>
                                <li className="goals-description fs-5 fw-light">Create layouts that place elements along a given axis.</li>
                                <li className="goals-description fs-5 fw-light">Aligns the container's contents within the parent component.</li>
                                <li className="goals-description fs-5 fw-light">Make all child elements of a container occupy the same amount of available width/height, regardless of what width/height is available.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="learning-material-container">
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blau-text">Container Properties:</h2>
                            <p className="fs-5 black-text subheading">This method positions items according to the defined primary axis, which is a <i className="important-point">row</i> by default. Primary axis define the direction in which elements will be placed inside the parent container,
                                while the cross axis length determines the stretching of the elements. You can set the direction of the positioning axis using the following properties:</p>
                        </div>
                        <div className="usage-example-container">
                            <div className="code-editor-container">
                                <CodeEditor
                                    language="css"
                                    displayName="CSS"
                                    value={`.container{\n\tdisplay: flex;\n\tflex-direction: row/column;\n }`}
                                    readOnly={true}
                                />
                            </div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-container">
                                        <div className="item">1</div>
                                        <div className="item">2</div>
                                        <div className="item">3</div>
                                    </div>
                                    <div className="vl"><span>&#8678;Primary axis</span></div>
                                </div>
                                <div className="interaction-items-container">
                                    <div className="change-property-radio">display:
                                        <div>
                                            <input type="radio" id="default" name="display" value="default"
                                                onChange={handleRadioChange} checked={displayValue === 'default'} />default
                                        </div>
                                        <div>
                                            <input type="radio" id="flex" name="display" value="flex"
                                                onChange={handleRadioChange} checked={displayValue === 'flex'} />flex
                                        </div>
                                    </div>
                                    <div className="change-property-radio">
                                        <div className="change-property-radio">flex-direction:
                                            <div>
                                                <input type="radio" id="row" name="flex-direction" value="row"
                                                    onChange={handleRadioChange} checked={displayValue === 'row'} />row
                                            </div>
                                            <div>
                                                <input type="radio" id="column" name="flex-direction" value="column"
                                                    onChange={handleRadioChange} checked={displayValue === 'column'} />column
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text">You can also reverse flexbox elements using the <i className="important-point">row-reverse</i> and <i className="important-point">column-reverse</i> values. Experiment with these values as well!</p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2"></div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text">Items in the container are positioned automatically depending on the
                                available space. But when you have a large number of children inside a parent container with its set dimensions,, you may encounter the problem of container overflow.
                                To display all the children without overflowing, set the <i className="important-point">flex-wrap</i> property.
                            </p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2">Add flex-wrap: wrap; toggle.</div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blau-text">Container Alignment Properties:</h2>
                            <p className="fs-5 black-text subheading">Since the main direction of the elements has been determined, flexbox offers various alignment properties for these elements. Let's take a look at the most important ones.</p>
                            <h5 className="black-text">justify-content:</h5>
                            <p className="fs-5 black-text property-description">is used to align flex items along the main axis of the flex container. It defines how the available space along the main axis should be distributed among the flex items.</p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2"></div>
                            <div className="interactive-component-container abc2"></div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">align-items:</h5>
                            <p className="fs-5 black-text property-description">is used to the flex container and controls how flex items are aligned along the cross-axis (perpendicular to the main axis). It sets the default alignment for all flex items within the container.</p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2"></div>
                            <div className="interactive-component-container abc2"></div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">align-content:</h5>
                            <p className="fs-5 black-text property-description">is used to align elements within a flex container along the transverse axis. This property works when elements occupy two or more rows, and has no effect on elements aligned on a single row.</p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2"></div>
                            <div className="interactive-component-container abc2"></div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blau-text">Item Properties:</h2>
                            <p className="fs-5 black-text subheading">In addition to setting the positioning of the elements according to the flexbox layout, you can position each element individually.</p>
                            <h5 className="black-text">align-self:</h5>
                            <p className="fs-5 black-text property-description">is applied directly to individual flex items. It allows you to override the align-items property for a specific flex item, giving it a unique alignment within the container.</p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2"></div>
                            <div className="interactive-component-container abc2"></div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">flex-grow:</h5>
                            <p className="fs-5 black-text property-description">You can set the proportions for each element using the <i className="important-point">flex-grow</i> property. It is a unitless number that determines how much the flex item will grow relative to the other flex items in the flex container.
                                If all flex items in the flex container have a <i className="important-point">flex-grow</i> value of 1, they will all grow proportionally to fill the available space. If one item has a <i className="important-point">flex-grow</i> value of 2 while the others have a value of 1,
                                it will take up twice as much available space as the other items. A value of 0 means the item will not grow.
                            </p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2"></div>
                            <div className="interactive-component-container abc2"></div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">flex-basis:</h5>
                            <p className="fs-5 black-text property-description">In Flexbox, the <i className="important-point">flex-basis</i> property functions similarly to <i className="important-point">width</i> in a flex row and similarly to <i className="important-point">height</i> in a flex column. In Flexbox, most properties are aligned with either the primary or cross axis. For instance, <i className="important-point">justify-content</i> distributes items along the primary axis,
                                whether it's horizontal or vertical. However, width and height behave differently. Width always affects the horizontal size, even if the layout is switched from row to column.
                                To address this, Flexbox introduces <i className="important-point">flex-basis</i> as a generic "size" property. It acts like width or height but is aligned with the primary axis. This allows setting the tentative size of an element in the direction of the primary axis, regardless of its orientation.</p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2"></div>
                            <div className="interactive-component-container abc2"></div>
                        </div>
                        <div className="learning-material-text">
                            <h5 className="black-text">flex-shrink:</h5>
                            <p className="fs-5 black-text property-description">In Flexbox, when items need to shrink to fit the container, they usually shrink proportionally based on their <i className="important-point">flex-grow</i> value. However, sometimes we may want to control how much each item shrinks relative to others. This is where the <i className="important-point">flex-shrink</i> comes into play.
                                By default, all flex items have a <i className="important-point">flex-shrink</i> value of 1, meaning they can shrink equally to fit the container if needed. But if we want certain items to shrink more or less than others, we can adjust their <i className="important-point">flex-shrink</i> values accordingly.</p>
                        </div>
                        <div className="usage-example-container abc">
                            <div className="code-editor-container abc2"></div>
                            <div className="interactive-component-container abc2"></div>
                        </div>
                    </div>
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blau-text">Shorthand:</h2>
                            <p className="fs-5 black-text subheading">All of the previously considered flexbox properties can use shorthand in real-world examples. Here's a list of the most common ones:</p>
                            <h5 className="black-text">Specification: flex-flow: {`<flex-direction>`} {`<flex-wrap>`}; </h5><p className="fs-5 black-text property-description">Example: flex-flow: row wrap;</p>
                            <h5 className="black-text">Specification: flex: {`<flex-grow>`} {`<flex-shrink>`} {`<flex-basis>`}; </h5><p className="fs-5 black-text property-description">Example: flex: 1 1 auto;</p>
                        </div>

                    </div>
                </div>
                <StartQuizContainer quizTheme={quizTheme} />

            </div>
        </div>
    );
}

export default Flexbox;
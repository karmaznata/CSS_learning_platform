import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import "./Grid.css";
import TutorialPageTemplate from "../../../Components/TutorialPageTemplate/TutorialPageTemplate";
import StartQuizContainer from "../StartQuizContainer/StartQuizContainer";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";

const Grid = ({ quizTheme }) => {

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
                            <h2 className="blau-text">Container Properties:</h2>
                            <p className="fs-5 black-text subheading">The grid divides the parent container into rows <i className="important-point">and</i> columns, forming a virtual grid in which you can place your elements. Breaking the container into a grid starts with:</p>
                        </div>
                        <div className="usage-example-container">
                            <div id="example-1" className="code-editor-container">
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
                                        value={`.container{\n\tdisplay: grid;\n }`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-container">
                                        <div className="item">1</div>
                                        <div className="item">2</div>
                                        <div className="item">3</div>
                                    </div>
                                    {/* <div id="primary-axis" className={`vl direction-${flexDirection}`}> <i className="arrow right"></i><span>Primary axis</span></div> */}
                                </div>
                                <div className="radio-interaction-container">
                                    {/* <div className="change-radio-container">flex-direction:
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="row" name="flex-direction" value="row"
                                                onChange={(e)=>handleOnChange('handleRadioChangeDirection', e)} checked={flexDirection === 'row'} />row
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="row-reverse" name="flex-direction" value="row-reverse"
                                                onChange={(e)=>handleOnChange('handleRadioChangeDirection', e)} checked={flexDirection === 'row-reverse'} />row-reverse
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="column" name="flex-direction" value="column"
                                                onChange={(e)=>handleOnChange('handleRadioChangeDirection', e)} checked={flexDirection === 'column'} />column
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="column-reverse" name="flex-direction" value="column-reverse"
                                                onChange={(e)=>handleOnChange('handleRadioChangeDirection', e)} checked={flexDirection === 'column-reverse'} />column-reverse
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="learning-material-text">
                            <p className="fs-5 black-text">Items in the container are positioned automatically depending on the
                                available space. But when you have a large number of children inside a parent container with its set dimensions,, you may encounter the problem of container overflow.
                                To display all the children without overflowing, set the <i className="important-point">flex-wrap</i> property.
                            </p>
                        </div>
                        <div className="usage-example-container">
                            <div id="example-2" className="code-editor-container">
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
                                        value={`.container{\n\tdisplay: grid;\n\tflex-wrap: wrap/wrap-reverse;\n }`}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="interactive-component-container">
                                <div className="example-component">
                                    <div className="example-container">
                                        <div className="item item-1">One</div>
                                        <div className="item item-2">Two</div>
                                        <div className="item item-3">Three</div>
                                        <div className="item item-4">Four</div>
                                        <div className="item item-5">Five</div>
                                        <div className="item item-6">Six</div>
                                        <div className="item item-7">Seven</div>
                                    </div>
                                </div>
                                {/* <div className="radio-interaction-container">
                                    <div className="change-radio-container">flex-wrap:
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="wrap" name="flex-wrap" value="wrap"
                                                onChange={(e)=>handleOnChange('handleRadioChangeWrap', e)} checked={flexWrap === 'wrap'} />wrap
                                        </div>
                                        <div className="radio-button-label">
                                            <input className="form-check-input" type="radio" id="wrap-reverse" name="flex-wrap" value="wrap-reverse"
                                                onChange={(e)=>handleOnChange('handleRadioChangeWrap', e)} checked={flexWrap === 'wrap-reverse'} />wrap-reverse
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StartQuizContainer quizTheme={quizTheme}/>
        </div>
    );
}

export default Grid;
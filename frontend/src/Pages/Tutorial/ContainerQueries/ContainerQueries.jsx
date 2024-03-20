import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./ContainerQueries.css";
import TutorialPageTemplate from "../../../Components/TutorialPageTemplate/TutorialPageTemplate";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import StartQuizContainer from "../StartQuizContainer/StartQuizContainer";
import containerQuerieslBanner from '../../../Components/Assets/container-queries-intro.png';

const ContainerQueries = ({ selectedTutorial }) => {

    const htmlCodeExample1 = `<div class="card-container resizable">\n  <div class="card">\n    <div class="card-item">Card Title</div>\n    <div class="card-item">Card content</div>\n     <div class="card-item">Card Footer</div>\n  </div>\n</div>`;
    const [cssCodeExample1, setCssCodeExample1] = useState(`.card-container {\n  background: gray;\n  container-type: inline-size;\n}\n.card-item{\n  height: 45px;\n  width: 150px;\n  width: 23rem;\n  background: black;\n}\n.card {\n  color: white; \n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}
    \n\n@container (min-width: 450px){\n  .card {\n     flex-direction: row; \n  }\n   .card-item {\n     width: 9.5rem;\n     height: 9rem;\n     background: blue;\n  }\n}\n\n.resizable{\n  height: 150px;\n  width: 570px;\n  padding: 5px;\n  min-width: 375px;\n  max-width: 570px;\n  resize: horizontal;\n  overflow: auto;\n}`);


    const [htmlCodeExample2, setHtmlCodeExample2] = useState('');
    const [cssCodeExample2, setCssCodeExample2] = useState(`.resizable{\n  height: 600px;\n  width: 500px;\n  padding: 5px;\n  min-width: 500px;\n  max-width: 1200px;\n  min-height: 600px;\n  max-height: 700px;\n  resize: both;\n  overflow: auto;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nimg {\n  display: block;\n  width: 100%;\n  aspect-ratio: 3 / 2;\n  object-fit: cover;\n}\narticle * {\n  margin: 0;\n}\nh3 {\n  font-size: 1.3em;\n  margin-bottom: 0.2em;\n  line-height: 1.24;\n}
          \nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.grid-container {\n  padding: 1rem;\n  margin: 0 auto;\n  background: #00375fff;\n}\n.article-container {\n  container-type: inline-size;\n  container-name: article;\n}\narticle {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n  background: #e6eaedff;\n}
          \n@container article (inline-size > 500px) {\n  article {\n    grid-template-columns: 1fr 2fr;\n  }\n}\n@container article (inline-size > 800px) {\n  article {\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n    font-size: 1.2rem;\n  }\n  h3 {\n    font-size: 2rem;\n  }\n}\n.grid {\n  display: grid;\n  gap: 1rem;\n}\n`);

    useEffect(() => {
        let htmlCodeExample2 = `<div class="grid-container resizable">\n  <ul class="grid">\n   <li class="article-container">\n\    <article>\n      <img src="${containerQuerieslBanner}" alt="image"/>\n      <div>\n       <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>\n       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil explicabo adipisci iste saepe reiciendis.</p>\n      </div>\n     </article>\n    </li>\n   <li class="article-container">\n\    <article>\n      <img src="${containerQuerieslBanner}" alt="image"/>\n      <div>\n       <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>\n       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil explicabo adipisci iste saepe reiciendis.</p>\n      </div>\n     </article>\n    </li>\n   <li class="article-container">\n\    <article>\n      <img src="${containerQuerieslBanner}" alt="image"/>\n      <div>\n       <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>\n       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil explicabo adipisci iste saepe reiciendis.</p>\n      </div>\n     </article>\n    </li>\n   <li class="article-container">\n\    <article>\n      <img src="${containerQuerieslBanner}" alt="image"/>\n      <div>\n       <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>\n       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil explicabo adipisci iste saepe reiciendis.</p>\n      </div>\n     </article>\n    </li>\n </ul>\n</div>`;
        setHtmlCodeExample2(htmlCodeExample2);
    }, [])

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
                tutorialIntroText={'In this tutorial we are going to consider container queries layout , its main features, and CSS syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.'}
                tutorialDescription={`Container Queries are a highly anticipated feature in CSS that allow developers to apply styles based on the size of a container rather than the viewport.`}
                browserSupport={'low'}
                browserSupportLink={`https://caniuse.com/?search=container%20queries`}
                usageGoalsHeading={`Container Queries layout help with:`}
                usageGoals={[`Designing components that need to adapt their layout based on their container size, such as navigation menus, cards, or grids building macro and micro layout.`,
                    `Creating layouts that adjust dynamically to the available space within a container, ensuring optimal presentation across various screen sizes and devices.`, `Implementing complex user interface elements, like interactive widgets or modals, that require responsive behavior based on their container's dimensions.`]}
            />
            <div className="tutorial-content">
                <div className="learning-material-container">
                    <div className="learning-material-section">
                        <div className="learning-material-text">
                            <h2 className="blue-text">The @container-rule and container properties:</h2>
                            <p className="fs-5 black-text subheading">Hopefully, I've already seen a Grid and Flexbox tutorials as they will help you better understand all the functionality of Container Queries in this tutorial.</p>
                            <p className="fs-5 black-text subheading">In CSS, <i className="important-point">@container</i> is a relatively new at-rule that allows you to apply styles based on the size of a container element and not on the size of the viewport as in media queries. This enables what's called container queries.</p>
                            <p className="fs-5 black-text subheading">So, how it actually works?</p>
                            <div className="learning-material-text">
                                <p className="fs-5 black-text subheading"><b>1. Container context: </b>you define a container context using the <i className="important-point">container-type</i> property on an element. This property specifies the dimension you want to query on, like width <i className="important-point">inline-size</i> or height <i className="important-point">block-size</i>.</p>
                                <p className="fs-5 black-text subheading"><b>2. Container name: </b>you can assign a name to a container element using the <i className="important-point">container-name</i> property. This property takes a list of space-separated names.</p>
                                <p className="fs-5 black-text subheading"><b>3. @container Rule: </b>then, you use the <i className="important-point">@container</i> at-rule along with the container context you defined. Inside this rule, you specify styles that should be applied to descendant elements based on the container's size.</p>
                            </div>
                        </div>
                    </div>
                    <div className="usage-example-container vertical">
                        <div id="example-container-queries-1" className="code-editor-container vertical">
                            <div className="code-editor bigger">
                                <CodeEditor
                                    language="xml"
                                    displayName="HTML"
                                    value={htmlCodeExample1}
                                    readOnly={true}
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
                        <p className="fs-5 black-text subheading">In the example, three containers were defined inside another. Depending on the size of the parent container, the inner containers change their position and color. So, when the size is less than 450px, the cards become black and are placed in a column, otherwise they are blue and placed in a row.</p>
                        <p className="fs-5 black-text subheading">By specifying the name of the container, you can easily define container queries for it. In addition, you can specify container dimensions in different ways. Take a look at the following example, and take a close look at the structure.</p>
                    </div>
                    <div className="usage-example-container horizontal">
                        <div id="example-container-queries-2" className="code-editor-container horizontal">
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
                                    value={cssCodeExample2}
                                    onChange={setCssCodeExample2}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="output-area-iframe big-size">
                        <div className="output-area-header">Output</div>
                        <iframe
                            srcDoc={scrDocExample2}
                            title="output"
                            sandbox="allow-scripts"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="learning-material-text">
                        <p className="fs-5 black-text subheading">Today, this method is gaining popularity and more and more new browser versions are starting to support this technique. Nevertheless, don't forget to check the support for the browser you need.</p>
                    </div>
                </div>
                <StartQuizContainer quizTheme={selectedTutorial} />
            </div>
        </div>
    );
}

export default ContainerQueries;
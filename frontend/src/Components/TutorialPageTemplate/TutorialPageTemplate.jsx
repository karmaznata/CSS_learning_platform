import React, { useEffect, useState } from "react";
import './TutorialPageTemplate.css';
import { Link } from "react-router-dom";
import baselineIconHight from '../Assets/baseline-high-dark.png';
import baselineIcoMedium from '../Assets/baseline-medium-dark.png';
import baselineIcoLow from '../Assets/baseline-low-dark.png';
import widelyBrowserSupport from '../Assets/browser-support-banner1.png';
import browserSupportBanner from '../Assets/browser-support-banner2.png';
import lowBrowserSupport from '../Assets/browser-support-banner3.png';
import flexboxBanner from '../Assets/flexbox-intro.png';
import gridBanner from '../Assets/grid-intro.png';
import subgridBanner from '../Assets/subgrid-intro.png';
import multicolBanner from '../Assets/multicol-intro.png';
import containerQuerieslBanner from '../Assets/container-queries-intro.png';

const TutorialPageTemplate = (props) => {

    const[browserSupportIcon, setBrowserSupportIcon] = useState();
    const[browserBaselineIcon, setBrowserBaselineIcon] = useState();
    const[tutorialBanner, setTutorialBanner] = useState();

    const { tutorialName, tutorialIntroText, tutorialDescription, browserSupport, browserSupportLink, usageGoalsHeading, usageGoals } = props;
    
   
    useEffect(()=>{
        switch(browserSupport){
            case 'widely' : setBrowserSupportIcon(widelyBrowserSupport); setBrowserBaselineIcon(baselineIconHight)
                break;
            case 'supported' : setBrowserSupportIcon(browserSupportBanner); setBrowserBaselineIcon(baselineIcoMedium)
                break;
            case 'low' : setBrowserSupportIcon(lowBrowserSupport); setBrowserBaselineIcon(baselineIcoLow)
                break;
            default:
                break;
        }
        switch(tutorialName){
            case 'Flexbox' : setTutorialBanner(flexboxBanner)
                break;
            case 'Grid' : setTutorialBanner(gridBanner)
                break;
            case 'CSS Grid Subgrid' : setTutorialBanner(subgridBanner)
                break;
            case 'Multi-column Layout' : setTutorialBanner(multicolBanner)
                break;
            case 'Container Queries' : setTutorialBanner(containerQuerieslBanner)
                break;
            default:
                break;
        }
    },[browserSupport, tutorialName])


    return (
        <div>
            <div className="intro-header">
                <div className="intro-header-background" style={{backgroundImage : `url(${tutorialBanner})`}}>
                    <div className="intro-content">
                        <div className="intro-text">
                            <div className="heading-tutorial display-1">{tutorialName}</div>
                            <div className="paragraph-bigger fs-6 fw-light">{tutorialIntroText}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-body">
                <div className="tutorial-definition-wrap">
                    <div className="tutorial-definition-content">
                        <div className="heading-tutorial-small fs-2">{tutorialDescription}</div>
                        <Link to={browserSupportLink}>
                            <div className="browser-supporting-container" style={{backgroundImage : `url(${browserSupportIcon})`}}>
                                <img className="baseline-icon" src={browserBaselineIcon} alt="baseline-high-dark" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="goals-banner">
                    <div className="container-goals">
                        <div className="method-goals" style={{flex: '1'}}>
                            <h1 className="heading">{usageGoalsHeading}</h1>
                        </div>
                        <div className="goals-list-wrapper" style={{flex: '2'}}>
                            {usageGoals.map((goal, index) => (
                                <ul key={index}>
                                    <li className="goals-description fs-5 fw-light">{goal}</li>
                                </ul>
                            ))}                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorialPageTemplate;
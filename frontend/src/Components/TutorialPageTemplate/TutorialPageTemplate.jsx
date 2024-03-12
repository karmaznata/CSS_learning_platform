import React, { useEffect, useState } from "react";
import './TutorialPageTemplate.css';
import { Link } from "react-router-dom";
import baselineIcon from '../Assets/baseline-high-dark.png';
import widelyBrowserSupport from '../Assets/browser-support-banner.png';
import flexboxBanner from '../Assets/flexbox-intro.png';
import gridBanner from '../Assets/grid-intro.png';


const TutorialPageTemplate = (props) => {

    const[browserSupportIcon, setBrowserSupportIcon] = useState();
    const[tutorialBanner, setTutorialBanner] = useState();

    const { tutorialName, tutorialIntroText, tutorialDescription, browserSupport, browserSupportLink, usageGoalsHeading, usageGoals } = props;
    
   
    useEffect(()=>{
        switch(browserSupport){
            case 'widely' : setBrowserSupportIcon(widelyBrowserSupport)
                break;
            default:
                break;
        }
        switch(tutorialName){
            case 'Flexbox' : setTutorialBanner(flexboxBanner)
                break;
            case 'Grid' : setTutorialBanner(gridBanner)
                break;
            default:
                break;
        }
    },[])


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
                                <img className="baseline-icon" src={baselineIcon} alt="baseline-high-dark" />
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
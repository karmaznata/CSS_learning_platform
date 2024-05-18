import React, { useContext, useState } from 'react';
import "./TutorialsSearchView.css";
import { Link } from 'react-router-dom';
import { TutorialContext } from '../../Context/TutorialContext';
import { EventRegister } from 'react-native-event-listeners';
// import {Img} from 'react-image';
// import spinner from "../Assets/spinner-load.gif";

const TutorialsSearchView = () => {

  const all_tutorials = useContext(TutorialContext);
  const [filteredTutorials] = useState(all_tutorials);

  const selectTutorial = (tutorial) => {
    localStorage.setItem('tutorial', tutorial);
    EventRegister.emit('selectedTutorialEvent', tutorial);
  }

  return (
    <div className="tutorials-overview">
      <div className="tutorials-overview-panel">
        <div className="circle-design big"></div>
        <div className="intro-area label fs-1 fw-bold">What do you want to explore?</div>
        <div className="circle-design small"></div>
      </div>
      <div className="select-tutorial">
        {filteredTutorials.map((tutorial) => (
          <div className="tutorial-item" key={tutorial.tutorial_id}>
            <div className="tutorial-banner-container">
              <Link
                to={`/tutorials/${tutorial.path}`}
                className="tutorial-link"
                onClick={() => {
                  selectTutorial(`${tutorial.tutorial_theme}`);
                }}
              >
                <img 
                  className="tutorial-banner-image" 
                  src={tutorial.tutorial_banner} 
                  alt={`${tutorial.tutorial_theme} banner`} 
                  />
                <div className="open-tutorial-button" >
                  <div className="play-button"></div>
                </div>
              </Link>
            </div>
            <div className="tutorial-text-container">
              <h1 className='display-6' style={{ fontSize: "2rem" }}>{tutorial.tutorial_theme}</h1>
              <p className='fs-6 fw-light'>{tutorial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TutorialsSearchView;
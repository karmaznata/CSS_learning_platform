import React, { useContext, useState } from "react";
import "./TutorialsMenu.css";
import { Link } from "react-router-dom";
import { TutorialContext } from "../../Context/TutorialContext";
import {EventRegister} from 'react-native-event-listeners';

const TutorialsMenu = ({ handleMenuClick }) => {

  const { all_tutorials } = useContext(TutorialContext);
  // const [selectedTutorial, setSelectedTutorial] = useState('');
  // const handleSelectedTutorial = (selectedTutorial) => {
  //   localStorage.setItem('tutorial', selectedTutorial);
  // };
        

  const selectTutorial= (tutorial)=>{
    localStorage.setItem('tutorial', tutorial);
    EventRegister.emit('selectedTutorialEvent', tutorial);
  }

  return (
    <div className="tutorial-dropdown-menu">
      <ul className="nav-menu-dropdown">
        {all_tutorials.map((tutorial) => (
          <li className="nav-item" key={tutorial.id}>
            <Link
              to={`/tutorials/${tutorial.path}`}
              className="nav-link-tutorial"
              onClick={() => {
                selectTutorial(`${tutorial.path}`);
                handleMenuClick('tutorial');
              }}
            >
              {tutorial.tutorial_theme}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialsMenu;

import React, { useContext, useEffect, useState } from 'react';
import "./TutorialsSearchView.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { TutorialContext } from '../../Context/TutorialContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { EventRegister } from 'react-native-event-listeners';

const TutorialsSearchView = () => {

  const  all_tutorials = useContext(TutorialContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTutorials, setFilteredTutorials] = useState(all_tutorials);

  // useState(() => setFilteredTutorials(all_tutorials));

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = all_tutorials.filter((tutorial) =>{
      tutorial.tutorial_theme.toLowerCase().includes(query)
    }
    );

    setFilteredTutorials(filtered);
  };

  const selectTutorial = (tutorial) => {
    localStorage.setItem('tutorial', tutorial);
    EventRegister.emit('selectedTutorialEvent', tutorial);
  }

  return (
    <div className="search-tutorial">
      <div className="search-tutorial-panel">
        <div className="circle-design big"></div>
        <div className="search-area label fs-1 fw-bold">What do you want to explore?</div>
        <div className="circle-design small"></div>
        {/* <div className="search-box">
            <button className="btn-search"> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <input type="text"
              className="input-search"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch} />
          </div> */}
      </div>
      {/* <hr /> */}
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

                <img className="tutorial-banner-image" src={tutorial.tutorial_banner} alt={`${tutorial.tutorial_theme} banner`} />
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
import React, { useContext, useState } from 'react';
import "./TutorialsSearchView.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { TutorialContext } from '../../Context/TutorialContext';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

const TutorialsSearchView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTutorials, setFilteredTutorials] = useState([]);
    const {all_tutorials} = useContext(TutorialContext)
    
    useState(() => setFilteredTutorials(all_tutorials));
  
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
  
      const filtered = all_tutorials.filter((tutorial) =>
        tutorial.tutorial_theme.toLowerCase().includes(query)
      );
  
      setFilteredTutorials(filtered);
    };
  
    return (
      <div className="search-tutorial">
        <div className="search-tutorial-panel">
          <div className="search-area-label">What do you want to explore?</div>
          <div className="search-box">
            <button className="btn-search"> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <input type="text"
              className="input-search"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch} />
          </div>
        </div>
        {/* <hr /> */}
        <div className="select-tutorial">
            {filteredTutorials.map((tutorial) => (
              <div className="tutorial-item" key={tutorial.id}>
                <Link
                  to={tutorial.path}
                  className="tutorial-link"
                  onClick={() => localStorage.setItem('activeMenu', 'tutorial')}
                >
                  {tutorial.tutorial_theme}
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  
export default TutorialsSearchView;
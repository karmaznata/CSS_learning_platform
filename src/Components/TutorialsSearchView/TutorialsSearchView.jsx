import React, { useContext, useState } from 'react';
import "./TutorialsSearchView.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { TutorialContext } from '../../Context/TutorialContext';

const TutorialsSearchView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTutorials, setFilteredTutorials] = useState([]);
    const {all_tutorials} = useContext(TutorialContext)
    
    useState(() => setFilteredTutorials(all_tutorials));
  
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
  
      const filtered = all_tutorials.filter((tutorial) =>
        tutorial.title.toLowerCase().includes(query)
      );
  
      setFilteredTutorials(filtered);
    };
  
    return (
      <div className="search-tutorial">
        <div className="search-tutorial-panel">
          <div className="search-area-label">What do you want to explore?</div>
          <div className="search-area">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <hr />
        <div className="select-tutorial">
            {filteredTutorials.map((tutorial) => (
              <div className="tutorial-item" key={tutorial.id}>
                <Link
                  to={tutorial.path}
                  className="tutorial-link"
                  onClick={() => setMenu("tutorial")}
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
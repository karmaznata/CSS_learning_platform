import React, { useState } from 'react';
import "./TutorialsSearchView.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const TutorialsSearchView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTutorials, setFilteredTutorials] = useState([]);
  
    const tutorials = [
      { id: 1, title: 'Flexbox', path: '/tutorial/flexbox' },
      { id: 2, title: 'Grid', path: '/tutorial/grid' },
      { id: 3, title: 'CSS Grid Subgrid', path: '/tutorial/subgrid' },
      { id: 4, title: 'Multi-column Layout', path: '/tutorial/multi-column-layout' },
      { id: 5, title: 'Container Queries', path: '/tutorial/container-queries' },
    ];
  
    // Initialize filteredTutorials with all tutorials
    useState(() => setFilteredTutorials(tutorials));
  
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
  
      const filtered = tutorials.filter((tutorial) =>
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
        <div className="tutorial-dropdown-menu">
          <ul className="nav-menu-dropdown">
            {filteredTutorials.map((tutorial) => (
              <li className="nav-item" key={tutorial.id}>
                <Link
                  to={tutorial.path}
                  className="nav-link-tutorial"
                  onClick={() => setMenu("tutorial")}
                >
                  {tutorial.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  
export default TutorialsSearchView;
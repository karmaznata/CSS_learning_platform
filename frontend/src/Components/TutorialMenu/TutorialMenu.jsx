import React, { useContext, useState } from "react";
import "./TutorialMenu.css";
import { Link, useNavigate } from "react-router-dom";
import { TutorialContext } from "../../Context/TutorialContext";

const TutorialMenu = ({ handleMenuClick }) => {
  const [selectedTutorial, setSelectedTutorial] = useState('');
  const navigate = useNavigate();
  const { all_tutorials } = useContext(TutorialContext);

  return (
    <div className="tutorial-dropdown-menu">
      <ul className="nav-menu-dropdown">
        {all_tutorials.map((tutorial) => (
          <li className="nav-item" key={tutorial.id}>
            <Link
              to={`/tutorial/${tutorial.path}`}
              className="nav-link-tutorial"
              onClick={() => {
                handleMenuClick('tutorial');
                navigate(`/tutorial/${tutorial.path}`);
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

export default TutorialMenu;

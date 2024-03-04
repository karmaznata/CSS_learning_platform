import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AllTutorials from './Pages/AllTutorials';
import LoginSignUp from './Pages/LoginSignUp';
import Quiz from './Pages/Quiz';
import Footer from './Components/Footer/Footer';
import UserAccount from './Pages/UserAccount';
import Tutorial from './Pages/Tutorial/Tutorial';
import { EventRegister } from 'react-native-event-listeners';

function App() {
 
  // State to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [activeMenu, setActiveMenu] = useState('');
  const [selectedTutorial, setSelectedTutorial] = useState('');
  
  // Callback function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    setActiveMenu(localStorage.getItem('activeMenu'))
  }, []); 

  useEffect(() => {
    const eventListener = EventRegister.addEventListener(
        'selectedTutorialEvent',
        data => {
            setSelectedTutorial(data);
            console.log(data);
        },
    );
    return () => {
        EventRegister.removeEventListener('selectedTutorialEvent', eventListener);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} activeMenu={activeMenu}/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tutorials' element={<AllTutorials />} />
          <Route path={`/tutorials/:tutorialTheme`} element={<Tutorial selectedTutorial={selectedTutorial}/>} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/account' element={<UserAccount handleLogout={handleLogout} />} />
          <Route path='/quiz' element={<Quiz />}>
            <Route path=':quizTheme' element={<Quiz />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;

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
import Flexbox from './Pages/Tutorial/Flexbox';
import UserAccount from './Pages/UserAccount';

function App() {
 
  // State to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState();

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

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tutorial' element={<AllTutorials />} />
          <Route path='/tutorial/flexbox' element={<Flexbox theme="flexbox" />} />
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

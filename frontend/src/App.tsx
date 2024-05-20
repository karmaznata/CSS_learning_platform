import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AllTutorials from './Pages/AllTutorials/AllTutorials';
import LoginSignUp from './Pages/LoginSignUp/LoginSignUp';
import Quiz from './Pages/Quiz/Quiz';
import Footer from './Components/Footer/Footer';
import UserAccount from './Pages/UserAccount/UserAccount';
import Tutorial from './Pages/Tutorial/Tutorial';
import { EventRegister } from 'react-native-event-listeners';
import axios from 'axios';
import Protected from './Pages/Protected';
import { User } from './Models/User';
import {API_URL} from './apiConnection.js';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem("login") === "true");
  const [selectedTutorial, setSelectedTutorial] = useState(localStorage.getItem('tutorial'));
  const [user, setUser] = useState<User>();
  const [accountView, setAccountView] = useState('overview-profile-info');

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const eventListener = EventRegister.addEventListener(
      'userIsLoggedInEvent',
      (data) => {
        setIsLoggedIn(data);
      },
    );
    return () => {
      //@ts-ignore
      EventRegister.removeEventListener('userIsLoggedInEvent', eventListener);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/user`);
          setUser(response.data.user);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const eventListener = EventRegister.addEventListener(
      'selectedTutorialEvent',
      (data: string) => {
        setSelectedTutorial(data);
      },
    );
    return () => {
      //@ts-ignore
      EventRegister.removeEventListener('selectedTutorialEvent', eventListener);
    };
  }, []);

  useEffect(() => {
    const eventListener = EventRegister.addEventListener(
      'accoutViewEvent',
      (data: string) => setAccountView(data)
    );
    return () => {
      //@ts-ignore
      EventRegister.removeEventListener('accoutViewEvent', eventListener);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} user={user}/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tutorials' element={<AllTutorials />} />
          <Route path={`/tutorials/:tutorialTheme`} element={<Tutorial selectedTutorial={selectedTutorial} />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/account'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <UserAccount accountView={accountView} />
              </Protected>
            }
          />
          <Route path='/quiz/:quizTheme'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Quiz user={user} />
              </Protected>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

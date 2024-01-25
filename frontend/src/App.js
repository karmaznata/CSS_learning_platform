import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import All_Tutorials from './Pages/All_Tutorials';
import LoginSignUp from './Pages/LoginSignUp';
import Quiz from './Pages/Quiz';
import Footer from './Components/Footer/Footer';
import Flexbox from './Pages/Tutorial/Flexbox';
import UserAccount from './Pages/UserAccount'

function App() {

  return (
    <div className='bg'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tutorial' element={<All_Tutorials />} />
          <Route path='/tutorial/flexbox' element={<Flexbox theme="flexbox" />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/account' element={<UserAccount />} />
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

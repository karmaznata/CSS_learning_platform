import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Tutorial from './Pages/Tutorial';
import LoginSignUp from './Pages/LoginSignUp';
import Quiz from './Pages/Quiz';
import Footer from './Components/Assets/Footer/Footer';

function App() {

  return (
    <div className='bg'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tutorial' element={<Tutorial />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/quiz' element={<Quiz />}>
            <Route path=':quizId' element={<Quiz />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;

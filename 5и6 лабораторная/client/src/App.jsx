import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/FAQ' element={<FAQ />}/>
        <Route path='/contacts' element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import HomePage from './pages/HomePage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './pages/UserProfile';

const App = () => {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




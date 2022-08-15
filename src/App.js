import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;

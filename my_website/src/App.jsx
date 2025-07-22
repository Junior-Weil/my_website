import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gradient from './pages/Gradient';
import HarmonyNav from './components/NavBar';
import './App.css'
import ProjectGallery from './pages/ProjectGallery';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-100 pt-24">
      <Router>
      <HarmonyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/gradient" element={<Gradient />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


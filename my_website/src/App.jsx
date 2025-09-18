import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HarmonyNav from './components/NavBar';
import './App.css';
import ProjectGallery from './pages/ProjectGallery';
import Resume from './pages/Resume';
import Kaggle from './pages/KaggleResults';

function NotFound() {
  return (
    <main style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>Try the <a href="/">home page</a>.</p>
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-100 pt-24">
      <Router >
        <HarmonyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/kaggle" element={<Kaggle />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

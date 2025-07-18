import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gradient from './pages/Gradient';
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gradient" element={<Gradient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


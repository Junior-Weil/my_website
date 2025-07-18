import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gradient from './pages/Gradient';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gradient" element={<Gradient />} />
      </Routes>
    </Router>
  );
}

export default App;


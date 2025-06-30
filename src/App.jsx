import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Flexbox from './pages/Flexbox';
import Grid from './pages/Grid';
import Position from './pages/Position';
import Responsive from './pages/Responsive';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flexbox" element={<Flexbox />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/position" element={<Position />} />
          <Route path="/responsive" element={<Responsive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Flexbox from './pages/Flexbox';
import Position from './pages/Position';
import Responsive from './pages/Responsive';
import BoxModel from './pages/BoxModel';
import './styles/index.css';

function App() {
  return (
    <Router basename="/test-css">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flexbox" element={<Flexbox />} />
          <Route path="/position" element={<Position />} />
          <Route path="/boxModel" element={<BoxModel />} />
          <Route path="/responsive" element={<Responsive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

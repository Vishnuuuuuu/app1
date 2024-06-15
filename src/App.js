import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CapitalInterestPage from './components/CapitalInterestPage';
import LandPricePage from './components/LandPricePage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Capital Interest Calculator</Link>
            </li>
            <li>
              <Link to="/land-price">Land Price Calculator</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<CapitalInterestPage />} />
          <Route path="/land-price" element={<LandPricePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

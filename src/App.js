import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Components/calculator';
import Home from './Components/pages/Home';
import Quote from './Components/pages/Quote';
import NavBar from './Components/pages/NavBar';

const App = () => (
  <Router>
    <NavBar />
    <div className="calculator-container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calculator" exact element={<Calculator />} />
        <Route path="/quote" exact element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;

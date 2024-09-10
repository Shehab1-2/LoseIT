import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App"> 
        <Routes>

          <Route path="/" element={<Home/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
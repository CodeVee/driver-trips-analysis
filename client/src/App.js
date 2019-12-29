import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Driverspage from './Pages/Driverspage/Driverspage';
import './App.css';

import Homepage from './Pages/Homepage/Homepage';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Switch />
          <Homepage />
        </Router>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';

import Homepage from './Pages/Homepage/Homepage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Homepage />
      </Router>
    </div>
  );
};

export default App;

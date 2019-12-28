import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './Pages/Homepage/Homepage';

const App = () => {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Driverspage from './Pages/Driverspage/Driverspage';
import Tripspage from './Pages/Tripspage/Tripspage';
import './App.css';

import Homepage from './Pages/Homepage/Homepage';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/drivers" component={Driverspage} />
            <Route exact path="/drivers/:driverID" component={Driverspage} />
            <Route exact path="/trip" component={Tripspage} />
            <Route
              exact
              path="/trip/:driverName/:tripID"
              component={Tripspage}
            />
          </Switch>
          <Homepage />
        </Router>
      </div>
    </div>
  );
};

export default App;

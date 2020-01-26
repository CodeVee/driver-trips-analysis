import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Driverspage from './Pages/Driverspage/Driverspage';
import Tripspage from './Pages/Tripspage/Tripspage';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import TripsState from './Context/Trips/TripsState';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <TripsState>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/drivers" component={Driverspage} />
              <Route exact path="/drivers/:driverID" component={Driverspage} />
              <Route exact path="/trip" component={Tripspage} />
              <Route
                exact
                path="/trip/:driverName/:tripID"
                component={Tripspage}
              />
            </Switch>
          </Router>
        </TripsState>
      </div>
    </div>
  );
};

export default App;

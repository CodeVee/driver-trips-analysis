import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Homepage.css';
import Header from '../../Components/Header/Header';
import DriverCards from '../../Components/DriverCards/DriverCards';
import Driverspage from '../Driverspage/Driverspage';
import Tripspage from '../Tripspage/Tripspage';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={DriverCards} />
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
      </div>
    </div>
  );
};

export default Homepage;

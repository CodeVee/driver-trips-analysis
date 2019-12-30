import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Homepage.css';
import Header from '../../Components/Header/Header';
import DriverCards from '../../Components/DriverCards/DriverCards';
import Tripspage from '../Tripspage/Tripspage';

const Homepage = () => {
  return (
    <div className="homepage">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={DriverCards} />
          <Route exact path="/trip/:driverName/:tripID" component={Tripspage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Homepage;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Homepage.css';
import DriverCards from '../../Components/DriverCards/DriverCards';

const Homepage = () => {
  return (
    <div className="homepage">
      <Route exact path="/" component={DriverCards} />
    </div>
  );
};

export default Homepage;

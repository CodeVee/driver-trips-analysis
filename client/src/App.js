import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/drivers/:driverID" element={<Driverspage />} />
              <Route path="/drivers" element={<Driverspage />} />
              <Route path="/trip/:driverName/:tripID" element={<Tripspage />} />
              <Route path="/trip" element={<Tripspage />} />
            </Routes>
          </Router>
        </TripsState>
      </div>
    </div>
  );
};

export default App;

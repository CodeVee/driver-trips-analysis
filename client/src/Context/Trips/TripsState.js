import React, { useReducer } from 'react';
import TripsContext from './tripsContext';
import TripsReducer from './tripsReducer';
import { GET_TRIPS, GET_DRIVERS, GET_STATS } from '../types';

const TripsState = props => {
  const initialState = {
    trips: [],
    drivers: [],
    stats: [],
    topDrivers: [],
  };

  const [state, dispatch] = useReducer(TripsReducer, initialState);

  const getTrips = async () => {
    const trips = await fetch('/api/trips')
      .then(data => data.json())
      .then(data => data.data);

    dispatch({
      type: GET_TRIPS,
      payload: trips,
    });
  };

  const getDrivers = async () => {
    const drivers = await fetch('/api/drivers')
      .then(data => data.json())
      .then(data => data.data);

    dispatch({
      type: GET_DRIVERS,
      payload: drivers,
    });
  };

  const getStats = async () => {
    const stats = await fetch('/api/stats')
      .then(data => data.json())
      .then(data => data.data);

    const values = [
      stats.cashBilledTotal,
      stats.nonCashBilledTotal,
      stats.billedTotal,
    ];
    dispatch({
      type: GET_STATS,
      payload: values,
    });
  };

  return (
    <TripsContext.Provider
      value={{
        trips: state.trips,
        drivers: state.drivers,
        stats: state.stats,
        getTrips,
        getDrivers,
        getStats,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};

export default TripsState;

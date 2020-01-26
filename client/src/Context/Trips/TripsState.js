import React, { useReducer } from 'react';
import TripsContext from './tripsContext';
import TripsReducer from './tripsReducer';
import { GET_TRIPS, GET_DRIVERS, GET_STATS } from '../types';

const TripsState = props => {
  const initialState = {
    trips: [],
    drivers: [],
    stats: {},
  };

  const [state, dispatch] = useReducer(TripsReducer, initialState);

  const getTrips = async () => {
    const trips = await fetch('/api/drivers')
      .then(data => data.json())
      .then(data => data.data);

    dispatch({
      type: GET_TRIPS,
      payload: trips,
    });
  };

  return (
    <TripsContext.Provider
      value={{
        trips: state.trips,
        drivers: state.drivers,
        stats: state.stats,
        getTrips,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};

export default TripsState;

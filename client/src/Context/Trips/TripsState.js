import React, { useReducer } from 'react';
import TripsContext from './tripsContext';
import TripsReducer from './tripsReducer';
import { GET_TRIPS, GET_DRIVERS, GET_STATS } from '../types';

const TripsState = prop => {
  const initialState = {
    trips: [],
    drivers: [],
    stats: {},
  };

  const [state, dispatch] = useReducer(TripsReducer, initialState);
};

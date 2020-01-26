import { GET_DRIVERS, GET_TRIPS, GET_STATS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

import { GET_DRIVERS, GET_TRIPS, GET_STATS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload,
      };
    default:
      return state;
  }
};

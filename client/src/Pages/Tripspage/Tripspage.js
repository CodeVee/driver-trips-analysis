import React, { useState, useEffect } from 'react';
import './Tripspage.css';

const Tripspage = ({ match }) => {
  const [trip, setTrip] = useState([]);

  const { params } = match;
  useEffect(() => {
    if (params.tripID) {
      fetch(`/api/trip/${params.tripID}`)
        .then(data => data.json())
        .then(data => setTrip(data.data));
    }
  }, [params]);

  const lenTrip = trip.length;

  return (
    <div className="trips-table">
      <p>TRIP DETAILS</p>
      <p>
        <span>Driver: </span>
        {params.driverName}
      </p>
      <p>
        <span>Passenger: </span>
        {lenTrip ? trip[0].user.name : ''}
      </p>
      <p>Amount: &#8358; {lenTrip ? trip[0].billedAmount : ''}</p>
      <p>PickUp: {lenTrip ? trip[0].pickup.address : ''}</p>
      <p>DropOff: {lenTrip ? trip[0].destination.address : ''}</p>
      <p>
        Payment:{' '}
        {lenTrip ? (trip[0].isCash ? 'Card Payment' : 'Cash Payment') : ''}
      </p>
      <p>Date: {lenTrip ? trip[0].created.slice(0, 10) : ''}</p>
    </div>
  );
};

export default Tripspage;

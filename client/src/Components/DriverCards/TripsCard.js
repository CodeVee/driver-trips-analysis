import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TripsContext from '../../Context/Trips/tripsContext';

const TripsCard = () => {
  const tripsContext = useContext(TripsContext);
  useEffect(() => {
    tripsContext.getTrips();
    tripsContext.getDrivers();
    // eslint-disable-next-line
  }, []);

  const driverNames = tripsContext.drivers.reduce((acc, driver) => {
    if (!acc[driver.driverID]) {
      acc[driver.driverID] = { name: driver.name };
    }
    return acc;
  }, {});

  const tableRows = tripsContext.trips.map((trip, index) => {
    const form = {};
    try {
      form.driver = driverNames[trip.driverID].name;
      form.passenger = trip.user.name;
      form.amount = trip.billedAmount;
    } catch {
      form.driver = 'Unknown Driver';
      form.passenger = trip.user.name;
      form.amount = trip.billedAmount;
    }
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{form.driver}</td>
        <td>{form.passenger}</td>
        <td>{form.amount}</td>
        <td>
          {<Link to={`/trip/${form.driver}/${trip.tripID}`}> Details</Link>}
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <section className="trips-card">
        <p>TRIPS DETAILS</p>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Driver</th>
              <th>User</th>
              <th>Amount (&#8358;)</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody className="trips-body">
            {tableRows.map(dataRow => {
              return dataRow;
            })}
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default TripsCard;

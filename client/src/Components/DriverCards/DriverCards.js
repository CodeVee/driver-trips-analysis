import React, { useEffect, useContext } from 'react';
import './DriverCards.css';
import TopCards from './TopCards';
import GraphCard from './GraphCard';
import TripsCard from './TripsCard';
import TripsContext from '../../Context/Trips/tripsContext';

const DriverCards = () => {
  const tripsContext = useContext(TripsContext);

  useEffect(() => {
    tripsContext.getDrivers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    tripsContext.getTrips();
    // eslint-disable-next-line
  }, []);

  const trips = tripsContext.trips;
  const drivers = tripsContext.drivers;

  const cleaner = amount => {
    if (typeof amount == 'string') {
      amount = Number(amount.replace(',', ''));
    }
    return amount;
  };

  let earnAmount = 0;
  let rideNumber = 0;
  let topDrivers = ['', ''];

  const analysis = trips.reduce((acc, trip) => {
    const amount = cleaner(trip.billedAmount);

    if (!acc[trip.driverID]) {
      acc[trip.driverID] = {
        trips: 0,
        cash: 0,
        card: 0,
        earnings: 0,
      };
    }

    acc[trip.driverID].trips++;
    acc[trip.driverID].earnings += amount;

    if (trip.isCash) {
      acc[trip.driverID].cash++;
    } else {
      acc[trip.driverID].card++;
    }

    if (acc[trip.driverID].trips >= rideNumber) {
      rideNumber = acc[trip.driverID].trips;
      topDrivers[0] = trip.driverID;
    }

    if (acc[trip.driverID].earnings >= earnAmount) {
      earnAmount = acc[trip.driverID].earnings;
      topDrivers[1] = trip.driverID;
    }
    return acc;
  }, {});

  const driverNames = drivers.reduce((acc, driver) => {
    if (!acc[driver.driverID]) {
      acc[driver.driverID] = { name: driver.name };
    }
    return acc;
  }, {});

  const topDriversDetails = topDrivers.map(driver => {
    let obj = {};
    try {
      obj.name = driverNames[driver].name;
      obj.cash = analysis[driver].cash;
      obj.card = analysis[driver].card;
      obj.trip = analysis[driver].trips;
      obj.amount = analysis[driver].earnings;
    } catch {
      obj = {
        name: '',
        cash: 0,
        card: 0,
        trip: 0,
        amount: 0,
      };
    }

    return obj;
  });

  return (
    <main className="main-cards">
      {trips.length && (
        <>
          <TopCards details={topDriversDetails} />
          <GraphCard />
          <TripsCard />
        </>
      )}
    </main>
  );
};

export default DriverCards;

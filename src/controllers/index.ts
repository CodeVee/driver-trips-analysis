const drivers = require('../../data/drivers.json');
const trips = require('../../data/trips.json');
const vehicles = require('../../data/vehicles.json');

export function getTrips() {
  return trips;
}

export function getDrivers() {
  return Object.values(drivers);
}

export function getVehicles() {
  return vehicles;
}

export function getVehiclesByIDs(vehicleIDs: string[]) {
  return vehicleIDs.map(vehicleID => {
    return getVehicle(vehicleID);
  });
}

export function getTrip(tripID: string) {
  const trip = trips.filter((trip: any) => trip.tripID === tripID);

  if (!trip.length) {
    throw new Error('Trip not found');
  }

  return trip;
}

export function getDriver(driverID: string) {
  const driver = drivers[driverID];

  if (!driver) {
    throw new Error('Driver not found');
  }

  return driver;
}

export function getVehicle(vehicleID: string) {
  const vehicle = vehicles[vehicleID];

  if (!vehicle) {
    throw new Error('Vehicle not found');
  }

  return { ...vehicle, vehicleID };
}

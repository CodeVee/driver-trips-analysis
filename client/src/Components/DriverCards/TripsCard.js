import React, { Fragment } from 'react';

const TripsCard = ({ tableRow }) => {
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
            {tableRow.map(dataRow => {
              return dataRow;
            })}
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default TripsCard;

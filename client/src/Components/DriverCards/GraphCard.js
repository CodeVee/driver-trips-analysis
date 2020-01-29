import React, { Fragment, useEffect, useContext } from 'react';
import MainChart from '../Charts/MainChart';
import TripsContext from '../../Context/Trips/tripsContext';

const GraphCard = () => {
  const tripsContext = useContext(TripsContext);

  useEffect(() => {
    tripsContext.getStats();
    // eslint-disable-next-line
  }, []);

  const length = tripsContext.stats.length;
  const values = tripsContext.stats;
  return (
    <Fragment>
      <section className="graph-card">
        <div className="main-graph">
          {length !== 0 && <MainChart values={values} />}
        </div>
      </section>
    </Fragment>
  );
};

export default GraphCard;

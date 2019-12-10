import React, { Fragment, useState, useEffect } from 'react';
import RightChart from '../Charts/RightChart';

const GraphCard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch('/api/stats')
      .then(data => {
        return data.json();
      })
      .then(data => {
        setStats(data.data);
      });
  }, []);

  const length = Object.keys(stats).length;
  const values =
    length !== 0
      ? [stats.cashBilledTotal, stats.nonCashBilledTotal, stats.billedTotal]
      : [];

  return (
    <Fragment>
      <section className="graph-card">
        <div className="main-graph">
          {length !== 0 && <RightChart values={values} />}
        </div>
      </section>
    </Fragment>
  );
};

export default GraphCard;

import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const MainChart = ({ values }) => {
  const [options] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Cash', 'Card', 'Total'],
    },
    fill: {
      colors: ['#094a89'],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Type of Payment Used',
      align: 'center',
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: '15px',
      },
    },
  });

  const [series] = useState([
    {
      name: 'Mode Of Payment',
      data: values,
    },
  ]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            className="desktop-chart"
            options={options}
            series={series}
            type="bar"
            width="750"
          />
          <Chart
            className="tablet-chart"
            options={options}
            series={series}
            type="bar"
            width="480"
          />
          <Chart
            className="mobile-chart"
            options={options}
            series={series}
            type="bar"
            width="30"
          />
        </div>
      </div>
    </div>
  );
};

export default MainChart;

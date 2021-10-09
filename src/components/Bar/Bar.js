import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const Bar = ({ data, categories, backgroundColor }) => {
  useEffect(() => {
    Highcharts.chart('basic-bar', {
      chart: {
        type: 'column',
        backgroundColor,
      },
      colors: ['#FBD94F', '#0170F3'],
      title: {
        text: 'Yearly Breakup',
        style: { color: '#0170F3', fontWeight: 900, fontSize: '20px' },
      },
      xAxis: {
        categories,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount',
        },
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true,
      },
      plotOptions: {
        column: {
          stacking: 'percent',
        },
      },
      series: data,
    });
  }, [data]);

  return (
    <div id="basic-bar"></div>
  );
};

export default Bar;

import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/variable-pie';

accessibility(Highcharts);
const Pie = ({ interest = 0, principal = 0, backgroundColor }) => {
  console.log(interest, principal, backgroundColor, "##");
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor,
      },
      colors: ['#FBD94F', '#0170F3'],
      legend: {
        align: 'center',
        layout: 'horizontal',
      },
      title: {
        text: 'Total Payment Break up',
        style: { color: '#0170F3', fontWeight: 900, fontSize: '20px' },
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'Data',
          colorByPoint: true,
          data: [
            {
              name: 'Principal',
              y: principal,
            },
            {
              name: 'Interest',
              y: interest,
            },
          ],
        },
      ],
    });
  }, [interest, interest, backgroundColor]);

  return (
    <div className="chart" id="container" />
  );
};

export default Pie;

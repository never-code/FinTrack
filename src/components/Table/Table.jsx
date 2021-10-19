import React from 'react';
import moment from 'moment';
import './Table.css';
import { formatCurrency } from '../../utils/helper';

const Table = ({ data }) => {
  const getTableData = () => Object.keys(data).map((year) => {
    let monthData = [];
    let yearData = [];
    monthData = data[year].map(({
      principle, interest, amount, month, installmentNumber
    }) => {
      if (yearData.length === 0) {
        yearData.push({
          principle, interest, amount, month: moment(month).format('YYYY'),
        });
      } else {
        yearData[0] = {
          ...yearData[0],
          principle: yearData[0].principle + principle,
          interest: yearData[0].interest + interest,
          month: moment(month).format('YYYY'),
          amount,
        };
      }
      return (
        <tr key={amount}>
        <td>{installmentNumber}</td>
          <td>{month}</td>
          <td>{formatCurrency(principle)}</td>
          <td>{formatCurrency(interest)}</td>
          <td>{formatCurrency(principle + interest)}</td>
          <td>{formatCurrency(amount < 0 ? 0 : amount)}</td>
        </tr>
      );
    });
    yearData = yearData.map(({
      principle, interest, amount, month,
    }) => (
      <tr key={amount} className="year">
        <td></td>
        <td>{month}</td>
        <td>{formatCurrency(principle)}</td>
        <td>{formatCurrency(interest)}</td>
        <td>{formatCurrency(principle + interest)}</td>
        <td>{formatCurrency(amount < 0 ? 0 : amount)}</td>
      </tr>
    ));
    monthData = [...monthData, yearData];
    return monthData;
  });

  return (

    <table>
      <thead>
        <tr>
          <th>Installment No</th>
          <th>Month</th>
          <th>Principle</th>
          <th>Interest</th>
          <th>Principle + Interest</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {getTableData()}
      </tbody>
    </table>
  );
};
export default Table;

import React from 'react';
import moment from 'moment';
import './Table.scss';
import { formatCurrency } from '../../utils/helper';

const Table = ({ data }) => {
  const getTableData = () => Object.keys(data).map((year) => {
    let monthData = [];
    let yearData = [];
    monthData = data[year].map(({
      principal, interest, amount, month, installmentNumber
    }) => {
      if (yearData.length === 0) {
        yearData.push({
          principal, interest, amount, month: moment(month).format('YYYY'),
        });
      } else {
        yearData[0] = {
          ...yearData[0],
          principal: yearData[0].principal + principal,
          interest: yearData[0].interest + interest,
          month: moment(month).format('YYYY'),
          amount,
        };
      }
      return (
        <tr key={amount}>
        <td>{installmentNumber}</td>
          <td>{month}</td>
          <td>{formatCurrency(principal)}</td>
          <td>{formatCurrency(interest)}</td>
          <td>{formatCurrency(principal + interest)}</td>
          <td>{formatCurrency(amount < 0 ? 0 : amount)}</td>
        </tr>
      );
    });
    yearData = yearData.map(({
      principal, interest, amount, month,
    }) => (
      <tr key={amount} className="year">
        <td></td>
        <td>{month}</td>
        <td>{formatCurrency(principal)}</td>
        <td>{formatCurrency(interest)}</td>
        <td>{formatCurrency(principal + interest)}</td>
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
          <th>Instl No</th>
          <th>Month</th>
          <th>Principal</th>
          <th>Interest</th>
          <th>Principal + Interest</th>
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

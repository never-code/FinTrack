import React, { useState } from 'react';
import './master.css';
import Slider from '../Slider';
import Currency from '../Currency';
import Title from '../../HOC/Title';
import Section from '../../HOC/Section';
import Card from '../Card';
import Pie from '../PieChart';
import ErrorBoundary from '../../HOC/ErrorBoubdray';
import { SECTIONS, CARDS } from './constants';
import Bar from '../Bar';

import {
  debounce, getEMIAndInteres, formatCurrency, monthlyBreakup, getBarData,
} from '../../utils/helper';
import BreakUp from '../BreakUp';

const initialState = {
  loanAmount: 10,
  interest: 10,
  tenure: 10,
  currency: localStorage.getItem('currency'),
};
const MasterContainer = () => {
  const [state, setState] = useState(initialState);
  const handleValueChange = (value, key) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const { loanAmount, interest, tenure } = state;
  const finalResult = getEMIAndInteres(
    loanAmount * 10000, // loan amount is in lakhs
    interest,
    tenure,
  );
  const getSections = () => SECTIONS.map(({
    title,
    subTitle,
    key,
    min,
    max,
    step,
    unit,
  }) => (
    <ErrorBoundary name={title} key={title}>
      <Section tabIndex="0">
      <Title
        title={title}
        subTitle={subTitle}
      >
        <Slider
          defaultValue={state[key]}
          min={min}
          max={max}
          step={step}
          getValue={debounce(
            (value) => handleValueChange(value, key),
            500,
          )}
          name={key}
          unit={unit}
        />
      </Title>
    </Section>
    </ErrorBoundary>
  ));

  const getCards = () => CARDS.map(({
    title,
    subTitle,
    key,
    className,
  }) => (
    <div className="items" key={title}>
      <ErrorBoundary title={title}>
        <Card
          title={title}
          subTitle={subTitle}
          value={formatCurrency(finalResult[key])}
          className={className}
        />
      </ErrorBoundary>
    </div>
  ));

  const currencyChange = (currency) => {
    setState({
      ...state,
      currency,
    });
  };

  const { totalInterest, totalPayebleAmount, loanEMI } = finalResult;
  let totalInterestPercentage = 0;
  let totalPrincipalPercentage = 0;
  let monthlyBreakupData = 0;
  if (!isNaN(totalInterest) || !isNaN(totalPayebleAmount)) {
    totalInterestPercentage = totalInterest/totalPayebleAmount * 100;
    totalPrincipalPercentage = 100 - totalInterestPercentage;
    monthlyBreakupData = monthlyBreakup(loanAmount * 10000, loanEMI, interest);
  }
  const { data, categories } = getBarData(monthlyBreakupData);

  return (
    <div className="master-container">
      <main className="main">
        <Currency change={currencyChange} />
        <div className="left-section">
          {getSections()}
        </div>
        <div className="right-section">
          {getCards()}
        </div>
      </main>

    {/* GRAPHICAL BREAK UP */}

      <div className="breakup">
        <div className="title">
          <h2 className="background double">
            <span> Graphical EMI Breakup </span>
          </h2>
        </div>
        <div className="left">
          <Bar data={data} categories={categories} />
        </div>
        <div className="right">
          <Pie
            interest={totalInterestPercentage}
            principal={totalPrincipalPercentage}
          />
        </div>
      </div>

      {/* MONTHLY TABBLE BREAKUP */}

      <BreakUp
        title="Monthly EMI Breakup"
        data={monthlyBreakupData}
      />
    </div>
  );
};
export default MasterContainer;

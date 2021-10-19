import moment from 'moment';

export const debounce = function (func, delay) {
  let timer;
  return function (...args) {
    const that = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(that, args);
    }, delay);
  };
};

export const memoize = (func) => {
  const cache = [];
  return function (...args) {
    const key = JSON.stringify({ ...args });
    // if cache exceed limit of 100 remove first key and insert new one
    if (Object.keys(cache).length > 100) delete cache[Object.keys(cache)[0]];
    if (cache[key] === undefined) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
};

export const calculateInterest = (loanAmount, interest, tenure) => {
  const months = tenure * 12;
  const interestPerYear = interest / 100 / 12;
  const power = (1 + (interestPerYear)) ** months;
  let loanEMI = loanAmount * (interestPerYear) * power / (power - 1);
  let totalPayebleAmount = loanEMI * months;
  let totalInterest = totalPayebleAmount - loanAmount;
  loanEMI = Math.round(loanEMI);
  totalPayebleAmount = Math.round(totalPayebleAmount);
  totalInterest = Math.round(totalInterest);
  return {
    loanEMI,
    totalPayebleAmount,
    totalInterest,
  };
};

export const getEMIAndInteres = memoize(calculateInterest);

const CURRENCY_CONTRY_MAPPING = {
  INR: 'en-IN',
  USD: 'en-US',
  EUR: 'en-EU',
  CNY: 'en-CH',
};

export const formatCurrency = (amount, fraction = 2) => {
  const currency = localStorage.getItem('currency') || 'INR';
  return new Intl.NumberFormat(CURRENCY_CONTRY_MAPPING[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: fraction,
  }).format(amount);
};
let installmentNumber = 1;
export const Breakup = (amount, emi, interestRate, arr = [], startMonth = 0) => {
  if (!amount || !emi || !interestRate) return [];
  const principle = Math.ceil(emi - ((interestRate/12)/100*amount));
  const interest = Math.ceil(emi - principle);
  const month = moment().add(startMonth, 'M').format('MMM, YYYY');
  const year = moment(month).format('YYYY');
  amount = Math.ceil(amount - principle);
  if (arr[year] === undefined) {
    arr[year] = [];
  }
  arr[year].push({
    principle, interest, amount, month, installmentNumber: installmentNumber++
  });
  if (amount <= 0) {
    console.log(arr, "final")
    installmentNumber = 1;
    return arr;
  }
  return Breakup(amount, emi, interestRate, arr, ++startMonth);
};

export const monthlyBreakup = memoize(Breakup);

export const getBarData = (breakup) => {
  const interest = [];
  const principle = [];
  const categories = [];
  const data = [];
  let count = 1;
  Object.keys(breakup).map(year => {
    let principleTotal = 0;
    let interestTotal = 0;
    breakup[year].map(({ principle, interest }) => {
      principleTotal += principle;
      interestTotal += interest;
    });
    categories.push(`Year ${year}`);
    interest.push(interestTotal);
    principle.push(principleTotal);
  });
  data.push(
    {
      name: 'Principle',
      data: principle,
    },
    {
      name: 'Interest',
      data: interest,
    },
    {
      name: "No",
      data: count++
    }
  );
  return { data, categories };
};

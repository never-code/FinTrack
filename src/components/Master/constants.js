import STRING from '../../utils/strings';

export const SECTIONS = [
  {
    title: `${STRING.LOAN} ${STRING.AMOUNT}`,
    subTitle: 'In Lakhs',
    key: 'loanAmount',
    min: 1,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    title: `${STRING.INTEREST} ${STRING.RATE}`,
    subTitle: '%',
    key: 'interest',
    min: 1,
    max: 20,
    step: 0.25,
    unit: '%',
  },
  {
    title: `${STRING.LOAN} ${STRING.TENURE}`,
    subTitle: 'years',
    key: 'tenure',
    min: 1,
    max: 30,
    step: 0.5,
    unit: '',
  },
];

export const CARDS = [
  {
    title: `${STRING.LOAN} ${STRING.EMI}`,
    subTitle: '',
    key: 'loanEMI',
    className: 'emi',
  },
  {
    title: STRING.TOTALINTRATE,
    subTitle: '',
    key: 'totalInterest',
    className: 'interest',
  },
  {
    title: STRING.TOTAKPAYMENT,
    subTitle: `(${STRING.PRINCIPAL} + ${STRING.INTEREST})`,
    key: 'totalPayebleAmount',
    className: 'total',
  },
];

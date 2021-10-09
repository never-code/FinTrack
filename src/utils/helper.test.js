import { calculateInterest, formatCurrency, Breakup, groupYearly } from './helper';

test('calculateInterest should return object', () => {
  expect(calculateInterest(1123, 10, 10)).toBeInstanceOf(Object);
});

test('calculateInterest should containe 3 keys', () => {
  expect(calculateInterest(10123, 12, 20)).toEqual({
    loanEMI: 111, totalInterest: 16628, totalPayebleAmount: 26751,
  });
});

test('should return loanEMI, totalPayebleAmount, totalInterest,', () => {
  expect(calculateInterest(10, 10, 10)).toStrictEqual({
    loanEMI: 0, totalInterest: 6, totalPayebleAmount: 16,
  });
});

test('formatCurrency should return null', () => {
  expect(formatCurrency()).toStrictEqual('₹NaN');
});

test('formatCurrency should return formated number', () => {
  expect(formatCurrency(100, 2)).toStrictEqual('₹100.00');
});

test('Breakup should return empty array', () => {
  expect(Breakup()).toEqual([]);
});

test('Breakup should return instance of object', () => {
  expect(Breakup(100000, 8380, 1)).toBeInstanceOf(Object);
});

test('groupYearly should return empty array', () => {
  expect(groupYearly([])).toEqual([]);
});

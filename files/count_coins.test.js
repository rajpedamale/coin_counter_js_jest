'use strict';

const count_coins = require('./count_coins');

const coinsList = [25, 10, 5, 1];

describe('Count Coins', () => {
  it('should return a number', () => {
    expect(typeof count_coins(1, coinsList)).toEqual('number');
  });

  it('should return 1 for 1 cent', () => {
    expect(count_coins(1, coinsList)).toEqual(1);
  });

  it('should return 2 for 5 cents', () => {
    expect(count_coins(5, coinsList)).toEqual(2);
  });

  it('should return 242 for 100 cents', () => {
    expect(count_coins(100, coinsList)).toEqual(242);
  });
});

'use strict';

const count_coins = require('./count_coins');

const coinsList = [25, 10, 5, 1];

describe('Count Coins', () => {
  it('should return a number', () => {
    expect(typeof count_coins(1)).toEqual('number');
  });

  it('should return 1 for 1 cent', () => {
    expect(count_coins(1)).toEqual(1);
  });
});

'use strict';

function count_coins(cents, coinsList) {
  coinsList.sort((a, b) => b - a);
  const coinsForCents = new Array(cents + 1).fill(0);
  coinsForCents[0] = 1;
  coinsList.forEach(coin => {
    coinsForCents.forEach((coinsForCent, index) => {
      coinsForCents[index] += index < coin
        ? 0
        : coinsForCents[index - coin]
    });
  });
  return coinsForCents.pop();
}

module.exports = count_coins;

// Leetcode problem no. 121

// My solution with a bit of help and hint
var maxProfit = function (prices) {
  let maxProfitSoFar = 0;
  let minPrice = Infinity;
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfitSoFar) {
      maxProfitSoFar = prices[i] - minPrice;
    }
  }

  return maxProfitSoFar;
};

// My another version - just experiementing from opp side
var maxProfit = function (prices) {
  let maxProfitSoFar = 0;
  const n = prices.length;
  let maxPrice = prices[n - 1];

  for (let i = n - 1; i >= 0; i--) {
    if (maxPrice < prices[i]) {
      maxPrice = prices[i];
    } else if (maxPrice - prices[i] > maxProfitSoFar) {
      maxProfitSoFar = maxPrice - prices[i];
    }
  }

  return maxProfitSoFar;
};

// My brute force solution
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfitSoFar = 0;
  const n = prices.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[j] - prices[i] > maxProfitSoFar) {
        maxProfitSoFar = prices[j] - prices[i];
      }
    }
  }
  return maxProfitSoFar;
};

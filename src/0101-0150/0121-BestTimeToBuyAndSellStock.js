//-----------------------------------------------------------------------------
// Runtime: 80ms
// Memory Usage: 39.4 MB
// Link: https://leetcode.com/submissions/detail/385798663/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} prices
     * @return {number}
     */
    var maxProfit = function(prices) {
        let min = Number.MAX_SAFE_INTEGER, profit = 0;
        for (let price of prices) {
            if (price < min) {
                min = price;
            } else {
                profit = Math.max(profit, price - min);
            }
        }
        return profit;
    };

    return {
        maxProfit: maxProfit
    };
};

module.exports = solution();

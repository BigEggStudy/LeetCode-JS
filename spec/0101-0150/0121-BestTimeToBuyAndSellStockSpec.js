const solution = require('../../src/0101-0150/0121-BestTimeToBuyAndSellStock');

describe('Best Time To Buy And Sell Stock Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [ 7, 1, 5, 3, 6, 4 ];

        let result = solution.maxProfit(input1);

        expect(result).toEqual(5);
    });

    it('test2', function() {
        const input1 = [ 7, 6, 4, 3, 1 ];

        let result = solution.maxProfit(input1);

        expect(result).toEqual(0);
    });
});

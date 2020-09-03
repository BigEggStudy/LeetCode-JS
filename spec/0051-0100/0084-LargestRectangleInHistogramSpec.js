const solution = require('../../src/0051-0100/0084-LargestRectangleInHistogram');

describe('Largest Rectangle In Histogram Tests', function() {
    'use strict';

    it('test 1', function() {
        const input1 = [ 2, 1, 5, 6, 2, 3 ];

        var result = solution.largestRectangleArea(input1);

        expect(result).toEqual(10);
    });

    it('test Ordered', function() {
        const input1 = [ 1, 2, 3, 4, 5, 6 ];

        var result = solution.largestRectangleArea(input1);

        expect(result).toEqual(12);
    });

    it('test ReverseOrdered', function() {
        const input1 = [ 6, 5, 4, 3, 2, 1 ];

        var result = solution.largestRectangleArea(input1);

        expect(result).toEqual(12);
    });

    it('test AllTheSame', function() {
        const input1 = [ 3, 3, 3, 3, 3, 3 ];

        var result = solution.largestRectangleArea(input1);

        expect(result).toEqual(18);
    });

    it('test 2', function() {
        const input1 = [ 1, 2, 2 ];

        var result = solution.largestRectangleArea(input1);

        expect(result).toEqual(4);
    });
});

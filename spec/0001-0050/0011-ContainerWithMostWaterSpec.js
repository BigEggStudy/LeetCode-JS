const solution = require('../../src/0001-0050/0011-ContainerWithMostWater');

describe('Container With Most Water Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [ 1, 1 ];

        let result = solution.maxArea(input1);

        expect(result).toEqual(1);
    });

    it('test2', function() {
        const input1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

        let result = solution.maxArea(input1);

        expect(result).toEqual(20);
    });

    it('test3', function() {
        const input1 = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];

        let result = solution.maxArea(input1);

        expect(result).toEqual(20);
    });

    it('test4', function() {
        const input1 = [ 1, 8, 6, 2, 5, 4, 8, 3, 7 ];

        let result = solution.maxArea(input1);

        expect(result).toEqual(49);
    });
});

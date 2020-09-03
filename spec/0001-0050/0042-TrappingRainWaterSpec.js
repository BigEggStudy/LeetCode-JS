let solution = require('../../src/0001-0050/0042-TrappingRainWater');

describe('Trapping Rain Water Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];

        let result = solution.trap(input1);

        expect(result).toEqual(6);
    });

    it('test2', function() {
        const input1 = [ 2, 0, 2 ];

        let result = solution.trap(input1);

        expect(result).toEqual(2);
    });

    it('test3', function() {
        const input1 = [ 2, 1, 0, 1, 0, 1, 0, 1, 0, 1 ];

        let result = solution.trap(input1);

        expect(result).toEqual(4);
    });

    it('test4', function() {
        const input1 = [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 2 ];

        let result = solution.trap(input1);

        expect(result).toEqual(4);
    });

    it('test5', function() {
        const input1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];

        let result = solution.trap(input1);

        expect(result).toEqual(0);
    });

    it('test6', function() {
        const input1 = [ 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];

        let result = solution.trap(input1);

        expect(result).toEqual(0);
    });

    it('test7', function() {
        const input1 = [];

        let result = solution.trap(input1);

        expect(result).toEqual(0);
    });
});

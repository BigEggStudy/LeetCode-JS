let solution = require('../../src/0001-0050/0015-3Sum');

describe('3Sum Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [ -1, 0, 1, 2, -1, -4 ];

        let result = solution.threeSum(input1);

        expect(result).toEqual([
            [ -1, -1, 2 ],
            [ -1, 0, 1 ]
        ]);
    });

    it('test2', function() {
        const input1 = [ 1, 0, 1, 2, 1, 4 ];

        let result = solution.threeSum(input1);

        expect(result).toEqual([]);
    });

    it('test3', function() {
        const input1 = [ -1, 0, -1, -2, -1, -4 ];

        let result = solution.threeSum(input1);

        expect(result).toEqual([]);
    });

    it('test4', function() {
        const input1 = [];

        let result = solution.threeSum(input1);

        expect(result).toEqual([]);
    });

    it('test5', function() {
        const input1 = [ -1 ];
        let result = solution.threeSum(input1);
        expect(result).toEqual([]);

        const input2 = [ -1, 0 ];
        result = solution.threeSum(input2);
        expect(result).toEqual([]);
    });

    it('test6', function() {
        const input1 = [ 0, 0, 0, 0, 0, 0 ];

        let result = solution.threeSum(input1);

        expect(result).toEqual([
            [ 0, 0, 0]
        ]);
    });

    it('test7', function() {
        const input1 = [ -4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6 ];

        let result = solution.threeSum(input1);

        expect(result.length).toEqual(6);
    });

    it('test2', function() {
        const input1 = [ -13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14, 13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5, -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8, -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4, 2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1 ];

        let result = solution.threeSum(input1);

        expect(result.length).toEqual(118);
    });
});

const solution = require('../../src/0001-0050/0033-SearchInRotatedSortedArray');

describe('Search In Rotated Sorted Array Tests', function() {
    'use strict';

    it('test TargetLessThanMid Rotated', function() {
        const input1 = [ 4, 5, 6, 7, 0, 1, 2 ];
        const input2 = 1;

        let result = solution.search(input1, input2);

        expect(result).toEqual(5);
    });

    it('test TargetLessThanMid Rotated 2', function() {
        const input1 = [ 7, 8, 0, 1, 2, 4, 5, 6 ];
        const input2 = 0;

        let result = solution.search(input1, input2);

        expect(result).toEqual(2);
    });

    it('test TargetLessThanMid NoRotated', function() {
        const input1 = [ 4, 5, 6, 7, 0, 1, 2 ];
        const input2 = 5;

        let result = solution.search(input1, input2);

        expect(result).toEqual(1);
    });

    it('test TargetLargeThanMid Rotated', function() {
        const input1 = [ 6, 7, 0, 1, 2, 4, 5 ];
        const input2 = 7;

        let result = solution.search(input1, input2);

        expect(result).toEqual(1);
    });

    it('test TargetLargeThanMid Rotated 2', function() {
        const input1 = [ 4, 5, 6, 7, 8, 0, 1, 2 ];
        const input2 = 8;

        let result = solution.search(input1, input2);

        expect(result).toEqual(4);
    });

    it('test TargetLargeThanMid NoRotated', function() {
        const input1 = [ 6, 7, 0, 1, 2, 4, 5 ];
        const input2 = 4;

        let result = solution.search(input1, input2);

        expect(result).toEqual(5);
    });

    it('test NotFound', function() {
        const input1 = [ 6, 7, 0, 1, 2, 4, 5 ];
        const input2 = 8;

        let result = solution.search(input1, input2);

        expect(result).toEqual(-1);
    });

    it('test SmallArray', function() {
        const input1 = [ 3, 1 ];
        const input2 = 1;

        let result = solution.search(input1, input2);

        expect(result).toEqual(1);
    });

    it('test SmallArray 2', function() {
        const input1 = [ 1, 3 ];
        const input2 = 3;

        let result = solution.search(input1, input2);

        expect(result).toEqual(1);
    });
});

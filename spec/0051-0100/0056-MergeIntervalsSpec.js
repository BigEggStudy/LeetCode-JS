const solution = require('../../src/0051-0100/0056-MergeIntervals');

describe('Merge Intervals Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [
            [ 1, 3 ],
            [ 2, 6 ],
            [ 8, 10 ],
            [ 15, 18 ],
        ];

        let result = solution.merge(input1);

        expect(result).toEqual([
            [ 1, 6 ],
            [ 8, 10 ],
            [ 15, 18 ],
        ]);
    });

    it('test2', function() {
        const input1 = [
            [ 1, 3 ],
            [ 0, 2 ],
        ];

        let result = solution.merge(input1);

        expect(result).toEqual([
            [ 0, 3 ],
        ]);
    });

    it('test3', function() {
        const input1 = [
            [ 1, 4 ],
            [ 4, 5 ],
        ];

        let result = solution.merge(input1);

        expect(result).toEqual([
            [ 1, 5 ],
        ]);
    });

    it('test4', function() {
        const input1 = [];

        let result = solution.merge(input1);

        expect(result).toEqual([]);
    });
});

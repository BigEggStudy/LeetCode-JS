const solution = require('../../src/0001-0050/0031-NextPermutation');

describe('Next Permutation Tests', function() {
    'use strict';

    it('test1', function() {
        let input1 = [ 1, 2, 3, 4 ];

        solution.nextPermutation(input1);
        expect(input1).toEqual([ 1, 2, 4, 3 ]);

        solution.nextPermutation(input1);
        expect(input1).toEqual([ 1, 3, 2, 4 ]);

        solution.nextPermutation(input1);
        expect(input1).toEqual([ 1, 3, 4, 2 ]);

        solution.nextPermutation(input1);
        expect(input1).toEqual([ 1, 4, 2, 3 ]);

        solution.nextPermutation(input1);
        expect(input1).toEqual([ 1, 4, 3, 2 ]);

        solution.nextPermutation(input1);
        expect(input1).toEqual([ 2, 1, 3, 4 ]);
    });

    it('test2', function() {
        let input1 = [ 4, 3, 2, 1 ];
        solution.nextPermutation(input1);
        expect(input1).toEqual([ 1, 2, 3, 4 ]);
    });

    it('test3', function() {
        let input1 = [];
        solution.nextPermutation(input1);
        expect(input1).toEqual([]);
    });

    it('test4', function() {
        let input1 = [ 1 ];
        solution.nextPermutation(input1);
        expect(input1).toEqual([ 1 ]);
    });
});

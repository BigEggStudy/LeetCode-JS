const solution = require('../../src/0201-0250/0238-ProductOfArrayExceptSelf');

describe('Product Of Array Except Self Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [ 1, 2, 3, 4 ];

        let result = solution.productExceptSelf(input1);

        expect(result).toEqual([ 24, 12, 8, 6 ]);
    });

    it('test2', function() {
        const input1 = [ 0, 1, 2, 3, 4 ];

        let result = solution.productExceptSelf(input1);

        expect(result).toEqual([ 24, 0, 0, 0, 0 ]);
    });

    it('test3', function() {
        const input1 = [ 1, 2, 3, 4, 0, 0 ];

        let result = solution.productExceptSelf(input1);

        expect(result).toEqual([ 0, 0, 0, 0, 0, 0 ]);
    });
});

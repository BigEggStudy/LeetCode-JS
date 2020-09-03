const solution = require('../../src/0551-0600/0560-SubarraySumEqualsK');

describe('Subarray Sum Equals K Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [ 1, 1, 1 ];
        const input2 = 2;

        let result = solution.subarraySum(input1, input2);

        expect(result).toEqual(2);
    });

    it('test2', function() {
        const input1 = [ 1, 1, 1, -1, 1 ];
        const input2 = 3;

        let result = solution.subarraySum(input1, input2);

        expect(result).toEqual(2);
    });
});

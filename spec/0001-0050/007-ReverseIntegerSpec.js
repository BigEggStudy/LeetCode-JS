var solution = require('../../src/0001-0050/007-ReverseInteger');

describe('Reverse Integer Tests', () => {
    'use strict';

    it('should reverse the positive number', () => {
        var result = solution.reverse(1);
        expect(result).toEqual(1);

        result = solution.reverse(123);
        expect(result).toEqual(321);

        result = solution.reverse(321);
        expect(result).toEqual(123);
    });

    it('should reverse the negative number', () => {
        var result = solution.reverse(-1);
        expect(result).toEqual(-1);

        result = solution.reverse(-123);
        expect(result).toEqual(-321);

        result = solution.reverse(-321);
        expect(result).toEqual(-123);
    });

    it('should handle zero right', () => {
        var result = solution.reverse(0);
        expect(result).toEqual(0);
    });

    it('should handle positive overflow', () => {
        var result = solution.reverse(1534236469);
        expect(result).toEqual(0);
    });

    it('should handle negative overflow', () => {
        var result = solution.reverse(-1534236469);
        expect(result).toEqual(0);
    });
});

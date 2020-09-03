var solution = require('../../src/0001-0050/006-ZigZagConversion');

describe('Zig Zag Conversion Tests', function() {
    'use strict';

    it('should return the string', function() {
        var input = 'PAYPALISHIRING';

        var result = solution.convert(input, 3);
        expect(result).toEqual('PAHNAPLSIIGYIR');

        result = solution.convert(input, 4);
        expect(result).toEqual('PINALSIGYAHRPI');

        result = solution.convert(input, 5);
        expect(result).toEqual('PHASIYIRPLIGAN');
    });

    it('should return the string when row number equals one', function() {
        var input = 'PAYPALISHIRING';
        var result = solution.convert(input, 1);

        expect(result).toEqual(input);
    });

    it('should return the string when row number equals zero', function() {
        var input = 'PAYPALISHIRING';
        var result = solution.convert(input, 0);

        expect(result).toEqual(input);
    });

    it('should return empty string when input is empty', function() {
        var input = '';
        var result = solution.convert(input, 0);

        expect(result).toEqual(input);
    });
});

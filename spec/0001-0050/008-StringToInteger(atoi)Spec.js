var solution = require('../../src/0001-0050/008-StringToInteger(atoi)');

describe('String to Integer Tests', () => {
    'use strict';

    it('should parse the positive number', () => {
        var result = solution.myAtoi('123');
        expect(result).toEqual(123);

        result = solution.myAtoi('+123');
        expect(result).toEqual(123);

        result = solution.myAtoi('010');
        expect(result).toEqual(10);
    });

    it('should parse the negative number', () => {
        var result = solution.myAtoi('-123');
        expect(result).toEqual(-123);

        result = solution.myAtoi('-010');
        expect(result).toEqual(-10);
    });

    it('should parse the zero', () => {
        var result = solution.myAtoi('0');
        expect(result).toEqual(0);

        result = solution.myAtoi('+0');
        expect(result).toEqual(0);

        result = solution.myAtoi('-0');
        expect(result).toEqual(0);
    });

    it('should handle positive overflow', () => {
        var result = solution.myAtoi('2147483647');
        expect(result).toEqual(2147483647);

        result = solution.myAtoi('2147483646');
        expect(result).toEqual(2147483646);

        result = solution.myAtoi('2147483648');
        expect(result).toEqual(2147483647);
    });

    it('should handle negative overflow', () => {
        var result = solution.myAtoi('-2147483648');
        expect(result).toEqual(-2147483648);

        result = solution.myAtoi('-2147483647');
        expect(result).toEqual(-2147483647);

        result = solution.myAtoi('-2147483649');
        expect(result).toEqual(-2147483648);
    });

    it('should handle empty string', () => {
        var result = solution.myAtoi('');
        expect(result).toEqual(0);

        result = solution.myAtoi('     ');
        expect(result).toEqual(0);
    });

    it('should handle whitespace in the beginning and end of string', () => {
        var result = solution.myAtoi('  123');
        expect(result).toEqual(123);

        result = solution.myAtoi('  123 123');
        expect(result).toEqual(123);

        result = solution.myAtoi('  -123');
        expect(result).toEqual(-123);

        result = solution.myAtoi('  -123 123');
        expect(result).toEqual(-123);
    });

    it('should handle invalid input', () => {
        var result = solution.myAtoi('abc');
        expect(result).toEqual(0);

        result = solution.myAtoi('abc123');
        expect(result).toEqual(0);
    });

    it('should handle mix input', () => {
        var result = solution.myAtoi('123abc');
        expect(result).toEqual(123);

        result = solution.myAtoi('123abc123');
        expect(result).toEqual(123);

        result = solution.myAtoi('-123abc');
        expect(result).toEqual(-123);

        result = solution.myAtoi('-123abc123');
        expect(result).toEqual(-123);
    });


    it('should handle mix input with overflow', () => {
        var result = solution.myAtoi('  2147483648abc');
        expect(result).toEqual(2147483647);

        result = solution.myAtoi('  2247483647abc');
        expect(result).toEqual(2147483647);

        result = solution.myAtoi('  -2147483649abc');
        expect(result).toEqual(-2147483648);

        result = solution.myAtoi('  -2247483648abc');
        expect(result).toEqual(-2147483648);
    });
});

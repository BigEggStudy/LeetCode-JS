var solution = require('../../src/0001-0050/009-PalindromeNumber');

describe('Is Palindrome Number Tests', () => {
    'use strict';

    it('should return true with navigate number', () => {
        var result = solution.isPalindrome(-1);
        expect(result).toBeFalsy();
    });

    it('should return true with number less than 10', () => {
        var result = solution.isPalindrome(0);
        expect(result).toBeTruthy();

        result = solution.isPalindrome(1);
        expect(result).toBeTruthy();

        result = solution.isPalindrome(9);
        expect(result).toBeTruthy();
    });

    it('should handle palindorme number', () => {
        var result = solution.isPalindrome(11);
        expect(result).toBeTruthy();

        result = solution.isPalindrome(121);
        expect(result).toBeTruthy();

        result = solution.isPalindrome(12321);
        expect(result).toBeTruthy();
    });

    it('should handle non-palindorme number', () => {
        var result = solution.isPalindrome(12);
        expect(result).toBeFalsy();

        result = solution.isPalindrome(123);
        expect(result).toBeFalsy();

        result = solution.isPalindrome(12331);
        expect(result).toBeFalsy();
    });
});

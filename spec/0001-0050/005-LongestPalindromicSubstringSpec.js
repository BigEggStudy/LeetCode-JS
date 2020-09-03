var solution = require('../../src/0001-0050/005-LongestPalindromicSubstring');

describe('Longest Substring Without Repeating Characters Tests', function() {
    'use strict';

    it('should return the string when it is palindromeic and is odd', function() {
        var input = 'abcdefgfedcba';
        var result = solution.longestPalindrome(input);

        expect(result).toEqual(input);
    });

    it('should return the string when it is palindromeic and is even', function() {
        var input = 'abcdefggfedcba';
        var result = solution.longestPalindrome(input);

        expect(result).toEqual(input);
    });

    it('should return the string when it contains same odd characters', function() {
        var input = 'ccc';
        var result = solution.longestPalindrome(input);

        expect(result).toEqual(input);
    });

    it('should return the string when it contains same even characters', function() {
        var input = 'aaaaaaaaaa';
        var result = solution.longestPalindrome(input);

        expect(result).toEqual(input);
    });

    it('should return the string when it is empty string', function() {
        var input = '';
        var result = solution.longestPalindrome(input);

        expect(result).toEqual(input);
    });

    it('should return the string when it only has one character', function() {
        var input = 'a';
        var result = solution.longestPalindrome(input);

        expect(result).toEqual(input);
    });

    describe('should return the right palindromeic when it has multiple palindromeic', function() {
        it('palindromeic at the first', function() {
            var input = 'aabccdccbaaeeggee';
            var result = solution.longestPalindrome(input);

            expect(result).toEqual('aabccdccbaa');
        });

        it('palindromeic at the end', function() {
            var input = 'eeggeeaabccdccbaa';
            var result = solution.longestPalindrome(input);

            expect(result).toEqual('aabccdccbaa');
        });

        it('mixed palindromeic', function() {
            var input = 'abcdcbbcd';
            var result = solution.longestPalindrome(input);

            expect(result).toEqual('dcbbcd');
        });

        it('mixed palindromeic 2', function() {
            var input = 'abcddcbebcd';
            var result = solution.longestPalindrome(input);

            expect(result).toEqual('dcbebcd');
        });
    });
});

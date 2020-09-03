var solution = require('../../src/0001-0050/003-LongestSubstringWithoutRepeatingCharacters');

describe('Longest Substring Without Repeating Characters Tests', function() {
    'use strict';

    it('should return max length', function() {
        var input = 'abcabcbb';
        var result = solution.lengthOfLongestSubstring(input);

        expect(result).toEqual(3);
    });

    it('should return max length when input is all repeat characters', function() {
        var input = 'bbbbb';
        var result = solution.lengthOfLongestSubstring(input);

        expect(result).toEqual(1);
    });

    it('should return 0 when input is empty', function() {
        var result = solution.lengthOfLongestSubstring('');

        expect(result).toEqual(0);
    });

    it('should return max length when input is a long string', function() {
        var input = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
        var result = solution.lengthOfLongestSubstring(input);

        expect(result).toEqual(26);
    });

    it('should return max length when input is a long string and has a short repeat ', function() {
        var input = 'abcdefghijklmnopqrstuvwxyzabcdefghijk  lmnopqrstuvwxyz';
        var result = solution.lengthOfLongestSubstring(input);

        expect(result).toEqual(27);
    });
});

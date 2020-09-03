var solution = require('../../src/0001-0050/010-RegularExpressionMatching');

describe('Regular Expression Matching Tests', () => {
    'use strict';

    describe('Regular Expression with Only Characters', () => {
        it('should return true when matching', () => {
            var result = solution.isMatch('aa', 'aa');
            expect(result).toBeTruthy();

            result = solution.isMatch('abc', 'abc');
            expect(result).toBeTruthy();
        });

        it('should return false when misMatching', () => {
            var result = solution.isMatch('aa', 'a');
            expect(result).toBeFalsy();

            result = solution.isMatch('abc', 'ab');
            expect(result).toBeFalsy();
        });

        it('should misMatching when regix is empty', () => {
            var result = solution.isMatch('aa', '');
            expect(result).toBeFalsy();
        });

        it('should matching when both regex & input are empty', () => {
            var result = solution.isMatch('', '');
            expect(result).toBeTruthy();
        });
    });

    describe('Regular Expression with Stars', () => {
        it('should return true when Star match multiple characters', () => {
            var result = solution.isMatch('aa', 'a*');
            expect(result).toBeTruthy();
        });

        it('should return true when Star match nothing', () => {
            var result = solution.isMatch('b', 'a*b');
            expect(result).toBeTruthy();
        });

        it('should return false when Star mismatch', () => {
            var result = solution.isMatch('ab', 'a*');
            expect(result).toBeFalsy();

            result = solution.isMatch('aaaa', 'b*');
            expect(result).toBeFalsy();

            result = solution.isMatch('abcd', 'd*');
            expect(result).toBeFalsy();
        });

        it('should handle multiple Stars', () => {
            var result = solution.isMatch('abb', 'c*a*b*');
            expect(result).toBeTruthy();
        });
    });

    describe('Regular Expression with Dot', () => {
        it('should return true when matching', () => {
            var result = solution.isMatch('ab', 'a.');
            expect(result).toBeTruthy();

            result = solution.isMatch('abc', 'a.c');
            expect(result).toBeTruthy();
        });

        it('should return false when misMatching', () => {
            var result = solution.isMatch('ab', '.');
            expect(result).toBeFalsy();

            result = solution.isMatch('ab', '.');
            expect(result).toBeFalsy();
        });

        it('should handle with multiple Dots', () => {
            var result = solution.isMatch('ab', '..');
            expect(result).toBeTruthy();

            result = solution.isMatch('abc', '.b.');
            expect(result).toBeTruthy();

            result = solution.isMatch('abc', '..');
            expect(result).toBeFalsy();
        });

        it('should handle empty input', () => {
            var result = solution.isMatch('', '.');
            expect(result).toBeFalsy();
        });
    });

    describe('Regular Expression with Star & Dot', () => {
        it('should always match with .*', () => {
            var result = solution.isMatch('aa', '.*');
            expect(result).toBeTruthy();

            result = solution.isMatch('ab', '.*');
            expect(result).toBeTruthy();

            result = solution.isMatch('abc', '.*');
            expect(result).toBeTruthy();
        });

        it('should handle when mix with Character', () => {
            var result = solution.isMatch('aab', '.*b');
            expect(result).toBeTruthy();

            result = solution.isMatch('abcaaab', '.*a*b');
            expect(result).toBeTruthy();

            result = solution.isMatch('abcb', '.*a*b');
            expect(result).toBeTruthy();

            result = solution.isMatch('abcb', '.*c');
            expect(result).toBeFalsy();
        });

        it('should handle empty input', () => {
            var result = solution.isMatch('', '.*');
            expect(result).toBeTruthy();
        });
    });
});

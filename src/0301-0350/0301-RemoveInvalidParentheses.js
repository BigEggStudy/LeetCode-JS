//-----------------------------------------------------------------------------
// Runtime: 80ms
// Memory Usage: 38.6 MB
// Link: https://leetcode.com/submissions/detail/385885871/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {string} s
     * @return {string[]}
     */
    var removeInvalidParentheses = function(s) {
        let invalidLeft = 0,
            invalidRight = 0;

        for (let ch of s) {
            if (ch === '(') {
                invalidLeft++;
            } else if (ch === ')') {
                invalidRight = invalidLeft === 0 ? invalidRight + 1 : invalidRight;
                invalidLeft = invalidLeft === 0 ? invalidLeft : invalidLeft - 1;
            }
        }

        var results = new Set();
        DFS(s, 0, 0, 0, invalidLeft, invalidRight, '', results);
        return Array.from(results);
    };

    /**
     * @param {string} s
     * @param {Number} index
     * @param {Number} leftCount
     * @param {Number} rightCount
     * @param {Number} invalidLeft
     * @param {Number} invalidRight
     * @param {string} current
     * @param {Set} results
     */
    var DFS = function(s, index, leftCount, rightCount, invalidLeft, invalidRight, current, results) {
        if (s.length === index) {
            if (invalidLeft === 0 && invalidRight === 0) {
                results.add(current);
            }
            return;
        }

        var ch = s[index];
        if (ch === '(' && invalidLeft > 0) {
            DFS(s, index + 1, leftCount, rightCount, invalidLeft - 1, invalidRight, current, results);
        } else if (ch === ')' && invalidRight > 0) {
            DFS(s, index + 1, leftCount, rightCount, invalidLeft, invalidRight - 1, current, results);
        }

        current += ch;

        if (ch !== '(' && ch !== ')') {
            DFS(s, index + 1, leftCount, rightCount, invalidLeft, invalidRight, current, results);
        } else if (ch === '(') {
            DFS(s, index + 1, leftCount + 1, rightCount, invalidLeft, invalidRight, current, results);
        } else if (rightCount < leftCount) {
            DFS(s, index + 1, leftCount, rightCount + 1, invalidLeft, invalidRight, current, results);
        }
    };

    return {
        removeInvalidParentheses: removeInvalidParentheses
    };
};

module.exports = solution();

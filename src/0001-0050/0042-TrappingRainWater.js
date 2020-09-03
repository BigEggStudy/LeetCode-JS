//-----------------------------------------------------------------------------
// Runtime: 80ms
// Memory Usage: 37.5 MB
// Link: https://leetcode.com/submissions/detail/385369968/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} height
     * @return {number}
     */
    var trap = function(height) {
        let N = height.length;
        if (N === 0) { return 0; }

        let maxLeft = height[0], maxRight = height[N - 1];
        let result = 0, tempLeft = 0, tempRight = 0;

        for (let i = 0; i < N; i++) {
            if (maxLeft > height[i]) {
                tempLeft += maxLeft - height[i];
            } else {
                maxLeft = height[i];
                result += tempLeft;
                tempLeft = 0;
            }

            if (maxRight > height[N - i - 1]) {
                tempRight += maxRight - height[N - i - 1];
            } else if (maxRight < height[N - i - 1]) {
                maxRight = height[N - i - 1];
                result += tempRight;
                tempRight = 0;
            }
        }

        return result;
    };

    return {
        trap: trap
    };
};

module.exports = solution();

//-----------------------------------------------------------------------------
// Runtime: 84ms
// Memory Usage: 38.5 MB
// Link: https://leetcode.com/submissions/detail/385832576/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} heights
     * @return {number}
     */
    var largestRectangleArea = function(heights) {
        let stack = [];
        stack.push(-1);
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]) {
                maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack[stack.length - 1] - 1));
            }
            stack.push(i);
        }
        while (stack[stack.length - 1] !== -1) {
            maxArea = Math.max(maxArea, heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1));
        }

        return maxArea;
    };

    return {
        largestRectangleArea: largestRectangleArea
    };
};

module.exports = solution();

//-----------------------------------------------------------------------------
// Runtime: 88ms
// Memory Usage: 39.6 MB
// Link: https://leetcode.com/submissions/detail/385829838/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    var maximalRectangle = function(matrix) {
        if (matrix.length === 0) {
            return 0;
        }

        let N = matrix.length, M = matrix[0].length;

        let height = Array(M).fill(0);
        let maxArea = 0;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0;
            }
            maxArea = Math.max(maxArea, ComputeLargestRectangle(height));
        }

        return maxArea;
    };

    var ComputeLargestRectangle = function(height) {
        let stack = [];
        stack.push(-1);
        let maxArea = 0;
        for (let i = 0; i < height.length; i++) {
            while (stack[stack.length - 1] !== -1 && height[stack[stack.length - 1]] >= height[i]) {
                maxArea = Math.max(maxArea, height[stack.pop()] * (i - stack[stack.length - 1] - 1));
            }
            stack.push(i);
        }

        while (stack[stack.length - 1] !== -1) {
            maxArea = Math.max(maxArea, height[stack.pop()] * (height.length - stack[stack.length - 1] - 1));
        }
        return maxArea;
    };

    return {
        maximalRectangle: maximalRectangle
    };
};

module.exports = solution();

//-----------------------------------------------------------------------------
// Runtime: 80ms
// Memory Usage: 38.1 MB
// Link: https://leetcode.com/submissions/detail/385805690/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} height
     * @return {number}
     */
    var maxArea = function(height) {
        let left = 0, right = height.length - 1;
        let result = 0;

        while (left < right) {
            let area = Math.min(height[left], height[right]) * (right - left);
            result = Math.max(result, area);

            if (height[left] <= height[right]) {
                let temp = height[left];
                do {
                    left++;
                } while(left < right && height[left] <= temp);
            } else {
                let temp = height[right];
                do {
                    right--;
                } while(left < right && height[right] <= temp);
            }
        }

        return result;
    };

    return {
        maxArea: maxArea
    };
};

module.exports = solution();

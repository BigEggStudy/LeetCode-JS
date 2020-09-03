//-----------------------------------------------------------------------------
// Runtime: 72ms
// Memory Usage: 37.5 MB
// Link: https://leetcode.com/submissions/detail/385377798/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var maxSubArray = function(nums) {
        if (nums.length === 0) {
            return Number.MIN_VALUE;
        }

        let currSum = nums[0], maxSum = nums[0];
        for (let i = 1; i < nums.length; i++)
        {
            currSum = Math.max(currSum + nums[i], nums[i]);
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    };

    return {
        maxSubArray: maxSubArray
    };
};

module.exports = solution();

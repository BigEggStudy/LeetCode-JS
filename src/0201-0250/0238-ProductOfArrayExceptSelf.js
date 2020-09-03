//-----------------------------------------------------------------------------
// Runtime: 92ms
// Memory Usage: 43.5 MB
// Link: https://leetcode.com/submissions/detail/385387997/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    var productExceptSelf = function(nums) {
        let results = Array(nums.length);
        results[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            results[i] = results[i - 1] * nums[i - 1];
        }

        let right = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            results[i] *= right;
            right *= nums[i];
        }

        return results;
    };

    return {
        productExceptSelf: productExceptSelf
    };
};

module.exports = solution();

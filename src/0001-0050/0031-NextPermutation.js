//-----------------------------------------------------------------------------
// Runtime: 76ms
// Memory Usage: 37.6 MB
// Link: https://leetcode.com/submissions/detail/385822370/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var nextPermutation = function(nums) {
        const swap = function(i, j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        };

        const reverse = function(start) {
            let end = nums.length - 1;
            while (start < end) {
                swap(start, end);
                start++;
                end--;
            }
        };

        var i = nums.length - 1;
        while (i > 0 && nums[i - 1] >= nums[i]) {
            i--;
        }

        if (i <= 0) {
            nums.reverse();
            return;
        }

        var j = nums.length - 1;
        while (j >= 0 && nums[i - 1] >= nums[j]) {
            j--;
        }

        swap(i - 1, j);
        reverse(i);
    };

    return {
        nextPermutation: nextPermutation
    };
};

module.exports = solution();

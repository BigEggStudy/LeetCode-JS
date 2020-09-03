//-----------------------------------------------------------------------------
// Runtime: 72ms
// Memory Usage: 38 MB
// Link: https://leetcode.com/submissions/detail/385364851/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    var twoSum = function(nums, target) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const rest = target - nums[i];
            if (rest in map) {
                return [ map[rest], i ];
            }
            map[nums[i]] = i;
        }

        return [];
    };

    return {
        twoSum: twoSum
    };
};

module.exports = solution();

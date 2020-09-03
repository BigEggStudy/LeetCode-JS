//-----------------------------------------------------------------------------
// Runtime: 120ms
// Memory Usage: 46.5 MB
// Link: https://leetcode.com/submissions/detail/385801773/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    var subarraySum = function(nums, k) {
        var map = {};
        map[0] = 1;

        let sum = 0;
        let count = 0;
        for (let num of nums) {
            sum += num;
            if ((sum - k) in map) {
                count += map[sum - k];
            }

            if (sum in map) {
                map[sum]++;
            } else {
                map[sum] = 1;
            }
        }

        return count;
    };

    return {
        subarraySum: subarraySum
    };
};

module.exports = solution();

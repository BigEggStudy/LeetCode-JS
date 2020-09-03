//-----------------------------------------------------------------------------
// Runtime: 128ms
// Memory Usage: 47.5 MB
// Link: https://leetcode.com/submissions/detail/385383405/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    var threeSum = function(nums) {
        nums.sort((a, b) => a - b);
        let N = nums.length;

        let results = [];
        for (let i = 0; i < N - 2 && nums[i] <= 0; i++)
        {
            let lo = i + 1, hi = N - 1;
            while (lo < hi && nums[hi] >= 0)
            {
                let sum = nums[i] + nums[lo] + nums[hi];
                if (sum === 0) {
                    results.push([ nums[i], nums[lo], nums[hi] ]);
                }
                if (sum <= 0) {
                    do {
                        lo++;
                    } while (lo < hi && nums[lo - 1] === nums[lo]);
                }
                if (sum >= 0) {
                    do {
                        hi--;
                    } while (lo < hi && nums[hi] === nums[hi + 1]);
                }
            }

            while (i < N - 2 && nums[i] === nums[i + 1]) {
                i++;
            }
        }

        return results;
    };

    return {
        threeSum: threeSum
    };
};

module.exports = solution();

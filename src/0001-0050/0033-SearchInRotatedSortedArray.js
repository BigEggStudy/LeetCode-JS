//-----------------------------------------------------------------------------
// Runtime: 68ms
// Memory Usage: 36.5 MB
// Link: https://leetcode.com/submissions/detail/385840085/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    var search = function(nums, target) {
        let lo = 0, hi = nums.length - 1;

        while (lo <= hi) {
            let loValue = nums[lo],
                hiValue = nums[hi];
            if (loValue <= hiValue && (target < loValue || target > hiValue)) {
                return -1;
            }

            let mid = Math.floor(lo + (hi - lo) / 2);
            let midValue = nums[mid];
            if (midValue === target) {
                return mid;
            }

            if (loValue <= midValue) {
                if (loValue <= target && target < midValue) {
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            } else {
                if (target <= hiValue && midValue < target) {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
        }

        return -1;
    };

    return {
        search: search
    };
};

module.exports = solution();

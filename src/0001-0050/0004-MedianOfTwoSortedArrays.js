//-----------------------------------------------------------------------------
// Runtime: 128ms
// Memory Usage: 42.4 MB
// Link: https://leetcode.com/submissions/detail/385375252/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    var findMedianSortedArrays = function(nums1, nums2) {
        const merge = ((A, B) => {
            let i = 0, j = 0, C = [];

            while (i < A.length && j < B.length) {
                C.push(A[i] < B[j] ? A[i++] : B[j++]);
            }
            if (i === A.length) {
                C.push(...B.slice(j));
            }
            if (j === B.length) {
                C.push(...A.slice(i));
            }
            return C;
        });
        const nums = merge(nums1, nums2);
        const n = nums.length,
              m1 = Math.floor(n / 2),
              m2 = Math.floor((n - 1) / 2);
        return n % 2 === 1 ? nums[m1] : (nums[m1] + nums[m2]) / 2.0;
    };

    return {
        findMedianSortedArrays: findMedianSortedArrays
    };
};

module.exports = solution();

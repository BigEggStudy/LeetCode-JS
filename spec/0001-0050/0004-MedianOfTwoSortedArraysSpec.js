let solution = require('../../src/0001-0050/0004-MedianOfTwoSortedArrays.js');

describe('Median of Two Sorted Arrays Test', function() {
    'use strict';

    it('should return the median when the total count is odd', function() {
        const nums1 = [
            1, 2, 3
        ];
        const nums2 = [
            4, 5
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(3);
    });

    it('should return the median when the total count is even', function() {
        const nums1 = [
            1, 2, 3, 4
        ];
        const nums2 = [
            5, 6, 7, 8
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(4.5);
    });

    it('should return the median when nums1 is empty', function() {
        const nums1 = [];
        const nums2 = [
            1, 2, 3
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(2);
    });

    it('should return the median when nums2 is empty', function() {
        const nums1 = [
            1, 2, 3
        ];
        const nums2 = [];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(2);
    });

    it('should return the median when nums1 is empty and nums2 only have 1 item', function() {
        const nums1 = [];
        const nums2 = [
            1
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(1);
    });

    it('should return the median when nums2 is empty and nums1 only have 1 item', function() {
        const nums1 = [
            1
        ];
        const nums2 = [];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(1);
    });

    it('should return the median when nums1 only have 1 item and total count is odd', function() {
        const nums1 = [
            1
        ];
        const nums2 = [
            2, 3, 4, 5, 6, 7
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(4);
    });

    it('should return the median when nums1 only have 1 item and total count is even', function() {
        const nums1 = [
            1
        ];
        const nums2 = [
            2, 3, 4, 5, 6
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(3.5);
    });

    it('should return the median when nums1 only have 2 item and total count is odd', function() {
        const nums1 = [
            2, 3, 4, 5, 6, 7
        ];
        const nums2 = [
            1
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(4);
    });

    it('should return the median when nums1 only have 2 item and total count is even', function() {
        const nums1 = [
            2, 3, 4, 5, 6
        ];
        const nums2 = [
            1
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(3.5);
    });

    it('should return the median when total count is even and two items in different arrays', function() {
        const nums1 = [
            2
        ];
        const nums2 = [
            1, 3, 4
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(2.5);
    });

    it('should return the median when there have duplicate items', function() {
        const nums1 = [
            1, 1, 3, 3
        ];
        const nums2 = [
            1, 1, 3, 3
        ];
        let result = solution.findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(2);
    });
});

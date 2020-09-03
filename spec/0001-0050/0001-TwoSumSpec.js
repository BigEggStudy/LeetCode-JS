let solution = require('../../src/0001-0050/0001-TwoSum');

describe('Two Sum Tests', function() {
    'use strict';

    let largeArray = new Array(20000);

    beforeAll(function() {
        for (let i = 0; i < largeArray.length; i++) {
            largeArray[i] = i * 2;
        }
    });

    it('should get result when array is ordered', function() {
        const nums = [
            2, 7, 11, 15
        ];
        const target = 9;

        let result = solution.twoSum(nums, target);

        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(1);
    });

    it('should get result when array is unordered', function() {
        const nums = [
            5, 75, 25
        ];
        const target = 100;

        let result = solution.twoSum(nums, target);

        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(1);
        expect(result[1]).toEqual(2);
    });

    it('should get result when array has duplicate numbers', function() {
        const nums = [
            5, 5, 15, 30
        ];
        const target = 20;

        let result = solution.twoSum(nums, target);

        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(1);
        expect(result[1]).toEqual(2);
    });

    it('should get result when array\'s items are all the same', function() {
        const nums = [
            5, 5, 5, 5
        ];
        const target = 10;

        let result = solution.twoSum(nums, target);

        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(1);
    });

    it('should not get result when non of the sum is the target', function() {
        const nums = [
            2, 7, 11, 15
        ];
        const target = 5;

        let result = solution.twoSum(nums, target);

        expect(result.length).toEqual(0);
    });

    it('should get result even the array is large', function() {
        const target = 19082;

        let result = solution.twoSum(largeArray, target);

        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(4770);
        expect(result[1]).toEqual(4771);
    });

    it('should not get result when non of the sum is the target, even the array is large', function() {
        const target = 19081;

        let result = solution.twoSum(largeArray, target);

        expect(result.length).toEqual(0);
    });
});

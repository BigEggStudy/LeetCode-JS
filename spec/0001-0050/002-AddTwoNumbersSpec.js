var solution = require('../../src/0001-0050/002-addTwoNumbers');

describe('Add Two Numbers Tests', function() {
    'use strict';

    var generateList = function(nums) {
        if (nums === null || nums.length === 0) {
            return null;
        }

        var i = 0;
        var first = new solution.ListNode(nums[i]);
        var current = first;

        while (++i < nums.length) {
            current.next = new solution.ListNode(nums[i]);
            current = current.next;
        }

        return first;
    };

    var assertList = function(firstNode, nums) {
        expect(firstNode).not.toBeNull();
        expect(nums).not.toBeNull();
        expect(nums.length > 0).toBeTruthy();

        var current = firstNode;
        for (var i = 0; i < nums.length; i++) {
            expect(current).not.toBeNull();
            expect(current.val).toBe(nums[i]);
            current = current.next;
        }

        expect(current).toBeNull();
    };

    it('should get result when there have two numbers', function() {
        var link = generateList([2, 4, 3]);

        var result = solution.addTwoNumbers(link, link);
        assertList(result, [4, 8, 6]);
    });

    it('should get result when both link only have one 0 item', function() {
        var link = generateList([0]);

        var result = solution.addTwoNumbers(link, link);
        assertList(result, [0]);
    });

    it('should get result when the result has carry', function() {
        var link1 = generateList([2, 4, 3]);
        var link2 = generateList([5, 6, 4]);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [7, 0, 8]);
    });

    it('should get result when the result has more than one carries', function() {
        var link1 = generateList([1]);
        var link2 = generateList([9, 9]);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [0, 0, 1]);
    });

    it('should get result when the first digit of result is the carry', function() {
        var link1 = generateList([3, 4, 4]);
        var link2 = generateList([3, 4, 6]);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [6, 8, 0, 1]);
    });

    it('should get result when the link list 1 is longer', function() {
        var link1 = generateList([2, 4, 3, 1]);
        var link2 = generateList([5, 6, 4]);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [7, 0, 8, 1]);
    });

    it('should get result when the second number is 0', function() {
        var link1 = generateList([1, 8]);
        var link2 = generateList([0]);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [1, 8]);
    });

    it('should get result when the link list 1 is null', function() {
        var link1 = generateList(null);
        var link2 = generateList([1, 8]);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [1, 8]);
    });

    it('should get result when the link list 2 is longer', function() {
        var link1 = generateList([2, 4, 3]);
        var link2 = generateList([5, 6, 4, 3]);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [7, 0, 8, 3]);
    });

    it('should get result when the first number is 0', function() {
        var link1 = generateList([0]);
        var link2 = generateList([1, 8]);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [1, 8]);
    });

    it('should get result when the link list 2 is null', function() {
        var link1 = generateList([1, 8]);
        var link2 = generateList(null);

        var result = solution.addTwoNumbers(link1, link2);
        assertList(result, [1, 8]);
    });
});

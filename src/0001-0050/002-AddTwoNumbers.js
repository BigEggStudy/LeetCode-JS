//-----------------------------------------------------------------------------
// Runtime: 260ms
// Memory Usage: 
// Link: 
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    var addTwoNumbers = function(l1, l2) {
        var first = new ListNode(-1);
        first.next = new ListNode(0);
        var currnet = first;

        while (l1 !== null || l2 !== null) {
            var value1 = l1 === null ? 0 : l1.val;
            var value2 = l2 === null ? 0 : l2.val;

            currnet = currnet.next;
            var sum = currnet.val + value1 + value2;
            if (sum >= 10) {
                currnet.val = sum % 10;
                currnet.next = new ListNode(1);
            } else {
                currnet.val = sum;
                currnet.next = new ListNode(0);
            }

            l1 = l1 === null ? null : l1.next;
            l2 = l2 === null ? null : l2.next;
        }

        if (currnet.next.val === 0) {
            currnet.next = null;
        }

        return first.next;
    };

    return {
        addTwoNumbers: addTwoNumbers,
        ListNode: ListNode
    };
};

module.exports = solution();

//-----------------------------------------------------------------------------
// Runtime: 76ms
// Memory Usage: 39.1 MB
// Link: https://leetcode.com/submissions/detail/385867368/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    var rightSideView = function(root) {
        if (root == null) {
            return [];
        }

        let queue = [], results = [];
        queue.push(root);
        while (queue.length > 0) {
            let length = queue.length;
            let node = null;
            for (let i = 0; i < length; i++) {
                node = queue.shift();
                if (!!node.left) {
                    queue.push(node.left);
                }
                if (!!node.right) {
                    queue.push(node.right);
                }
            }

            results.push(node.val);
        }

        return results;
    };

    return {
        rightSideView: rightSideView
    };
};

module.exports = solution();

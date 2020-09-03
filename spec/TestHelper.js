const { TreeNode } = require('../src/TreeNode');

/**
 * @param {Number[]} nums
 * @return {TreeNode}
 */
function generateTree(nums) {
    if (nums === null || nums.length === 0) {
        return null;
    }

    var i = 0;
    var first = new TreeNode(nums[i++]);
    var queue = [];
    queue.push(first);

    while (queue.length > 0) {
        var current = queue.shift();
        if (i < nums.length && !!nums[i]) {
            var leftNode = new TreeNode(nums[i]);
            current.left = leftNode;
            queue.push(leftNode);
        }
        if (i + 1 < nums.length && !!nums[i + 1]) {
            var rightNode = new TreeNode(nums[i + 1]);
            current.right = rightNode;
            queue.push(rightNode);
        }
        i += 2;
    }

    return first;
}

exports.generateTree = generateTree;

const solution = require('../../src/0151-0200/0199-BinaryTreeRightSideView');
const { generateTree } = require('../TestHelper');

describe('Binary Tree Right Side View Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = generateTree([ 1, 2, 3, null, 5, null, 4 ]);

        let result = solution.rightSideView(input1);

        expect(result).toEqual([ 1, 3, 4 ]);
    });
});

const solution = require('../../src/0101-0150/0127-WordLadder');

describe('Word Ladder Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = 'hit';
        const input2 = 'cog';
        const input3 = [ 'hot', 'dot', 'dog', 'lot', 'log', 'cog' ];

        let result = solution.ladderLength(input1, input2, input3);

        expect(result).toEqual(5);
    });

    it('test2', function() {
        const input1 = 'hit';
        const input2 = 'cog';
        const input3 = [ 'hot', 'dot', 'dog', 'lot', 'log' ];

        let result = solution.ladderLength(input1, input2, input3);

        expect(result).toEqual(0);
    });
});

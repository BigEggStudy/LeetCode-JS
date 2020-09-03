const solution = require('../../src/0151-0200/0200-NumberOfIslands');

describe('Number Of Islands Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [
            [ '1', '1', '1', '1', '0' ],
            [ '1', '1', '0', '1', '0' ],
            [ '1', '1', '0', '0', '0' ],
            [ '0', '0', '0', '0', '0' ],
        ];

        let result = solution.numIslands(input1);

        expect(result).toEqual(1);
    });

    it('test2', function() {
        const input1 = [
            [ '1', '1', '0', '0', '0' ],
            [ '1', '1', '0', '0', '0' ],
            [ '0', '0', '1', '0', '0' ],
            [ '0', '0', '0', '1', '1' ],
        ];

        let result = solution.numIslands(input1);

        expect(result).toEqual(3);
    });
});

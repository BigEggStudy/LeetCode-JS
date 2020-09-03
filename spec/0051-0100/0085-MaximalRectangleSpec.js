const solution = require('../../src/0051-0100/0085-MaximalRectangle');

describe('Maximal Rectangle Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = [
            [ '1', '1', '1' ],
            [ '1', '0', '1' ],
            [ '1', '1', '1' ],
        ];

        let result = solution.maximalRectangle(input1);

        expect(result).toEqual(3);
    });

    it('test2', function() {
        const input1 = [
            [ '1', '1', '1', '1', '1' ],
            [ '1', '1', '1', '1', '1' ],
            [ '1', '0', '1', '1', '1' ],
            [ '1', '1', '1', '1', '1' ],
            [ '1', '1', '1', '1', '1' ],
        ];

        let result = solution.maximalRectangle(input1);

        expect(result).toEqual(15);
    });

    it('test3', function() {
        const input1 = [
            [ '1', '0' ],
            [ '1', '0' ],
        ];

        let result = solution.maximalRectangle(input1);

        expect(result).toEqual(2);
    });

    it('test OneItem', function() {
        const input1 = [
            [ '1' ],
        ];

        let result = solution.maximalRectangle(input1);

        expect(result).toEqual(1);
    });

    it('test OneItem_Zero', function() {
        const input1 = [
            [ '0' ],
        ];

        let result = solution.maximalRectangle(input1);

        expect(result).toEqual(0);
    });

    it('test OneRow', function() {
        const input1 = [
            [ '1', '1', '1' ],
        ];

        let result = solution.maximalRectangle(input1);

        expect(result).toEqual(3);
    });
});

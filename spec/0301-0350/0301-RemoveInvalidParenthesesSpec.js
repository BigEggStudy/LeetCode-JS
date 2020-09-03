const solution = require('../../src/0301-0350/0301-RemoveInvalidParentheses');

describe('Remove Invalid Parentheses Tests', function() {
    'use strict';

    it('test1', function() {
        const input1 = '()())()';

        let result = solution.removeInvalidParentheses(input1);

        expect(result).toEqual([ '(())()', '()()()' ]);
    });

    it('test2', function() {
        const input1 = '(a)())()';

        let result = solution.removeInvalidParentheses(input1);

        expect(result).toEqual([ '(a())()', '(a)()()' ]);
    });

    it('test3', function() {
        const input1 = ')(';

        let result = solution.removeInvalidParentheses(input1);

        expect(result).toEqual([ '' ]);
    });
});

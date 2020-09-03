//-----------------------------------------------------------------------------
// Runtime: 315ms
// Memory Usage: 
// Link: 
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number} x
     * @return {boolean}
     */
    var isPalindrome = function(x) {
        if (x < 0) { return false; }
        if (x < 10) { return true; }

        var temp = x,
            y = 0;

        while (temp !== 0) {
            y = y * 10 + temp % 10;
            temp = Math.floor(temp / 10);
        }

        return x === y;
    };

    return {
        isPalindrome: isPalindrome
    };
};

module.exports = solution();

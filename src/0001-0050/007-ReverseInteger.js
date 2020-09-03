//-----------------------------------------------------------------------------
// Runtime: 129ms
// Memory Usage: 
// Link: 
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {number} x
     * @return {number}
     */
    var reverse = function(x) {
        var result = 0;

        var positiveOverflow = Math.floor(Math.pow(2, 31) / 10);
        var nagativeOverflow = -positiveOverflow;

        for (; x !== 0; x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)) {
            if (result > positiveOverflow || result < nagativeOverflow) {
                return 0;
            }
            result = result * 10 + x % 10;
        }

        return result;
    };

    return {
        reverse: reverse
    };
};

module.exports = solution();

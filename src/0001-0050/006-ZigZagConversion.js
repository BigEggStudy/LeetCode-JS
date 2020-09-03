//-----------------------------------------------------------------------------
// Runtime: 188ms
// Memory Usage: 
// Link: 
//-----------------------------------------------------------------------------

var solution = function () {
    'use strict';

    /**
     * @param {string} s
     * @param {number} numRows
     * @return {string}
     */
    var convert = function(s, numRows) {
        if (s.length <= 1 || numRows <= 1) {
            return s;
        }

        var result = '';
        for (var i = 0; i < numRows; i++) {
            var index = i;
            for (var j = 0; index < s.length; j++, index = (numRows * 2 - 2) * j + i) {
                result = result + s[index];

                if (i === 0 || i === numRows - 1) { continue; }

                index = index + (numRows * 2 - 2) - i * 2;
                if (index < s.length) {
                    result = result + s[index];
                }
            }
        }

        return result;
    };

    return {
        convert: convert
    };
};

module.exports = solution();

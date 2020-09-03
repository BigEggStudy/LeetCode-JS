//-----------------------------------------------------------------------------
// Runtime: 122ms
// Memory Usage: 
// Link: 
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {string} str
     * @return {number}
     */
    var myAtoi = function(str) {
        var navigate = false;
        var index = 0;

        while (index < str.length && str[index] === ' ') {
            index++;
        }
        if (index === str.length) { return 0; }

        if (str[index] === '-') {
            navigate = true;
            index++;
        } else if (str[index] === '+') {
            index++;
        }

        //  2147483647
        var positiveOverflowHead = 214748364;
        var positiveOverflowTail = 7;
        var result = 0;
        while (index < str.length) {
            if (str[index] < '0' || str[index] > '9') { break; }
            var digit = str[index] - '0';

            if (result > positiveOverflowHead || 
                (result === positiveOverflowHead && digit > positiveOverflowTail)) {
                return navigate ? -2147483648 : 2147483647;
            }
            result = result * 10 + digit;
            index++;
        }

        if (!result) { return 0; }
        return navigate ? -result : result;
    };

    return {
        myAtoi: myAtoi
    };
};

module.exports = solution();

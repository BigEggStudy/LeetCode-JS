//-----------------------------------------------------------------------------
// Runtime: 276ms
// Memory Usage: 
// Link: 
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    var isMatch = function(s, p) {
        return isMatchCore(s, 0, p, 0);
    };

    var isMatchCore = function(s, sIndex, p, pIndex) {
        if (pIndex === p.length) { return sIndex === s.length; }

        if (pIndex === p.length + 1 || p[pIndex + 1] !== '*') {
            if (sIndex < s.length && (p[pIndex] === '.' || p[pIndex] === s[sIndex])) {
                return isMatchCore(s, sIndex + 1, p, pIndex + 1);
            } else {
                return false;
            }
        } else {
            while (sIndex < s.length && (p[pIndex] === '.' || p[pIndex] === s[sIndex])) {
                if (isMatchCore(s, sIndex, p, pIndex + 2)) {
                    return true;
                }
                sIndex++;
            }
            return isMatchCore(s, sIndex, p, pIndex + 2);
        }
    };

    return {
        isMatch: isMatch
    };
};

module.exports = solution();

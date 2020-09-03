//-----------------------------------------------------------------------------
// Runtime: 128ms
// Memory Usage: 
// Link: 
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {string} s
     * @return {string}
     */
    var longestPalindrome = function(s) {
        if (!s || s.length <= 0) {
            return s;
        }

        var n2 = s.length * 2 + 1;
        var s2 = new Array(n2);
        for (var i = 0; i < s.length; i++) {
            s2[i * 2] = '#';
            s2[i * 2 + 1] = s[i]; 
        }
        s2[n2 - 1] = '#';

        var p = new Array(n2);
        var range_max = 0, center = 0, longestPalindromeCenter = 0;
        p[0] = 0;
        for (i = 1; i < n2 - 1; i++) {
            if (range_max > i) {
                p[i] = p[center * 2 - i] < range_max - i ? p[center * 2 - i] : range_max - i;
            } else {
                p[i] = 0;
            }

            while(i - 1 - p[i] >=0 && i + 1 + p[i] < n2 && s2[i - 1 - p[i]] === s2[i + 1 + p[i]]) {
                p[i]++;
            }

            if (i + p[i] > range_max) {
                center = i;
                range_max = i + p[i];
            }

            if (p[i] > p[longestPalindromeCenter]) {
                longestPalindromeCenter = i;
            }
        }

        return s.substr((longestPalindromeCenter - p[longestPalindromeCenter]) / 2, p[longestPalindromeCenter]);
    };

    return {
        longestPalindrome: longestPalindrome
    };
};

module.exports = solution();

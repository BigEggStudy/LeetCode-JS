//-----------------------------------------------------------------------------
// Runtime: 240ms
// Memory Usage: 
// Link: 
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {string} s
     * @return {number}
     */
    var lengthOfLongestSubstring = function(s) {
        if (s.length === 0) {
            return 0;
        }

        var i = 0;
        var map = [];
        for (i = 0; i < 256; i++) {
            map[i] = -1;
        }

        var maxLen = 0;
        var lastRepeatPos = -1;

        for (i = 0; i < s.length; i++) {
            if (map[s[i]] !== -1 && lastRepeatPos < map[s[i]]) {
                lastRepeatPos = map[s[i]];
            }
            if (maxLen < i - lastRepeatPos) {
                maxLen = i - lastRepeatPos;
            }
            map[s[i]] = i;
        }

        return maxLen;
    };

    return {
        lengthOfLongestSubstring: lengthOfLongestSubstring
    };
};

module.exports = solution();

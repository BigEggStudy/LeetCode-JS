//-----------------------------------------------------------------------------
// Runtime: 88ms
// Memory Usage: 38.8 MB
// Link: https://leetcode.com/submissions/detail/385391748/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * Definition for an interval.
     * function Interval(start, end) {
     *     this.start = start;
     *     this.end = end;
     * }
     */
    /**
     * @param {Interval[]} intervals
     * @return {Interval[]}
     */
    var merge = function(intervals) {
        if (intervals.length <= 1) {
            return intervals;
        }

        intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
        let results = [];
        let prev = intervals[0];
        for (let current of intervals) {
            if (prev[1] >= current[0]) {
                prev[1] = Math.max(current[1], prev[1]);
            } else {
                results.push(prev);
                prev = current;
            }
        }
        results.push(prev);

        return results;
    };

    return {
        merge: merge
    };
};

module.exports = solution();

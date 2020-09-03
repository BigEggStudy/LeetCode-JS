//-----------------------------------------------------------------------------
// Runtime: 120ms
// Memory Usage: 44.5 MB
// Link: https://leetcode.com/submissions/detail/385877147/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    var ladderLength = function(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);
        if (!wordSet.has(endWord)) {
            return 0;
        }

        let steps = 1,
            set1 = new Set([ beginWord ]),
            set2 = new Set([ endWord ]);

        while (set1.size > 0 && set2.size > 0) {
            let next = [];
            if (set1.size > set2.size) {
                let temp = set1;
                set1 = set2;
                set2 = temp;
            }

            for (let word of set1) {
                if (set2.has(word)) {
                    return steps;
                }

                for (let i = 0; i < word.length; i++) {
                    for (let j = 0; j < 26; j++) {
                        let cur = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
                        if (set2.has(cur)) {
                            return steps + 1;
                        }
                        if (wordSet.has(cur)) {
                            next.push(cur);
                            wordSet.delete(cur);
                        }
                    }
                }
            }

            set1 = new Set(next);
            steps++;
        }

        return 0;
    };

    return {
        ladderLength: ladderLength
    };
};

module.exports = solution();

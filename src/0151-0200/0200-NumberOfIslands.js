//-----------------------------------------------------------------------------
// Runtime: 96ms
// Memory Usage: 40.5 MB
// Link: https://leetcode.com/submissions/detail/385849407/
//-----------------------------------------------------------------------------

var solution = function() {
    'use strict';

    /**
     * @param {character[][]} grid
     * @return {number}
     */
    var numIslands = function(grid) {
        if (grid === null || grid.length === 0 || grid[0].length === 0) {
            return 0;
        }

        let N = grid.length,
            M = grid[0].length;
        let uf = new UnionFind(grid);

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (grid[i][j] === '1') {
                    if (i - 1 >= 0 && grid[i - 1][j] === '1') {
                        uf.union(i * M + j, (i - 1) * M + j);
                    }
                    if (j - 1 >= 0 && grid[i][j - 1] === '1') {
                        uf.union(i * M + j, i * M + j - 1);
                    }
                }
            }
        }
        return uf.count;
    };

    /**
     * @param {character[][]} grid
     */
    var UnionFind = function (grid) {
        this.count = 0;

        let N = grid.length,
            M = grid[0].length;

        this.parents = Array(N * M).fill(0);
        this.ranks = Array(N * M).fill(0);

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (grid[i][j] === '1') {
                    this.parents[i * M + j] = i * M + j;
                    this.count++;
                }
            }
        }
    };

    /**
     * @param {number} index
     * @return {number}
     */
    UnionFind.prototype.find = function (index) {
        if (this.parents[index] !== index) {
            this.parents[index] = this.find(this.parents[index]);
        }

        return this.parents[index];
    };

    /**
     * @param {number} index1
     * @param {number} index2
     */
    UnionFind.prototype.union = function (index1, index2) {
        let pIndex1 = this.find(index1),
            pIndex2 = this.find(index2);

        if (pIndex1 === pIndex2) {
            return;
        }

        if (this.ranks[pIndex1] > this.ranks[pIndex2]) {
            this.parents[pIndex1] = pIndex2;
            this.ranks[pIndex2]++;
        } else {
            this.parents[pIndex2] = pIndex1;
            this.ranks[pIndex1]++;
        }
        this.count--;
    };

    return {
        numIslands: numIslands
    };
};

module.exports = solution();

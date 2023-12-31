const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
dm = [];
assert(JSON.stringify(depthFirstSearch(dm, 0, 1)) === JSON.stringify([]));
dm = [[0]];
assert(JSON.stringify(depthFirstSearch(dm, 0, 0)) == JSON.stringify([0]));
dm = [[1],[0,3],[0,1],[0,1,2,3]];
assert(JSON.stringify(depthFirstSearch(dm, 0, 2)) == JSON.stringify([0,1,3,2]));
dm = [[1],[0,3],[0,1],[0,1,3]];
assert(JSON.stringify(depthFirstSearch(dm, 0, 2)) == JSON.stringify([]));
dm = [[0,1],[2],[1,3],[2,4],[0]];
assert(JSON.stringify(depthFirstSearch(dm, 1, 0)) == JSON.stringify([1,2,3,4,0]));

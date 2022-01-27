//npm - *global command, comes with node*
// npm --verion

//*local dependency - use it only in this particular *
// npm i <packageName>

// *global dependency - use it in any project*
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

//package.json = manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properities etc...)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash'); //external files first.

//example use for lodash.
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
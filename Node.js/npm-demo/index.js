const _ = require('underscore');

// Require checks its argument in this order:
// Core module
// File or folder
// node_modules

const res = _.contains([1,2,3,4], 3);
console.log(res);
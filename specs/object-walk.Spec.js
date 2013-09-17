objectWalk = require('../src/object-walk.js');
var fs = require('fs');
var path = require('path');
var specPath = path.resolve(__dirname, '../browser/tests/object-walk.test.js');
var specCode = fs.readFileSync(specPath, "utf8");
eval(specCode);

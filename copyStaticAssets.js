var path = require('path');
var shell = require('shelljs');

const DESC_BUILD = path.join(__dirname, "public/js/*");
shell.rm('-rf', DESC_BUILD);



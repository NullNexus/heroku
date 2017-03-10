// So you can fully use ES6? Using Babel-register
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-register')(config);
// Load Server
require('./server');

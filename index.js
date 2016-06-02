#! /usr/local/bin/node
var directory = process.cwd();
require('./dist/app.js').default(directory);

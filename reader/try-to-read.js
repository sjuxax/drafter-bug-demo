var minim = require('minim').namespace().use(require('minim-parse-result'))
var fs = require('fs');
var pf = require('pretty-format')

var j = JSON.parse(fs.readFileSync('bad_out.refract.json'));
var o = minim.fromRefract(j).api

console.log(pf(o.toValue()));

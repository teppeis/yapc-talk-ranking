var current = require('./ranking.json');
var accepted = require('./ranking-accepted.json');

var acceptedMap = {};
accepted.ranking.forEach(function(talk) {
  acceptedMap[talk.path] = true;
});

current.ranking.forEach(function(talk) {
  talk.accepted = !!acceptedMap[talk.path];
});

console.log(JSON.stringify(current, null, 2));

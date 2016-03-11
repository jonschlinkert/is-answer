'use strict';

var isAnswer = require('./');

console.log(isAnswer(true));
console.log(isAnswer(false));
console.log(isAnswer([]));
console.log(isAnswer('foo'));
console.log(isAnswer(['foo']));
console.log(isAnswer({}));
console.log(isAnswer({a: 'b'}));
console.log(isAnswer({a: {}}));

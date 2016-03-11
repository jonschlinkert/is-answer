'use strict';

require('mocha');
var assert = require('assert');
var isAnswer = require('./');

describe('isAnswer', function() {
  it('should return true if the value is a boolean', function() {
    assert(isAnswer(true));
    assert(isAnswer(false));
  });

  it('should return true if the value is a string', function() {
    assert(isAnswer('foo'));
  });

  it('should return true if the value is a number', function() {
    assert(isAnswer(0));
    assert(isAnswer(1));
  });

  it('should return true if the value is an object with values', function() {
    assert(isAnswer({a: 'b'}));
    assert(isAnswer({a: true}));
    assert(isAnswer({a: false}));
    assert(isAnswer({a: 0}));
  });

  it('should return true if the value is an array with values', function() {
    assert(isAnswer(['foo']));
    assert(isAnswer([true]));
    assert(isAnswer([false]));
    assert(isAnswer([0]));
  });

  it('should return false if the value is an empty string', function() {
    assert(!isAnswer(''));
  });

  it('should return false if the value is an empty object', function() {
    assert(!isAnswer({}));
    assert(!isAnswer({a: {}}));
    assert(!isAnswer({a: undefined}));
    assert(!isAnswer({a: ''}));
    assert(!isAnswer({a: null}));
    assert(!isAnswer({a: {b: {}}}));
  });

  it('should return false if the value is an empty array', function() {
    assert(!isAnswer([]));
    assert(!isAnswer([null]));
    assert(!isAnswer([undefined]));
    assert(!isAnswer([{}]));
    assert(!isAnswer(['']));
  });
});

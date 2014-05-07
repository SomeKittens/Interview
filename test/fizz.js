'use strict';

var should = require('should');

var oneto100 = require('./ans/1-100.json');

var standard = require('../lib/standard');

describe('fizzbuzz', function() {
  var results = [];
  beforeEach(function() {
    results = [];
  });
  it('should run through the basic fizzbuzz test', function() {
    standard(1, 100, function(output) {
      results.push(output);
    });
    results.length.should.eql(100);
    for (var i = 0; i < 100; i++) {
      results[i].should.eql(oneto100[i]);
    }
  });
});
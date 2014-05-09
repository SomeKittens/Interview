'use strict';

var should = require('should');

var oneto100 = require('./ans/1-100.json');

var standardFizz = require('../lib/standard')
  , yieldFizz = require('../lib/yield');

describe('fizzbuzz', function() {
  var results = []
    , addToResults = function(output) {
      results.push(output);
    };
  beforeEach(function() {
    results = [];
  });

  describe('standard', function() {
    it('should run through the basic fizzbuzz test', function() {
      standardFizz(1, 100, addToResults);

      results.length.should.eql(100);
      for (var i = 0; i < 100; i++) {
        results[i].should.eql(oneto100[i]);
      }
    });
    it('works on numbers other than 1-100', function() {
      standardFizz(1, 10, addToResults);

      results.length.should.eql(10);
      for (var i = 0; i < 10; i++) {
        results[i].should.eql(oneto100[i]);
      }
    });
  });

  describe('yield', function() {
    it('should run through the basic fizzbuzz test', function() {
      yieldFizz(1, 100, addToResults);

      results.length.should.eql(100);
      for (var i = 0; i < 100; i++) {
        results[i].should.eql(oneto100[i]);
      }
    });
    it('works on numbers other than 1-100', function() {
      yieldFizz(1, 10, addToResults);

      results.length.should.eql(10);
      for (var i = 0; i < 10; i++) {
        results[i].should.eql(oneto100[i]);
      }
    });
  });
});
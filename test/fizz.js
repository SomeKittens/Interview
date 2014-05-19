'use strict';

require('should');

var oneto100 = require('./ans/1-100.json')
  , exec = require('child_process').exec;

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
  
  describe('unit', function() {

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

  describe('integration', function() {
    it('runs basic fizzbuzz', function(done) {
      exec('./bin/fizzbuzz',
        function (err, stdout, stderr) {
          if (err) { return done(err); }
          
          var results = stdout.split('\n')
          results.pop();
          results.should.eql(oneto100);
          stderr.should.eql('');
          done();
      });
    });
    
    it('uses a starting number', function(done) {
      exec('./bin/fizzbuzz -s 90',
        function (err, stdout, stderr) {
          if (err) { return done(err); }
          
          var results = stdout.split('\n')
          results.pop();
          results.should.eql(oneto100.slice(89));
          stderr.should.eql('');
          done();
      });
    });
  
    it('uses an ending number', function(done) {
      exec('./bin/fizzbuzz -e 10',
        function (err, stdout, stderr) {
          if (err) { return done(err); }
          
          var results = stdout.split('\n')
          results.pop();
          results.should.eql(oneto100.slice(0, 10));
          stderr.should.eql('');
          done();
      });
    });
    
    it('uses both flags', function(done) {
      exec('./bin/fizzbuzz -s 10 -e 50',
        function (err, stdout, stderr) {
          if (err) { return done(err); }
          
          var results = stdout.split('\n')
          results.pop();
          results.should.eql(oneto100.slice(9, 50));
          stderr.should.eql('');
          done();
      });
    });
  });
});
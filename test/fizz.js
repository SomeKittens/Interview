'use strict';

require('should');

var oneto100 = require('./ans/1-100.json')
  , oneto100p = require('./ans/1-100p.json')
  , exec = require('child_process').exec;

var standardFizz = require('../lib/standard')
  , yieldFizz = require('../lib/yield')
  , findPrime = require('../lib/prime');

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
        standardFizz({s: 1, e: 100}, addToResults);

        results.length.should.eql(100);
        for (var i = 0; i < 100; i++) {
          results[i].should.eql(oneto100[i]);
        }
      });
      it('works on numbers other than 1-100', function() {
        standardFizz({s: 1, e: 10}, addToResults);

        results.length.should.eql(10);
        for (var i = 0; i < 10; i++) {
          results[i].should.eql(oneto100[i]);
        }
      });
      it('can also display primes', function() {
        standardFizz({s: 1, e: 100, p: true}, addToResults);

        results.length.should.eql(100);
        for (var i = 0; i < 100; i++) {
          results[i].should.eql(oneto100p[i]);
        }
      });
    });

    describe('yield', function() {
      it('should run through the basic fizzbuzz test', function() {
        yieldFizz({s: 1, e: 100}, addToResults);

        results.length.should.eql(100);
        for (var i = 0; i < 100; i++) {
          results[i].should.eql(oneto100[i]);
        }
      });
      it('works on numbers other than 1-100', function() {
        yieldFizz({s: 1, e: 10}, addToResults);

        results.length.should.eql(10);
        for (var i = 0; i < 10; i++) {
          results[i].should.eql(oneto100[i]);
        }
      });
      it('can also display primes', function() {
        yieldFizz({s: 1, e: 100, p: true}, addToResults);

        results.length.should.eql(100);
        for (var i = 0; i < 100; i++) {
          results[i].should.eql(oneto100p[i]);
        }
      });
      it('will give an error with an incorrect starting point', function() {
        yieldFizz({s: 2, e: 100}, function() {}, addToResults);
        
        results.length.should.eql(1);
        results[0].should.eql('Yield method only works with numbers in the sequence 1, 4, 7...');
      });
    });
    
    describe('prime', function() {
      it('finds prime numbers', function() {
        var isPrime = findPrime('17');
        isPrime.should.be.true;
      });
      
      it('rejects non-prime numbers', function() {
        var isPrime = findPrime('20');
        isPrime.should.be.false;
      });
    })
  });

  describe('integration', function() {
    it('runs basic fizzbuzz', function(done) {
      exec('./bin/fizzbuzz',
        function (err, stdout, stderr) {
          if (err) { return done(err); }
          
          var results = stdout.split('\n');
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
          
          var results = stdout.split('\n');
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
          
          var results = stdout.split('\n');
          results.pop();
          results.should.eql(oneto100.slice(0, 10));
          stderr.should.eql('');
          done();
      });
    });
    
    it('uses the prime flag', function(done) {
      exec('./bin/fizzbuzz -p',
        function (err, stdout, stderr) {
          if (err) { return done(err); }
          
          var results = stdout.split('\n');
          results.pop();
          results.should.eql(oneto100p.slice(0, 100));
          stderr.should.eql('');
          done();
      });
    });
    
    it('uses both flags', function(done) {
      exec('./bin/fizzbuzz -s 10 -e 50',
        function (err, stdout, stderr) {
          if (err) { return done(err); }
          
          var results = stdout.split('\n');
          results.pop();
          results.should.eql(oneto100.slice(9, 50));
          stderr.should.eql('');
          done();
      });
    });
  });
});
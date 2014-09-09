'use strict';

require('should');

var tenFib = require('./ans/tenFib.json')
  , twentyFib = require('./ans/twentyFib.json')
  , fourFive = require('./ans/fourFive.json')
  , exec = require('child_process').exec;


describe('fib', function() {
  it('should calculate the first ten Fibonacci numbers', function(done) {
    exec('./bin/fib',
      function (err, stdout, stderr) {
        if (err) { return done(err); }

        var results = stdout.split('\n');
        results.pop();
        results.should.eql(tenFib);
        stderr.should.eql('');
        done();
    });
  });

  it('should calculate via the -c flag', function(done) {
    exec('./bin/fib -c 20',
      function (err, stdout, stderr) {
        if (err) { return done(err); }

        var results = stdout.split('\n');
        results.pop();
        results.should.eql(twentyFib);
        stderr.should.eql('');
        done();
    });
  });

  it('should take seed numbers via -s', function(done) {
    exec('./bin/fib -s 4,5',
      function (err, stdout, stderr) {
        if (err) { return done(err); }

        var results = stdout.split('\n');
        results.pop();
        results.should.eql(fourFive);
        stderr.should.eql('');
        done();
    });
  });

  it('should insist -c pass a number', function(done) {
    exec('./bin/fib -c kittens',
      function (err, stdout, stderr) {
       stdout.should.eql('');
       stderr.should.eql('--cycles expects a number\n');

       done();
    });
  });

  it('should accept no tomfoolery with --seed', function(done) {
      exec('./bin/fib -s fat,cats',
        function (err, stdout, stderr) {

        stdout.should.eql('');
        stderr.should.eql('--seed expects two comma separated numbers\n' +
          'For example, 2,7 or 1,1\n' +
          'You entered fat,cats\n');
        done();
    });
  });
});
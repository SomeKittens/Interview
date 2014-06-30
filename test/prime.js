'use strict';

require('should');

var exec = require('child_process').exec;

describe('Prime', function() {
  it('should correctly identify a prime number', function(done) {
    exec('./bin/prime 13', 
      function (err, stdout, stderr) {
        if (err) { return done(err); }
        
        stdout.should.eql('13 is prime\n');
        stderr.should.eql('');
        done();
    });
  });
  
  it('should correctly identify a non-prime number', function(done) {
    exec('./bin/prime 12', 
      function (err, stdout, stderr) {
        if (err) { return done(err); }
        
        stdout.should.eql('12 is not prime\n');
        stderr.should.eql('');
        done();
    });
  });
  
  it('should log an error when called with no arguments', function(done) {
    exec('./bin/prime', 
      function (err, stdout, stderr) {
        stderr.should.eql('No number provided\n');
        err.code.should.eql(1);
        stdout.should.eql('');
        
        done();
    });
  });
  
  it('should log an error when called with incorrect arguments', function(done) {
    exec('./bin/prime eleventybillion', 
      function (err, stdout, stderr) {
        stderr.should.eql('Expected number, got eleventybillion\n');
        err.code.should.eql(1);
        stdout.should.eql('');
        
        done();
    });
  });
});
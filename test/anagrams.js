'use strict';

require('should');

// Storing words in JSON makes it easier to load
var top500 = require('./data/top-500-words.js')
  , exec = require('child_process').exec;

describe('anagrams', function() {
  it('should find a simple anagram', function(done) {
    exec('./bin/anagrams pants,stnap',
      function (err, stdout, stderr) {
        if (err) { return done(err); }
        stderr.should.eql('');
        
        stdout.should.eql('Anagrams found: 1\n');
        done();
    });
  });
  
  it('should find multiple anagrams', function(done) {
    exec('./bin/anagrams pants,stnap,par,sdf,eww,febiir,dafe,fds,tspan',
      function (err, stdout, stderr) {
        if (err) { return done(err); }
        stderr.should.eql('');
        
        stdout.should.eql('Anagrams found: 4\n');
        done();
    });
  });
  
  it('should find a LOT of anagrams', function(done) {
    exec('./bin/anagrams ' + top500,
      function (err, stdout, stderr) {
        if (err) { return done(err); }
        stderr.should.eql('');
        
        stdout.should.eql('Anagrams found: 31\n');
        done();
    });
  });
  
  it('should not find anagrams where none are provided', function(done) {
    exec('./bin/anagrams cat,dog,kitty,puppy',
      function (err, stdout, stderr) {
        if (err) { return done(err); }
        stderr.should.eql('');
        
        stdout.should.eql('Anagrams found: 0\n');
        done();
    });
  });
  
  it('should exit with an error when dict is not provided', function(done) {
    exec('./bin/anagrams',
      function (err, stdout, stderr) {
        stderr.should.eql('No dictionary provided\n');
        err.code.should.eql(1);
        stdout.should.eql('');

        done();
    });
  });
});
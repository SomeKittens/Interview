'use strict';

console.log(__dirname);

require('should');

var exec = require('child_process').exec;

describe('strrev', function() {
  it('reverses a string', function(done) {
    exec('./bin/strrev fuzzykittens',
      function (err, stdout, stderr) {
        if (err) { return done(err); }
        
        stdout.should.eql('snettikyzzuf\n');
        stderr.should.eql('');
        done();
    });
  });
  it('works when there are spaces in the string', function(done) {
    exec('./bin/strrev fuzzy kittens',
      function (err, stdout, stderr) {
        if (err) { return done(err); }
        
        stdout.should.eql('snettik yzzuf\n');
        stderr.should.eql('');
        done();
    });
  });
});
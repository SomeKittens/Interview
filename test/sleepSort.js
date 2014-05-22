'use strict';

require('should');

var sleepSort = require('../lib/sleepSort');

describe('sorts by sleeping!', function() {
  it('should sort an array', function(done) {
    sleepSort([671, 673, 50, 100, 670, 900, 400, 675], function(err, sortedArr) {
      (err === null).should.be.true;
      
      sortedArr.should.eql([50, 100, 400, 670, 671, 673, 675, 900]);
      
      done();
    });
  });
  
  it('should throw an error with a negative number', function(done) {
    sleepSort([671, -1100], function(err, sortedArr) {
      (err === null).should.be.false;
      err.should.be.an.Error;
      (sortedArr === undefined).should.be.true;

      err.message.should.be.ok;
      err.message.should.eql('Bad data at array index 1');
      
      done();
    });
  });
  
  it('should throw an error with non-numeric data', function(done) {
    sleepSort([671, 'bananas'], function(err, sortedArr) {
      (err === null).should.be.false;
      err.should.be.an.Error;
      (sortedArr === undefined).should.be.true;

      err.message.should.be.ok;
      err.message.should.eql('Bad data at array index 1');
      
      done();
    });
  });
});
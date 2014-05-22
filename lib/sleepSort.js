'use strict';

function sleepSort(arr, cb) {
  var sortedArr = []
    , sortedItems = 0
    , error = false
    , pushToSorted = function(item) {
      sortedArr.push(item);
      sortedItems++;
      if (sortedItems === arr.length) {
        cb(null, sortedArr);
      }
    };
  
  arr.forEach(function(item, idx) {
    if (error) { return; }
    
    item = Number(item);
    if (isNaN(item) || item < 0) {
      cb(new Error('Bad data at array index ' + idx));
      return error = true;
    }
    
    setTimeout(function() { pushToSorted(item); }, item);
  });
};

module.exports = sleepSort;
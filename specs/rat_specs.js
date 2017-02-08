var assert = require('assert');
var Food = require('../food');
var Rat = require('../rat');

describe('Rat', function() {
  var her
  var rat1 = new Rat;
  it('should touch food', function(){
    var grape = new Food('Grape', 5)
    rat1.touchFood(grape);
    assert.equal(true, grape.contaminated);
  });
});
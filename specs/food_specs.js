var assert = require('assert');
var Food = require('../food');

describe('Food', function() {
  it('should create food',  function(){
    var grape = new Food('Grape', 5);
    assert.equal('Grape', grape.getName());
    assert.equal(5, grape.getReplenishmentValue());
  });
});
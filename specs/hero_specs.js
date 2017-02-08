var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

describe('Hero', function() {
  var hero1 = new Hero('bob', 'lasagna');

  it('should create a hero', function() {
    assert.equal('bob', hero1.getName());
    assert.equal('lasagna', hero1.getFavouriteFood());
    assert.equal(100, hero1.getHealth());
  });

  it('should eat food & replenish health', function(){
    var grape = new Food('Grape', 5);
    hero1.eat(grape);
    assert.equal(105, hero1.getHealth());
  });


  it('should get 1.5* bonus from favourite food', function(){
    var lasagna = new Food('lasagna', 100); 
    hero1.eat(lasagna);
    assert.equal(255, hero1.getHealth());
  });

  it('should reduce health when eating contaminated food', function(){
    var rat1 = new Rat;
    var grape = new Food('Grape', 5);
    rat1.touchFood(grape);
    hero1.eat(grape);
    assert.equal(250, hero1.getHealth());
  });
});

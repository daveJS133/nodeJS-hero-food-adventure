var Food = require('./food');

var Hero = function(name, favouriteFood) {
  this.name = name,
  this.health = 100,
  this.favouriteFood = favouriteFood
}

Hero.prototype = {

  getName: function() {
    return this.name;
  },

  getHealth: function() {
    return this.health;
  },

  getFavouriteFood: function() {
    return this.favouriteFood;
  },

  talk: function() {
    return this.name;
  },

  eat: function(food) {
    if (food.contaminated == true){
      food.replenishment *= (-1)
    }
    if (food.name.toLowerCase() == this.favouriteFood.toLowerCase()){
      this.health += (food.getReplenishmentValue() * 1.5);
    } else {
      this.health += food.getReplenishmentValue();
    }
  }
};




  module.exports = Hero;
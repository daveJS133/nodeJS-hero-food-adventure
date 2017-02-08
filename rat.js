var Food = require('./food');

var Rat = function(food){
}

Rat.prototype = {
  touchFood: function(food) {
    food.contaminated = true;
  }
};

module.exports = Rat;
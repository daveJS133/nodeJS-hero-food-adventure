var Food = function(name, replenishment, contaminated) {
  this.name = name,
  this.replenishment = replenishment,
  this.contaminated = false
}

Food.prototype = {
  getName: function() {
    return this.name;
  },

  getReplenishmentValue: function() {
    return this.replenishment;
  }
};

module.exports = Food;
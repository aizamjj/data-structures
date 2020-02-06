var Stack = function() {
  var newInstance = {};
  newInstance.storage = {};
  newInstance.count = 0;
  extend(newInstance, stackMethods);

  return newInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key]
  }
};
var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count && this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

stackMethods.size = function() {
  return this.count;
};



var Stack = function() {
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.count = 0;

  return newInstance;
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




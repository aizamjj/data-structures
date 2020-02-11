var Stack = function() {
  var newInstance = {};
  
  newInstance._storage = {};
  newInstance._count = 0;
  _.extend(newInstance, stackMethods);
  
  return newInstance;
};
var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._count] = value;
  this._count++;
};

stackMethods.pop = function() {
  this._count && this._count--;
  var result = this._storage[this._count];
  delete this._storage[this._count];
  return result;
};

stackMethods.size = function() {
  return this._count;
};

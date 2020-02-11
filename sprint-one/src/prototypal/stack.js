var Stack = function() {
  var newInstance = Object.create(stackMethods);
  newInstance._storage = {};
  newInstance._count = 0;

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



stackMethods.push = function(value) {
  // create a new key on my storage object using size
  // assign value as the value of this key
  // before: storage[someInstance.size()] = value;
  this.storage[this.size()] = value;
};


stackMethods.pop = function() {
  // if (stackMethods.size() >= 0) {
  //   var popped = storage[stackMethods.size() - 1];
  //   delete storage[stackMethods.size() - 1]; // <--- something's wrong here
  //   return popped;
  // } else { // <-- added for "reports a size of 0 after removing more items than were added"
  //   return stackMethods.size() === 0;
  // }

  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
  /*
  return Object.keys( undefined ).length)
  return [0].length
  return 1

  */
};

var stack = Stack();

// stack.size();
// stack.push('a');
// stack.push('b');
// stack.pop();
// stack.size();
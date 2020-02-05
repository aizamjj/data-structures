var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add the value to the storage after the last one
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function(value) {
    
    // removes the first one and returns it
    count--;
    var result = storage[count];
    delete storage[count];
    return result;
  };

  someInstance.size = function(value) {
    return count;
  };

  return someInstance;
};

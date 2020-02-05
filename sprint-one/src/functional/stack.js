var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Create a count variable to keep track of the 
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(value) {
    count--;
    var result = storage[count];
    // delete that element
    delete storage[count];
    // return that element
    return result;
  };
  
  someInstance.size = function(value) {
    return count;
  };

  return someInstance;
};

var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Create a count variable to keep track of how big the stack is
  var count = 0;

  someInstance.push = function(value) {
    storage[count++] = value; // value = 4; storage: {0: 4} count = 0; 
  };

  someInstance.pop = function() {
    // count is truthy, then decrement count
    count && count--;
    var result = storage[count]; // result = 4
    // delete the element
    delete storage[count]; //result = undefined, count is undefined
    // return the element
    return result;
  };
  
  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

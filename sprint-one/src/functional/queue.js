var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; // property within Queue
  var head = 0;
  var tail = 0;

  someInstance.enqueue = function(value) {
    // store the given value on the tail end of the queue
    storage[tail] = value;
    // increment tail
    tail++;
  };

  someInstance.dequeue = function() {
    // grab the first item in the queue (head = 0 and tail = 1)
    var result = storage[head];
    // delete the first item (head = no longer exists, tail is still 1)
    delete storage[head];
    // what happens when we dequeue right off the bat when head and tail are at 0

    head < tail && head++;
    return result;
  };

  someInstance.size = function() {

    return tail - head;
  };

  return someInstance;
};

//Process:

//Specification: I - value (data type: string) O - someInstance (object);
  // Constraints:
  // Edge Cases:
//Justification: The purpose of the function is to store the given
  // value at the end of the storage object
  // when Queue is invoked, it creates an instance of the class
  // class
//Explanation
  // the relationship between the input and output: there is n
//Visualization
//Approximation
//Verification
//Implementation

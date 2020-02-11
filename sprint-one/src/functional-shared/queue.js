var Queue = function() {
  var newInstance = {};
  // create storage container object for the unique values of each object instance
  newInstance.storage = {};
  // create a head variable and set to 0
  newInstance.head = 0;
  // create a tail variable and set to 0
  newInstance.tail = 0;
  // add the queueMethods as properties into newInstance object
  _.extend(newInstance, queueMethods);
};
//create an object for all the methods to be stored in that is shareable across all instances
var queueMethods = {};

queueMethods.enqueue = function (value) {
  // set the new value at tail within the storage and increment
  this.storage[this.tail ++] = value;
};
queueMethods.dequeue = function () {
  // access the current head
  var result = this.storage[this.head];
  delete this.storage[this.head];
  this.head < this.tail && this.head++;
  return result;
};

queueMethods.size = function () {
  return this.tail - this.head;
};

// Problem-Solving Process:
// Specification
// Identify IOCE: Inputs - no input, Outputs - someInstance (object), Constraints - none, Edge Cases -
// Include side effect on inputs, on external variable - queueMethods variable that is shareable with all instances, and on hardware
// Justification
// the purpose of the function is to implement a data structure that stores a data set, in this case an object instance that will store its own unique values for each object instance and shared methods that are available to each object instance
// Explanation
// the queue constructor function does not take an input but its methods will take a this parameter that will get bound to the object being instantiated at call time. That way each instance can share methods but will have their own exection context where they will store their unique values.
// 	- Visualization
// 		○ Whiteboard the plan with minimal text
// 	- Approximation
// 		○ Pseudocode
// 	- Verification
// 		○ Using sample data, walk through the pseudocode to verify the plan works
// 	- Implementation
// Easiest part, start coding

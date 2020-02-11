var Queue = function() {
  var newInstance = Object.create(queueMethods);
  // create storage container object for the unique values of each object instance
  newInstance.storage = {};
  // create a head variable and set to 0
  newInstance.head = 0;
  // create a tail variable and set to 0
  newInstance.tail = 0;
  return newInstance;
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



var queue = Queue();
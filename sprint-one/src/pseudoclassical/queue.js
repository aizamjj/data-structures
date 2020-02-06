var Queue = function() {
  // create storage container object for the unique values of each object instance
  this.storage = {};
  // create a head variable and set to 0
  this.head = 0;
  // create a tail variable and set to 0
  this.tail = 0;
};

//create an object for all the methods to be stored in that is shareable across all instances
Queue.prototype.enqueue = function (value) {
  // set the new value at tail within the storage and increment
  this.storage[this.tail ++] = value;
};
Queue.prototype.dequeue = function () {
  // access the current head
  var result = this.storage[this.head];
  delete this.storage[this.head];
  this.head < this.tail && this.head++;
  return result;
};

Queue.prototype.size = function () {
  return this.tail - this.head;
};



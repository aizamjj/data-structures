var Queue = function() {
  var someInstance = {};
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


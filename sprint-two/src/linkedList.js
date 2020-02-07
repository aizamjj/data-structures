var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list = {
  //   head : null,
  //     {
  //       value: 4,
  //       next: tail
  //     }
  //   tail : null
  // }

  list.addToTail = function(value) {
    // assign value to list.tail
    list.tail = Node(value);
    list.head = Node(value);
  };

  list.removeHead = function() {
    // create a variable result and store the current node at head

    // delete the node
    // assign the list.head to currentnode.next <<--- how do we reassign the list.head
    // return result
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

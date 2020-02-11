var LinkedList = function() {
  var list = {};
  list.size = 0
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
      list.size++;
      return;
    }
    
    list.tail.next = newNode; // this.tail is the previous object so its next = null so now next is = newNode (the current one)
    
    list.tail = newNode; //now the tail is pointing to the current newNode
    console.log(newNode);
    list.size++;


  };

  list.removeHead = function() {
    if (!list.head) return null
    var head = list.head.value;
    // if the size is one
    list.head = list.head.next
    list.size--
    return head;
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

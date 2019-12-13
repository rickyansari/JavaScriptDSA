class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data, next) {
    let current = this.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data, next);
    } else {
      this.head = new Node(data, next);
    }
  }

  removeNode(previousNode, currentNode) {
    if (this.isFirstNode(currentNode)) this.head = currentNode.next;
    previousNode.next = currentNode.next;
    return [previousNode, previousNode.next];
  }

  isFirstNode(node) {
    return this.head === node;
  }
}

function createLinkList(array) {
  const linkedList = new LinkedList();
  array.forEach(data => {
    linkedList.addNode(data, null);
  });
  return linkedList;
}

const linkedList = createLinkList([2, 3, 2, 3, 4]);

// Write code to remove duplicate from an unsorted linkedlist

function removeDuplicateNode(head) {
  let previousNode = head;
  let currentNode = head.next;
  let items = [head.data];
  while (currentNode) {
    if (items.includes(currentNode.data)) {
      [previousNode, currentNode] = linkedList.removeNode(
        previousNode,
        currentNode
      );
    } else {
      items.push(currentNode.data);
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  console.log(JSON.stringify(linkedList));
}

// removeDuplicateNode(linkedList.head);

/* FOLLOW UP =>
 * How would you solve the problem if a temp buffer is not allowed.
 */

function removeDuplicateNodeWithoutTemporaryBuffer(head) {
  let currentNode = head;
  while (currentNode) {
    let traversingNode = currentNode.next;
    let previousNode = currentNode;
    let currentNodeData = currentNode.data;
    while (traversingNode) {
      if (traversingNode.data === currentNodeData) {
        [previousNode, traversingNode] = linkedList.removeNode(
          previousNode,
          traversingNode
        );
      } else {
        previousNode = traversingNode;
        traversingNode = traversingNode.next;
      }
    }
    currentNode = currentNode.next;
  }
  console.log(JSON.stringify(linkedList));
}

removeDuplicateNodeWithoutTemporaryBuffer(linkedList.head);

// 2.2 Implement an algorithm to find the  kth to last element of singly Linked List
//Inprogress

function findElement(positionFromLast, linkedList) {
  let nodeCount = 0;
}

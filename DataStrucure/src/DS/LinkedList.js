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
    else previousNode.next = currentNode.next;
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

// Write code to remove duplicate from an unsorted linkedlist

(function() {
  let linkedList = createLinkList([1, 2, 3, 2, 3]);
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
  removeDuplicateNode(linkedList.head);
})();

/* FOLLOW UP =>
 * How would you solve the problem if a temp buffer is not allowed.
 */

(function() {
  let linkedList = createLinkList([1, 2, 3, 2, 3]);
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
})();

/* 
2.2 Implement an algorithm to find the  kth to last element of singly Linked List
*/

(function() {
  let linkedList = createLinkList([1, 2, 3, 4, 5]);
  function findElement(positionFromLast, head) {
    let nodeCount = 0;
    let kthElementFromLast;
    let traversingNode = head;
    while (traversingNode) {
      if (nodeCount < positionFromLast && !traversingNode.next)
        return { success: false };
      if (kthElementFromLast) kthElementFromLast = kthElementFromLast.next;
      if (nodeCount === positionFromLast - 1) kthElementFromLast = head;
      nodeCount += 1;
      traversingNode = traversingNode.next;
    }
    return { success: true, element: kthElementFromLast.data };
  }
  console.log(findElement(1, linkedList.head));
})();

/* 
2.3 Implement an algorithm to delete a node in the middle of a singly linked list,
    given only access to that node.
 */

(function() {
  let linkedList = createLinkList([1, 2, 3, 4, 5]);
  function deleteTargetNode(targetNode) {
    if (targetNode && targetNode.next) {
      targetNode.data = targetNode.next.data;
      targetNode.next = targetNode.next.next;
    }
  }
  deleteTargetNode(linkedList.head.next.next.next);
  console.log(JSON.stringify(linkedList));
})();

/*
2.4 Write a code to partition a linkedList araound a value x. such that all the nodes 
    less than x come before all the node greater than or equal to x
*/

(function() {
  let linkedList = createLinkList([1, 2, 3, 4, 5]);
  // TODO
})();

/* 
2.5 You have two numbers represented by a linked list, where each node contains a
    single digit. The digits are stored in reverse order, such that the Ts digit is at the
    head of the list. Write a function that adds the two numbers and returns the sum
    as a linked list.
    
    EXAMPLE
    Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295.
    Output: 2 -> 1 -> 9.That is, 912.
   
*/

(function() {
  let LinkedList1 = createLinkList([7, 1, 6]);
  let LindedList2 = createLinkList([5, 9, 2]);
  function summedLinkedList(LL1, LL2) {
    let string1 = "";
    let string2 = "";
    while (LL1 || LL2) {
      if (LL1) {
        string1 += LL1.data;
        LL1 = LL1.next;
      }
      if (LL2) {
        string2 += LL2.data;
        LL2 = LL2.next;
      }
    }

    let sum = String(
      Number(
        string1
          .split("")
          .reverse()
          .join("")
      ) +
        Number(
          string2
            .split("")
            .reverse()
            .join("")
        )
    );
    return createLinkList(sum.split("").reverse());
  }
  const output = summedLinkedList(LinkedList1.head, LindedList2.head);
  console.log(JSON.stringify(output));
})();

/*
  FOLLOW UP
  Suppose the digits are stored in forward order. Repeat the above problem.
  EXAMPLE
  Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295.
  Output: 9 -> 1 -> 2.That is, 912.
*/

(function() {
  let LinkedList1 = createLinkList([6, 1, 7]);
  let LindedList2 = createLinkList([2, 9, 5]);
  function summedLinkedList(LL1, LL2) {
    let string1 = "";
    let string2 = "";
    while (LL1 || LL2) {
      if (LL1) {
        string1 += LL1.data;
        LL1 = LL1.next;
      }
      if (LL2) {
        string2 += LL2.data;
        LL2 = LL2.next;
      }
    }
    let sum = String(Number(string1) + Number(string2));
    return createLinkList(sum.split(""));
  }
  const output = summedLinkedList(LinkedList1.head, LindedList2.head);
  console.log(JSON.stringify(output));
})();

/*
2.6 Given a circular linked list, implement an algorithm which returns the node at
    the beginning of the loop.
    DEFINITION
    Circular linked list: A (corrupt) linked list in which a node's next pointer points
    to an earlier node, so as to make a loop in the linked list.
    EXAMPLE
    Input: A - > B - > C - > D - > E - > C [the same C as earlier]
    Output: C
*/
function createCircleInLinkList(entryPointData, traversingNode) {
  let circleEntryPointNode = null;
  while (traversingNode.next) {
    if (traversingNode.data === entryPointData) {
      circleEntryPointNode = traversingNode;
    }
    traversingNode = traversingNode.next;
  }
  traversingNode.next = circleEntryPointNode;
}

(function() {
  let linkedList = createLinkList([1, 2, 3, 4, 5, 6, 7]);
  createCircleInLinkList(3, linkedList.head);
  function findCircleBiginning(traversingNode) {
    let data = [];
    while (traversingNode) {
      if (data.includes(traversingNode)) {
        return { success: true, entryPoint: traversingNode.data };
      }
      data.push(traversingNode);
      traversingNode = traversingNode.next;
    }
    return {};
  }
  console.log(findCircleBiginning(linkedList.head));
})();

/*
2.7 Implement a function to check if a linked list is a palindrome.
*/
function reverseLinkedList(linkedList) {
  let p = linkedList.head;
  let q = null;
  let r;
  while (p) {
    r = q;
    q = p;
    p = p.next;
    q.next = r;
  }
  linkedList.head = q;
}

function reverseLinkedListWithRecursion(
  previousNode = null,
  currentNode,
  linkedList
) {
  if (currentNode) {
    reverseLinkedListWithRecursion(currentNode, currentNode.next, linkedList);
    currentNode.next = previousNode;
  } else {
    linkedList.head = previousNode;
  }
}

(function() {
  let linkedList = createLinkList([1, 2, 3, 2, 1]);
  let reversedLinkedList = createLinkList([1, 2, 3, 4, 5]);
  // reverseLinkedList(reversedLinkedList);
  reverseLinkedListWithRecursion(
    null,
    reversedLinkedList.head,
    reversedLinkedList
  );

  function checkPalindrome(ll1, ll2) {
    while (ll1) {
      if (ll1.data === ll2.data) {
        ll1 = ll1.next;
        ll2 = ll2.next;
      } else {
        return false;
      }
    }

    return true;
  }
  console.log(checkPalindrome(linkedList.head, reversedLinkedList.head));
})();

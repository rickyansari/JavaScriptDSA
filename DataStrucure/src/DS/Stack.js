class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack[this.stack.length] = item;
    //this.stack.push(item);
  }

  pop() {
    if (this.stack.length) {
      // this.stack.pop();
      this.stack.splice(this.stack.length - 1, 1);
    } else {
      throw new Error("Stack is underFlow");
    }
  }
}

// otherPopImplementation

function pop(array) {
  return array.reduce((acc, curr, index) => {
    if (index < array.length - 1) {
      acc[index] = curr;
    }
    return acc;
  }, []);
}

function splice(array, initialIndex, count) {
  return array.reduce((acc, curr, index) => {
    if (initialIndex - 1 < index && index < initialIndex + count) {
      return acc;
    }
    acc[acc.length] = curr;
    console.log(acc);
    return acc;
  }, []);
}

console.log(splice([0, 1, 2, 3, 4, 5, 6, 7], 4, 2));
console.log(pop([1, 2, 3, 4]));

let stairs = new Stack();
stairs.push("golden stairs");
stairs.push("blue stairs");
stairs.pop();
stairs.pop();
// stairs.pop();
console.log(stairs.stack);
console.log(stairs);

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length += 1;
  }

  pop() {
    popedElement = this.data[this.length];
    this.length -= 1;
    return popedElement;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const deletedItem = this.data[index];
    for (let i = index; i <= this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length -= 1;
    return deletedItem;
  }
}

const array = new ArrayList();
array.push(3);
array.push(5);
array.get(2);
array.pop();
array.push(4);

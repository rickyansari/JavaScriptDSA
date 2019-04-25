function insertionSort(array) {
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const splicedItem = array.splice(i, 1);
        array.splice(j, 0, splicedItem[0]);
      }
    }
  }
}

var array = [1, 5, 3, 2, 6];
insertionSort(array);
console.log(array);

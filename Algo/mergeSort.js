function merge(array1) {}

function divide(array) {
  if (array.length % 2 === 0) {
  } else {
  }
}

function mergeSort(input) {
  if (input.length < 2) return input;
  const { firstHalf, lastHalf } = divideArray(input);
  const sortedLeftArray = mergeSort(left);
  const sortedRightArray = mergeSort(right);
  combine(sortedLeftArray, sortedRightArray);
}

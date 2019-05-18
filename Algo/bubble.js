function bubbleSort(array, length) {
  stat.loops += 1;
  if (length < 2) return;
  for (var i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
    }
  }
  bubbleSort(array, length - 1);
}

function swap(array, first, last) {
  stat.totalSwaps += 1;
  const temp = array[first];
  array[first] = array[last];
  array[last] = temp;
}

// Non Recursive(NR) solution

function bubbleSortNR(array) {
  const { length } = array;
  for (var i = 0; i < length - 1; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      stat.loops += 1;
      if (array[j] > array[j + 1]) swap(array, j, j + 1);
    }
  }
}

// Minor optimization
function OptimizedBubbleSort(array, length, previousLoopSwaps = 1) {
  stat.loops += 1;
  if (length < 2) return;
  if (previousLoopSwaps === 0) return;
  previousLoopSwaps = 0;
  for (var i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      previousLoopSwaps++;
      swap(array, i, i + 1);
    }
  }
  OptimizedBubbleSort(array, length - 1, previousLoopSwaps);
}

let unsortedArray = [3, 6, 2, 8, 9, 10];
let sortedArray = [4, 4, 4, 4, 4];
let reverseSortedArray = [10, 8, 5, 3, 2];

showResults(unsortedArray, "unsortedArray");
showResults(sortedArray, "sortedArray");
showResults(reverseSortedArray, "reverseSortedArray");

function showResults(sampleInput, heading) {
  console.log(` 
              HEADING:   ${heading} 

  `);
  let input = sampleInput;
  let initialStats = { totalSwaps: 0, loops: 0 };
  let stat = initialStats;
  bubbleSort(input, input.length);
  console.log(`bubbleSort
               Sorted Array: ${input}, 
               stats:  { Total Swaps  ${stat.totalSwaps}   LOOPS: ${
    stat.loops
  } }
  `);
  input = sampleInput;
  stat = initialStats;
  bubbleSortNR(input, input.length);
  console.log(`bubbleSortNR
                Sorted Array: ${input}, 
                stats:  { Total Swaps  ${stat.totalSwaps}   LOOPS: ${stat.loops}
`);

  input = sampleInput;
  stat = initialStats;
  OptimizedBubbleSort(input, input.length);
  console.log(`bubbleSortNR
                Sorted Array: ${input}, 
                stats:  { Total Swaps  ${stat.totalSwaps}   LOOPS: ${stat.loops}
  `);
}

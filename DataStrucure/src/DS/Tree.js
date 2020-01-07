function moveItem(fr, to, array) {
  let item = array[fr];
  array.splice(fr, 1);
  array.splice(to, 0, item);
  return array;
}

function arraymove(fromIndex, toIndex, arr) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

function minimumBribes(q) {
  let clonedArray = [...q];
  let totalShift = 0;
  for (let i = 0; i < q.length; i++) {
    if (clonedArray[i] === i + 1) continue;
    let numberOfSwipes = clonedArray[i] - (i + 1);
    if (numberOfSwipes > 2) {
      console.log("Too chaotic");
      return;
    }
    if (numberOfSwipes > 0) {
      totalShift += numberOfSwipes;
      arraymove(i, clonedArray[i] - 1, clonedArray);
    }
  }
  console.log(totalShift);
}

minimumBribes([5, 2, 1, 4, 3]);

function quickSort(nums) {
  const { length } = nums;
  if (length <= 1) return nums || [];
  const pivot = nums[length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 4, 5, 2]));

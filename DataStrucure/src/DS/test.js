const input = [1, 2, 3, 4, 9, 9, 9, 10, 10, 10];
const doubleIt = x => x * 2;

const alternate = doubleIt => (item, index) => {
  if (index % 2) return;
  return doubleIt(item);
};

var wrapped = alternate(doubleIt);

input.forEach((item, index) => console.log(wrapped(item, index)));

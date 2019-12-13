function flattenArray(arr) {
  let newArray = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      newArray = [...newArray, ...flattenArray(element)];
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}

function flattenArrayReduce(arr) {
  return arr.reduce((acc, element) => {
    if (Array.isArray(element)) return [...acc, ...flattenArray(element)];
    acc.push(element);
    return acc;
  }, []);
}

console.log(flattenArray([1, [[2, [3, [4, [5]]]]]]));
console.log(flattenArrayReduce([1, [[2, [3, [4, [5]]]]]]));

Function.prototype.bind = function(context) {
  const _thisFunction = this;
  return function(args = []) {
    return _thisFunction.apply(context, [...args]);
  };
};

function foo() {
  console.log(this.bar);
}

baz = foo.bind({ bar: "hello" });
console.log(baz());

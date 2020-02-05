function getAllPermutations(string) {

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  var results = [];

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

// Easy to understand
function permut(string) {
if (string.length < 2) return [string];
  var permutations = [];
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (string.indexOf(char) != i) continue;
    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
    let permutationsOfRemainingString = permut(remainingString);
    for (var subPermutation of permutationsOfRemainingString) {
      permutations.push(char + subPermutation)
    }
  }
  return permutations
}
var myString = "xyz";
console.log(permut(myString))

let A =[1,2,3,4]
function Binary(n){
  if(n<1) {
    console.log(A)
  }else {
    A[n-1]=0;
    Binary(n-1);
    A[n-1]=1;
    Binary(n-1)
  }
}
Binary(3)
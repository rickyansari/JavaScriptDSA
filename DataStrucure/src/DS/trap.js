function max(a,b){
  return a>b ?a:b;
}

function min(a,b){
  return a<b ?a:b;
}
function trap(A) {
  var lastIndex = A.length - 1;
  if (lastIndex <= 1) return 0;
  var total=0;
  var maxFromLeft = [];
  maxFromLeft[0]=0
  var maxFromRight = [];
  maxFromRight[lastIndex]=0;
  for (i = 1; i < A.length; i++) {
    maxFromLeft[i] = max(A[i], maxFromLeft[i - 1])
    maxFromRight[lastIndex-i] = max(A[i], maxFromRight[lastIndex-i + 1])
  }
  for (i = 0; i < A.length; i++) {
    total = total+ ((min(maxFromLeft[i], maxFromRight[i]) -A[i])>0 ?(min(maxFromLeft[i], maxFromRight[i]) -A[i]):0 );
  }
  return total
}

trap([ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]
  )
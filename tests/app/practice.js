var permute = function(arr, accum) { debugger
  var results = [];
  var accum = accum || [];

  if (arr.length === 0) {
    return [accum];
  }

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var remainingNums = arr.slice(0, i).concat(arr.slice(i+1));
    results = results.concat(permute(remainingNums, accum.concat(num)))
  }

  return results;
}


console.log(permute([1,2,3]));

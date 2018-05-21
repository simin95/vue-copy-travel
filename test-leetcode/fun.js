var countAndSay = function(n) {
  var result = [1];
  for (var i = 2; i <= n; i++) {
    result = nextSeq(result);
    console.log(result);
  }
  return result.join("");
};
var nextSeq = function(result) {
  console.log(result);
  var len = result.length;
  var tmp = result[len - 1];
  var count = 0;
  for (var i = len - 1; i >= 0; i--) {
    while (result[i] === tmp) {
      count++;
      continue;
    }
    result.splice(i, 0, count);
    count = 1;
    tmp = result[i];
  }
  return result;
};
nextSeq([1, 2, 1, 1]);

function fibRec(num, first = 0, second = 1, arr = []) {
  if (num === 0) return arr;
  arr.push(first);
  return fibRec(num - 1, second, first + second, arr);
}

console.log(fibRec(4));

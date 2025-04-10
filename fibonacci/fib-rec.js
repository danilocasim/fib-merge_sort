function fibRec(num) {
  if (num < 2) return num;

  return fibRec(num - 1);
}

console.log(fibRec(9));

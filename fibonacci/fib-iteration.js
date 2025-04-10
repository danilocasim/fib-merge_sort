function fibIteration(num) {
  const fibArr = [];
  let first = 0;
  let second = 1;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum = first + second;
    fibArr.push(first);
    first = second;
    second = sum;
  }

  return fibArr;
}

console.log(fibIteration(8));

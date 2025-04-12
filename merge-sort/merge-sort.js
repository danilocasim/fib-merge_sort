function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.round(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));

  let i = 0;
  let j = 0;
  const sortedArr = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j] || left[i] === right[j]) {
      sortedArr.push(left[i++]);
    }

    if (left[i] > right[j]) {
      sortedArr.push(right[j++]);
    }
  }

  if (i < left.length) {
    while (i < left.length) {
      sortedArr.push(left[i++]);
    }
  }

  if (j < right.length) {
    while (j < right.length) {
      sortedArr.push(right[j++]);
    }
  }
  return sortedArr;
}

console.log(mergeSort([105, 79, 100, 110]));

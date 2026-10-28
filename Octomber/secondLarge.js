function secondLargr(arr) {
  let max = -Infinity;
  let secondmax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondmax = max;
      max = arr[i];
    } else if (arr[i] > secondmax && arr[i] !== max) {
      secondmax = arr[i];
    }
  }

  return secondmax;
}

console.log(secondLargr([1, 2, 3, 4])); // 3
console.log(secondLargr([10, 5, 20, 8, 20])); // 10
console.log(secondLargr([5, 5, 5])); // null

function findmax(arr, n) {
  if (n === 1) {
    return arr[0];
  }
  let last = arr[n - 1];

  let answer = findmax(arr, n - 1);
  if (last > answer) {
    return last;
  } else {
    return answer;
  }
}
let arr = [4, 8, 2, 10, 6];

console.log(findmax(arr, arr.length));



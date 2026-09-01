// function reverse(x) {
//   let sign = x < 0 ? -1 : 1;
//   x = Math.abs(x);
//   let rev = 0;
//   while (x > 0) {
//     let digit = x % 10;
//     // rev = rev * 10 + digit;
//     x = Math.floor(x / 10);
//     if (
//       rev > Math.floor((2 ** 31 - 1) / 10) ||
//       (rev === Math.floor((2 ** 31 - 1) / 10) && digit > 7)
//     ) {
//       return 0;
//     }
//     rev = rev * 10 + digit;
//   }
//   return rev * sign;
// }
// console.log(reverse(123));
// console.log(reverse(-321));

// function counTnegative(arr) {
//   if (!Array.isArray(arr)) {
//     return false;
//   }
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
//       return false;
//     }
//     if (arr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(counTnegative([-1, 0, -1]));


// function smallestNumber(arr){
//   if(arr.length || Array.isArray!==(arr){
//     return
//   })

// }
// console.log(smallestNumber([3,1,2]))
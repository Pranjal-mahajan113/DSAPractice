// ? Q1--SUM NUmber

// function sum(...args) {
//   let sumNum = 0;
//   for (let i = 0; i < args.length; i++) {
//     // console.log(args[i])
//     sumNum += args[i];
//   }
//   return sumNum;
// }
// console.log(sum(1, 3, 4));

//==============================================================

// function ReduceSum(...args) {
//   return args.reduce((acc, cuur) => acc + cuur, 0);
// }
// console.log(ReduceSum(3, 56));

// ?___Q2____

// let secondHighest = function (s) {

//   let largest = -1;
//   let secondLarget = -1;

//   for (let char of s) {

//     if (char >= "0" && char <= "9") {

//       let num = Number(char);

//       if (num > largest) {
//         secondLarget = largest;
//         largest = num;
//       }
//       else if (num > secondLarget && num < largest) {
//         secondLarget = num;
//       }
//     }
//   }

//   return secondLarget;
// };
// console.log(secondHighest("dfa12321afd")); // 2
// console.log(secondHighest("abc1111"));     // -1
// console.log(secondHighest("sjhtz8344"));   // 4

// ?___3___
let isPalindrome = function (x) {
  if (x < 0) return false;

  let original = x;
  let num = 0;
  // console.log(num)
  while (x > 0) {
    let digit = x % 10;
    num = num * 10 + digit;
    x = Math.floor(x / 10);
  }
  return original === num;
};
console.log(isPalindrome(121));

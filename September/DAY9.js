// function findmax(arr, n) {
//   if (n === 1) {
//     return arr[0];
//   }
//   let last = arr[n - 1];

//   let answer = findmax(arr, n - 1);
//   if (last > answer) {
//     return last;
//   } else {
//     return answer;
//   }
// }
// // let arr = [4, 8, 2, 10, 6];

// // console.log(findmax(arr, arr.length));

// function sum(arr, n) {
//   if (n === 1) {
//     return arr[0];
//   }
//   let last = arr[n - 1];
//   let answer = sum(arr, n - 1);
//   return last + answer;
// }

// let arr = [3, 5, 2, 7, 4];
// console.log(sum(arr,arr.length))


// function productofArray(arr,n){
//     if(n===1){
//         return arr[0];
//     }
//     let last = arr[n-1];
//     let answer=productofArray(arr,n-1)
//     return last * answer;
// }
// console.log(product([2, 3, 4, 5], 4));


function maxNumber(arr,n){
    if(n===1){
        return arr[0]
    }
    let last=arr[n-1];
    let answer=maxNumber(arr,n-1)
    if(last>answer){
        return last;
    }
    else{
        return answer;
    }
}
let arr=[5, 12, 7, 20, 9];
console.log(maxNumber(arr,arr.length))
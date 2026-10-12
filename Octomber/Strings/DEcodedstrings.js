// var decodeString = function(s) {

//     let stack = [];
//     let num = 0;
//     let current = "";

//     for (let ch of s) {
//         if (ch >= "0" && ch <= "9") {
//             num = num * 10 + Number(ch);
//         }
//         else if (ch === "[") {
//             stack.push(current);
//             stack.push(num);

//             current = "";
//             num = 0;
//         }
//         else if (ch === "]") {
//             let repeat = stack.pop();
//             let previous = stack.pop();

//             current = previous + current.repeat(repeat);
//         }
//         else {
//             current += ch;
//         }
//     }

//     return current;
// };

function decodeString(s) {
  let stack = []; //purani information save karne ke liye.
  let num = 0; //repeat karne wala number store karne ke liye.
  let current = ""; //decoded string banane ke liye.
  for (let ch of s) {
    if (ch >= "0" && ch <= "9") {
      num = num * 10 + Number(ch);
    } else if (ch === "[") {
      stack.push(current);

      stack.push(num);
      current = "";
      num = 0;
    } else if (ch === "]") {
      let repeat = stack.pop();
      let previous = stack.pop();
      current = previous + current.repeat(repeat);
    } else {
      current += ch;
    }
  }
  return current;
}

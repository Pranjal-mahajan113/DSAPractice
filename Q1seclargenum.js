// Q1 - Second Largest Number

// Given an array Arr of Size N, print second Largest

// distinct element from an array 

// Input:[12,35,1,10,34,1] ----->>> Output:34
// Input:[10,5,10] ---->>>> Outpue:5

// [12,35,1,10,34,1] => [1,1,10,12,34,35]

function secondlargest(arr) {
    const uniqueArr = Array.from(new Set(arr));
    uniqueArr.sort((a, b) => {
        return b - a;
    });

    if (uniqueArr.length >= 2) {
        return uniqueArr[1];

    }else {
        return -1;
    }

    console.log(uniqueArr);

}

console.log(secondlargest([12, 35, 1, 10, 34, 1]));
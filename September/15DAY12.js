function subsets(arr, n, index, temp) {

    // Base case
    if (index === n) {
        console.log(temp);
        return;
    }

    // Choice 1: Don't take
    subsets(arr, n, index + 1, temp);

    // Choice 2: Take
    temp.push(arr[index]);

    subsets(arr, n, index + 1, temp);

    // Undo the choice
    temp.pop();
}

let arr = [1, 2, 3];

subsets(arr, arr.length, 0, []);
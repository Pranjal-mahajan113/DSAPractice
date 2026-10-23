function sumOfNumbers(n){
    let sum =0;
    for(let i=0;i<n.length;i++){
        sum+=n[i]

    }
    return sum;
}
n=[1,2,3]
console.log(sumOfNumbers(n))
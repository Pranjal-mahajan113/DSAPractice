function balancedStringSplit(s){
    let balance=0;
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="R"){
            balance++;
        }
        else{
            balance--;
        }
        if(balance===0){
            count++
        }
    }
    return count;
}
let s = "RLRRLLRLRL"
console.log(balancedStringSplit(s))
function reorganizeString(s){
    let freq={};
    for(let i=0;i<s.length;i++){
        let ch=s[i];
        if(freq[ch]){
            freq[ch]++
        }
        else{
           freq[ch]=1;
        }

    }
    return freq
}
s="aab";
console.log(reorganizeString(s))

function maxFreqSum(s){
let freq={};
 //1.har charater frequency count
 for(let i=0;i<s.length;i++){
    let ch=s[i];
if(freq[ch]){
    freq[ch]++
}   
else{
    freq[ch]=1
}
 }
 let maxvowel=0;
 let maxConsonat=0;
 let vowels=["a","e","i","o","u"]
 //2.har charater ki frequency check kro;
 for(let i=0;i<s.length;i++){
    if(vowels.includes(s[i])){
     if(freq[s[i]]>maxvowel){
        maxvowel=freq[s[i]]

     }   
    }
    else{
        if(freq[s[i]]>maxConsonat){
            maxConsonat=freq[s[i]]

        }
    }
 }
 return maxvowel+maxConsonat
}
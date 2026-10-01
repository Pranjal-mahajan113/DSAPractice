function numJewelsInstone(jewels, stones) {
  let count=0;
  for(let i=0;i<stones.length;i++){
    if(jewels.includes(stones[i])){
        count++
    }
  } 
  return count; 
};
let  jewels = "aA"
let stones = "aAAbbbb"
console.log(numJewelsInstone(jewels,stones))

function targetReturn(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return i;
        }
    }
}
console.log(targetReturn([10,25,7,40,15],40))
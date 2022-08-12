/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let pivotIndex = -1
    
    for(let i=0; i<nums.length; i++){
        
        let leftSum = 0;
        let rightSum = 0;
        
        if(i !== 0){
            for(let j=(i-1); j>=0; j--){
                leftSum += nums[j];
            } 
        }
        
        if(i !== (nums.length - 1))
        for(let k=(i+1); k<nums.length; k++){
            rightSum += nums[k];
        }
        
        if(leftSum === rightSum){
            pivotIndex = i;
            break;
        }
    }
    
    return pivotIndex;
};
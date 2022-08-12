/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSumArr = [];
    
    for(let i=0; i<nums.length; i++){
        let numSum = 0;
        
        for(let j=i; j>=0; j--){
            numSum += nums[j]
        }
        runningSumArr.push(numSum)        
    }
    return runningSumArr;                      
};
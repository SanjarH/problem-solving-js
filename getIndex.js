
function twoSum(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const s = target - num;
        if (s in result){
            return[result[s], i];
           
        }
        result[num] = i;

    }

    }

n = [3,2,4]
t = 6
console.log(twoSum(n,t));
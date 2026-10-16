function twoSum(arr, target) {
    
    let mp = new Map()

    for(let i = 0;i < arr.length;i++){
        
        let complement = target - arr[i]

        if(mp.has(complement)){
      return [mp.get(complement),i]
        }

        mp.set(arr[i],i)
    }
    
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));      

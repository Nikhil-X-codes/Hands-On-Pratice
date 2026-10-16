function firstNonRepeating(str) {
    
    let mp = new Map()

    for(let c of str){
        mp.set(c,(mp.get(c) || 0) + 1)
    }

    for(let c of str){
        if(mp.get(c) == 1) return c
    }

    return null;
}

console.log(firstNonRepeating("aabbcddee")); 
console.log(firstNonRepeating("aabb"));      
console.log(firstNonRepeating("swiss"));     

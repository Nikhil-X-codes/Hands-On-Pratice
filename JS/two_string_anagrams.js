function areAnagrams(str1, str2) {
    
    let mp1 = new Map()
    let mp2 = new Map()

    for(let char of str1){
        mp1.set(char,(mp1.get(char) || 0) + 1)
    }

    for(let char of str2){
        mp2.set(char,(mp2.get(char) || 0) + 1)
    }

    if(mp1.size != mp2.size){
        return false;
    }

    for(let [key,val] of mp1){
        
        if(!mp2.has(key) || mp2.get(key) != val){
            return false;
        }
    }

    return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("aabb", "bbaa"));     // true
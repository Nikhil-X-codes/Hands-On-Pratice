function countOccurrences(arr) {
    
    let mp = new Map()

    for(let num of arr){
        mp.set(num,(mp.get(num) || 0) + 1)
    }

    return Object.fromEntries(mp);
}

console.log(
    countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
);
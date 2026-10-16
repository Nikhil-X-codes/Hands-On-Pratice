
function removeDuplicates(arr) {
    
    let set = new Set()

    for(let i of arr){
        set.add(i)
    }

    return [...set]

    // return Array.from(set)
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));

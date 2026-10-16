function secondLargest(arr) {
    let n = arr.length;

    if (n < 2) {
        return null;
    }

    let maxi = -Infinity;
    let secondMaxi = -Infinity;

    for (let i = 0; i < n; i++) {

        if (arr[i] > maxi) {
            secondMaxi = maxi;
            maxi = arr[i];
        }
    
        else if (arr[i] < maxi && arr[i] > secondMaxi) {
            secondMaxi = arr[i];
        }
    }

    return secondMaxi === -Infinity ? null : secondMaxi;
}

console.log(secondLargest([10, 5, 8, 20, 20])); 
console.log(secondLargest([5, 5, 3]));          
console.log(secondLargest([1, 1, 1]));          
console.log(secondLargest([-1, -5, -3]));       
console.log(secondLargest([5, 3, 5, 3]));       
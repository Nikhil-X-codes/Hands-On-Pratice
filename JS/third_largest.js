
function thirdLargest(arr) {
    let n = arr.length;

    if (n < 3) return null;

    let maxi = -Infinity;
    let secondmaxi = -Infinity;
    let thirdmaxi = -Infinity;

    for (let i = 0; i < n; i++) {

        if (arr[i] > maxi) {
            thirdmaxi = secondmaxi;
            secondmaxi = maxi;
            maxi = arr[i];
        }

        else if (arr[i] < maxi && arr[i] > secondmaxi) {
            thirdmaxi = secondmaxi;
            secondmaxi = arr[i];
        }

        else if (arr[i] < secondmaxi && arr[i] > thirdmaxi) {
            thirdmaxi = arr[i];
        }
    }

    return thirdmaxi === -Infinity ? null : thirdmaxi;
}

console.log(thirdLargest([10, 5, 8, 20, 15])); 
console.log(thirdLargest([5, 5, 4, 3, 3, 2])); 
console.log(thirdLargest([1, 1, 2]));          

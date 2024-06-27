// From Coder Army
// second largest

function secondLargest(arr, n) {
    let firstMax = 0;
    let secondMax = 0;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > firstMax) {
            firstMax = arr[i]
        }
    }

    for (let j = 0; j < n - 1; j++) {
        if (arr[j] !== firstMax) {
            secondMax = Math.max(secondMax, arr[j])
        }
    }

    return secondMax
}

let arr = [10, 5, 10]
console.log(secondLargest(arr, arr.length)); // 5
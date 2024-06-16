// binary search series ka 3rd vala video hai jisse last me solve kiya gya hai

// from chat gpt

function findKthPositive(arr, k) {
    let missingCount = 0;
    let currentNumber = 1;
    let arrIndex = 0;

    while (missingCount < k) {
        if (arrIndex < arr.length && arr[arrIndex] === currentNumber) {
            arrIndex++;
        } else {
            missingCount++;

            if (missingCount === k) {
                return currentNumber;
            }
        }
        currentNumber++;
    }

    return currentNumber + (k - missingCount) - 1;
}

const arr = [2, 3, 4, 7, 11, 12];
const k = 5;
console.log(findKthPositive(arr, k));
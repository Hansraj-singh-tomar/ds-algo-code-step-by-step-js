// Extend Array prototype to add a last() method
Array.prototype.last = function () {
    // Check if the array is empty
    if (this.length === 0) {
        return -1; // If empty, return -1
    } else {
        return this[this.length - 1]; // Otherwise, return the last element
    }
};

// Example usage:
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.last()); // Output: 5 (last element)

let arr2 = [];
console.log(arr2.last()); // Output: -1 (array is empty)

let arr3 = [10];
console.log(arr3.last()); // Output: 10 (only one element in the array)

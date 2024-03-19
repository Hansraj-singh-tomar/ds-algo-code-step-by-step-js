// First Method
function chunkArray(arr, size) {
    if (arr.length == 1) {
        return [];
    }

    let chunkedArray = [];

    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size));
    }

    return chunkedArray;
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = 3;
console.log(chunkArray(arr, size)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]



// Secocnd Method
function chunkArray(arr, size) {
    // Initialize an empty array to store the chunked arrays
    let chunkedArray = [];

    // Loop through the input array
    for (let i = 0; i < arr.length; i += size) {
        // Create a new chunk array
        let chunk = [];

        // Push elements into the chunk array until size or end of the array is reached
        for (let j = i; j < Math.min(i + size, arr.length); j++) {
            for (let j = i; j < i + size; j++) {
                chunk.push(arr[j]);
            }

            // Push the chunk into the chunked array
            chunkedArray.push(chunk);
        }

        return chunkedArray;
    }

    // Example usage:
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let size = 3;
    console.log(chunkArray(arr, size)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

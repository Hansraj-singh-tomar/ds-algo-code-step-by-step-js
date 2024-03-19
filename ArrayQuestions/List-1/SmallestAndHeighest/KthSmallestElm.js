// Q. find K'th smallest element in array

function KthSmallest(arr, n, k) {
    arr = [...new Set(arr)]; // to remove duplicate values from array 
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}
let arr = [12, 4, 4, 753, 33];
let n = arr.length;
let k = 2;
console.log(KthSmallest(arr, n, k));
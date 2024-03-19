function KthSmallest(arr, n, k) {
    arr = [...new Set(arr)]
    arr.sort((a, b) => a - b);
    return arr[n - k]
}

let arr = [12, 4, 4, 753, 33];
console.log(KthSmallest(arr, arr.length - 1, 2));
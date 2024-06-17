function findPeakElm(arr) {
    let start = 0;
    let end = arr.length - 1;

    if (arr.length == 1) return arr[0];
    if (arr[start] > arr[start + 1]) return arr[start];
    if (arr[end] > arr[end - 1]) return arr[end];

    while (start <= end) {
        // let mid = Math.floor(start + (end - start) / 2);
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return arr[mid];
        } else if (arr[mid - 1] > arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

let arr = [2, 4, 6, 8, 10, 8, 5, 2];  // 10
// let arr = [6, 7, 8, 9]; // 9
// let arr = [3]; // 3
// let arr = [1, 6, 3, 2, 1];
console.log(findPeakElm(arr));

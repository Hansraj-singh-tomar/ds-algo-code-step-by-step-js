function rotateArrByOne(arr, n) {
    let temp = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = temp;
    return arr;
}

let arr = [1, 2, 3, 4, 5];

console.log(rotateArrByOne(arr, arr.length)); // [5, 1, 2, 3, 4]
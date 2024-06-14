function insertionSortUsingRec(arr, start = 1) {

    if (start >= arr.length) {
        return;
    }

    for (let i = start; i >= 0; i--) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }

    insertionSortUsingRec(arr, start + 1)
}


let arr = [15, 20, 3, 9, 0];
insertionSortUsingRec(arr);
console.log(arr);
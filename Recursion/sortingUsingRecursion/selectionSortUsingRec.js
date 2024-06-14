function selectionSortUsingRec(arr, start = 0) {
    if (start >= arr.length - 1) {
        return arr;
    }

    let minValId = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < arr[minValId]) {
            minValId = i;
        }
    }

    let temp = arr[minValId];
    arr[minValId] = arr[start];
    arr[start] = temp;

    return selectionSortUsingRec(arr, start + 1);
}


let arr = [23, 1, 43, 54];
console.log(selectionSortUsingRec(arr));
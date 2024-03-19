function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(0 + (arr.length - 0) / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] > rightArr[j]) {
            result.push(rightArr[j]);
            j++;
        } else {
            result.push(leftArr[i]);
            i++;
        }
    }
    return [...result, ...leftArr.slice(i), ...rightArr.slice(j)]
}

let arr = [1, 44, 5, 35, 8, 21, 4, 3, 2];
console.log(mergeSort(arr));
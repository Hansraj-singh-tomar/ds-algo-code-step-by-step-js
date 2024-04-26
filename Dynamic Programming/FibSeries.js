let arr = new Array(5 + 1).fill(-1);

function fibSeries(n) {
    if (arr[n] !== -1) {
        return arr[n]
    }
    if (n == 1 || n == 0) {
        arr[n] = n;
    } else {
        arr[n] = fibSeries(n - 1) + fibSeries(n - 2)
    }

    return arr[n];
}

console.log(fibSeries(5)); // 5

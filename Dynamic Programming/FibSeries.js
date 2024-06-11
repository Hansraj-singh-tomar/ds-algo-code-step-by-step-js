// DP two approach :-
// DP prerequisite is recursion
// Quate - Those who forget the past, are condemned to repeat it.

// We have to two approach to resolve it
// 1. Top-Down => recursion + Memoization
// 2. Bottom-Up => tabulation
// Then, usme space optimation lgayenge

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


// fib Series using recursion
// const fib = (n) => {
//   if (n <= 1) return n;

//   return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(3)); // 2
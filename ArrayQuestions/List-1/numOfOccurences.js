// Q. Count number of occurrences (or frequency) in a sorted array


// First Method
// function numOcc(arr, k, n){
//     let count = 0;
//     for(let i = 0; i < n; i++){
//         if(arr[i] === k){
//             count++;
//         }
//     }
//     return count
// }

// let arr = [2,3,4,3,3,7,2];
// let k = 3
// console.log(numOcc(arr, k, arr.length));  // 3


// Using Map Method 

function countOccurrences(arr, x, N)
{
      let mp = new Map();
      for (let i = 0; i < N; i++) {
           mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
       }
      if (!mp.has(x))
           return 0;
      return mp.get(x);
}
 
// Driver Code
let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let x = 2;
let N = arr.length;

console.log(countOccurrences(arr, x, N)); // 4


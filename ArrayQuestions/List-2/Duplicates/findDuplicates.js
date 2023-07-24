// Find All Duplicates in an array

// 1.
// let arr = [4,3,2,7,8,2,3,1];
// let set = new Set();
// let arr2 = []

// for(let i = 0; i < arr.length; i++){
//     if(set.has(arr[i])){
//         arr2.push(arr[i])
//     }
//     set.add(arr[i])
// }

// console.log(set);  // Set(6) { 4, 3, 2, 7, 8, 1 }
// console.log(arr2);  // [2,3]

//2 - codebix
// let arr = [4,3,2,7,8,2,3,1];

// let res = [];

// for(let i = 0; i < arr.length; i++) {
//     let index = Math.abs(arr[i]) - 1; // -1 karke visited kar denge iss index ko

//     if(arr[index] < 0){ // means that, arr[index] ki value negative hai then that value is already marked visited
//         res.push(Math.abs(arr[i]));
//     }

//     arr[index] = -arr[index];
// }

// // console.log(arr);
// console.log(res);  // [2,3]
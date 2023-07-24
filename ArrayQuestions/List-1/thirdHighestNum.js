// to run this code just write node index.js 

// function findThirdHighestAndThirdLowest(arr) {
//     let firstHighest = -Infinity;
//     let secondHighest = -Infinity;
//     let thirdHighest = -Infinity;
  
//     let lowest = Infinity;
//     let secondLowest = Infinity;
//     let thirdLowest = Infinity;
  
//     for (let i = 0; i < arr.length; i++) {
//       const current = arr[i];
  
//       // Update firstHighest, secondHighest, and thirdHighest
//       if (current > firstHighest) {
//         thirdHighest = secondHighest;
//         secondHighest = firstHighest;
//         firstHighest = current;
//       } else if (current > secondHighest) {
//         thirdHighest = secondHighest;
//         secondHighest = current;
//       } else if (current > thirdHighest) {
//         thirdHighest = current;
//       }
  
//       // Update lowest, secondLowest, and thirdLowest
//       if (current < lowest) {
//         thirdLowest = secondLowest;
//         secondLowest = lowest;
//         lowest = current;
//       } else if (current < secondLowest) {
//         thirdLowest = secondLowest;
//         secondLowest = current;
//       } else if (current < thirdLowest) {
//         thirdLowest = current;
//       }
//     }
  
//     return [thirdHighest, thirdLowest];
//   }
  
//   // Example usage
//   const array = [1, 4, 2, 8, 5, 3, 9, 6, 7];
//   const result = findThirdHighestAndThirdLowest(array);
//   console.log(result); // Output: [7, 3]


//------------------------------------------------------------------------------


// Q. find K'th smallest element in array

// function KthSmallest(arr, n, k){
//   arr.sort((a,b) => a-b);
//   return arr[k-1];
// }
// let arr = [12,4,4,753,33];
// let n = arr.length;
// let k = 2;
// console.log(KthSmallest(arr, n, k));


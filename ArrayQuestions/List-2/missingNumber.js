// Find the missing number

// First Method
// formula of natural sum = (n * (n + 1)) / 2;
function findMissingNumber(arr) {
  const n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
  }

  return sum;
}

// Example usage
const numbers = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(numbers);
console.log("The missing number is:", missingNumber);



// Second Method

var arr = [1,2,3,5];
var count = arr.length+1;
var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (arr.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);


// 3. Not usable

// function getMissingNo(arr, n){
//     let total = 1;

//     for(let i = 0; i < (n+1); i++){
//         total  += i;
//         total -= a[i-2]
//     }
//     return total;
// }

// let arr = [1,2,3,5];
// let n = arr.length;
// console.log(getMissingNo(arr, n));
// Find the first repeating element in an array of integers
// input - [10, 5, 3, 4, 3, 5, 6]
// output - 5 // 5 is first element that is repeated


// 1. 
// function firstRepeatingElement(arr) {
//     // Nested loop to check for repeating elements
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             // If a repeating element is found, return its index
//             if (arr[i] === arr[j]) {
//                 return arr[i];
//             }
//         }
//     }
//     // If no repeating element is found, return -1
//     return -1;
// }

// const arr = [10, 5, 3, 4, 3, 5, 6];
// console.log(firstRepeatingElement(arr)); // 5


// 2.

function printFirstRepeating(arr)
{
	let min = -1;

	// Creates an empty hashset
	let set = new Set();

	// Traverse the input array from right to left
	for(let i = 0; i <= arr.length - 1; i++)
	{
		
		// If element is already in
		// hash set, update min
		if (set.has(arr[i]))
			min = i;
			
		// Else add element to hash set
		else
			set.add(arr[i]);
	}

	return arr[min]
}

let arr = [ 10, 5, 3, 4, 3, 5, 6 ];

console.log(printFirstRepeating(arr));
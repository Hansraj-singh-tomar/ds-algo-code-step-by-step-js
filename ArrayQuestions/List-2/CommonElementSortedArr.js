function findCommonElements(arr1, arr2, arr3) {
  const commonElements = [];
  let i = 0, j = 0, k = 0;

  // smallest element ko increase karke, we will check in if condition it is equal or not
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      commonElements.push(arr1[i]);
      i++;
      j++;
      k++;
    } else {
      const smallest = Math.min(arr1[i], arr2[j], arr3[k]);

      if (arr1[i] === smallest) {
        i++;
      }
      if (arr2[j] === smallest) {
        j++;
      }
      if (arr3[k] === smallest) {
        k++;
      }
    }
  }

  return commonElements;
}

// Example usage
const arr1 = [1, 5, 10, 20, 40, 80];
const arr2 = [6, 7, 20, 80, 100];
const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
const commonElements = findCommonElements(arr1, arr2, arr3);
console.log("Common elements:", commonElements); // Common elements: [20, 80]


// what the fuck are you doing bro you are worried about her
// and what about her how can we manage all the things
//9. Write a merge sort program in JavaScript.  
//Sample array : [34,7,23,32,5,62]
//Sample output : [5, 7, 23, 32, 34, 62]

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Already sorted if the array has 0 or 1 element
    }
  
    // Split the array into halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    // Recursively merge sort each half
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right arrays and merge them
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add remaining elements from left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Test the function with an example
  const sampleArray = [34, 7, 23, 32, 5, 62];
  const sortedArray = mergeSort(sampleArray);
  
  console.log("Sample input:", sampleArray);
  console.log("Sample output:", sortedArray);
  
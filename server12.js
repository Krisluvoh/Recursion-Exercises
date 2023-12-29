//12. Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion.  
//Test Data:
//([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6) -> 4
//([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16) -> -1

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
      return -1; // Target not found
    }
  
    const mid = Math.floor((low + high) / 2);
    const midValue = arr[mid];
  
    if (midValue === target) {
      return mid; // Found the target, return its index
    } else if (midValue < target) {
      return binarySearch(arr, target, mid + 1, high); // Search in the right half
    } else {
      return binarySearch(arr, target, low, mid - 1); // Search in the left half
    }
  }
  
  // Test the function with examples
  const sortedArray1 = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
  const target1 = 6;
  console.log(`Index of ${target1} in the array: ${binarySearch(sortedArray1, target1)}`);
  
  const sortedArray2 = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
  const target2 = 16;
  console.log(`Index of ${target2} in the array: ${binarySearch(sortedArray2, target2)}`);
  
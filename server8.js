//8. Write a JavaScript program for binary search.  
//Sample array : [0,1,2,3,4,5,6]
//console.log(l.br_search(5)) will return '5'

Array.prototype.binarySearch = function(target) {
    let low = 0;
    let high = this.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midValue = this[mid];
  
      if (midValue === target) {
        return mid; // Found the target, return its index
      } else if (midValue < target) {
        low = mid + 1; // Target is in the right half
      } else {
        high = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Target not found
  };
  
  // Test the function with an example
  const sampleArray = [0, 1, 2, 3, 4, 5, 6];
  const targetValue = 5;
  const result = sampleArray.binarySearch(targetValue);
  
  console.log(`Index of ${targetValue} in the array: ${result}`);
  
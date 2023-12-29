//4. Write a JavaScript program to compute the sum of an array of integers.  
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21

function sumArray(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
      return 0;
    } else {
      // Recursive case: sum the first element and the sum of the rest of the array
      return arr[0] + sumArray(arr.slice(1));
    }
  }
  
  // Test the function with an example
  const array = [1, 2, 3, 4, 5, 6];
  const result = sumArray(array);
  console.log("Expected Output:", result);
  
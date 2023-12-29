//3. Write a JavaScript program to get integers in the range (x, y) using recursion.  
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y) {
    // Base case: if x is greater than or equal to y, return an empty array
    if (x >= y - 1) {
      return [];
    } else {
      // Recursive case: generate array from (x + 1) to y
      return [x + 1, ...range(x + 1, y)];
    }
  }
  
  // Test the function with an example
  const result = range(2, 9);
  console.log("Expected Output:", result);
  
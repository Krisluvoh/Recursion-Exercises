//6. Write a JavaScript program to get the first n Fibonacci numbers.  
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

function fibonacci(n) {
    // Base case: if n is 1, return [0]
    if (n === 1) {
      return [0];
    } else if (n === 2) {
      // Base case: if n is 2, return [0, 1]
      return [0, 1];
    } else {
      // Recursive case: generate the next Fibonacci number by summing the last two
      const fibSeries = fibonacci(n - 1);
      fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
      return fibSeries;
    }
  }
  
  // Test the function with an example
  const n = 10; // Change n to get a different number of Fibonacci numbers
  const result = fibonacci(n);
  console.log(`The first ${n} Fibonacci numbers are:`, result);
  
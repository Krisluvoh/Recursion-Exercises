//1. Write a JavaScript program to calculate the factorial of a number.  
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
    }
  }
  
  // Test the function with an example
  const number = 5;
  const result = factorial(number);
  console.log(`The factorial of ${number} is: ${result}`);
  
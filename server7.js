//7. Write a JavaScript program to check whether a number is even or not.  

function isEven(number) {
    // Base case: if the number is 0, it's even; if 1, it's odd
    if (number === 0) {
      return true;
    } else if (number === 1) {
      return false;
    } else {
      // Recursive case: subtract 2 from the number until reaching the base cases
      return isEven(number - 2);
    }
  }
  
  // Test the function with examples
  const num1 = 8;
  const num2 = 11;
  
  console.log(`${num1} is even: ${isEven(num1)}`);
  console.log(`${num2} is even: ${isEven(num2)}`);
  

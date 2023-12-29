//5. Write a JavaScript program to compute the exponent of a number.  
//Note : The exponent of a number says how many times the base number is used as a factor.
//82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function computeExponent(base, exponent) {
    // Base case: if the exponent is 0, return 1
    if (exponent === 0) {
      return 1;
    } else {
      // Recursive case: multiply the base by itself (exponent - 1) times
      return base * computeExponent(base, exponent - 1);
    }
  }
  
  // Test the function with an example
  const baseNumber = 8;
  const exponentNumber = 2;
  const result = computeExponent(baseNumber, exponentNumber);
  console.log(`The exponent of ${baseNumber}^${exponentNumber} is: ${result}`);
  
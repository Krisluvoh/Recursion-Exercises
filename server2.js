//2. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion. 

function gcd(a, b) {
    // Base case: GCD(a, 0) = a, GCD(0, b) = b
    if (b === 0) {
      return a;
    } else {
      // Recursive case: GCD(a, b) = GCD(b, a % b)
      return gcd(b, a % b);
    }
  }
  
  // Test the function with an example
  const num1 = 48;
  const num2 = 18;
  const result = gcd(num1, num2);
  console.log(`The GCD of ${num1} and ${num2} is: ${result}`);
  
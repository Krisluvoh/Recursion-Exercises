//11. Write a JavaScript program to convert binary number (positive) to decimal number using recursion.  

function binaryToDecimal(binaryString) {
    // Base case: if the binary string is empty, the decimal value is 0
    if (binaryString === "") {
      return 0;
    } else {
      // Recursive case: convert the substring (excluding the first character) to decimal
      // Multiply the result by 2 and add the value of the first character (converted to a number)
      return 2 * binaryToDecimal(binaryString.slice(0, -1)) + Number(binaryString[binaryString.length - 1]);
    }
  }
  
  // Test the function with an example
  const binaryNumber = "1101";
  const decimalResult = binaryToDecimal(binaryNumber);
  
  console.log(`Binary: ${binaryNumber}`);
  console.log(`Decimal: ${decimalResult}`);
  
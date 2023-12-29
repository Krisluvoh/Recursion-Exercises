//13. A string consists of digits ranging from 2 to 9, inclusive. Write a JavaScript program to get all possible letter combinations that represent the number using recursion.  
//Test Data:
//("12") -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
//("9") -> ["y", "z"]

function letterCombinations(digits) {
    if (digits.length === 0) {
      return []; // Empty array for an empty string
    }
  
    const digitMap = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz",
    };
  
    function generateCombinations(index, currentCombination, result) {
      if (index === digits.length) {
        result.push(currentCombination);
        return;
      }
  
      const currentDigit = digits[index];
      const letters = digitMap[currentDigit];
  
      for (const letter of letters) {
        generateCombinations(index + 1, currentCombination + letter, result);
      }
    }
  
    const result = [];
    generateCombinations(0, "", result);
    return result;
  }
  
  // Test the function with examples
  console.log('Combinations for "12":', letterCombinations("12"));
  console.log('Combinations for "9":', letterCombinations("9"));
  
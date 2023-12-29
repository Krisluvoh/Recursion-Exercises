//10. Write a JavaScript program to check whether a given string is a palindrome or not using recursion.  
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama".
//Test Data:
//("madam") -> true
//("abdb") -> false
//("ab") -> false
//(test("a") -> true

function isPalindrome(str) {
    // Base case: if the string has 0 or 1 character, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Recursive case: check if the first and last characters are the same
    if (str[0] === str[str.length - 1]) {
      // Remove the first and last characters and check the remaining string
      return isPalindrome(str.slice(1, -1));
    } else {
      return false; // Not a palindrome if the first and last characters differ
    }
  }
  
  // Test the function with examples
  console.log('Is "madam" a palindrome?', isPalindrome("madam")); // true
  console.log('Is "abdb" a palindrome?', isPalindrome("abdb")); // false
  console.log('Is "ab" a palindrome?', isPalindrome("ab")); // false
  console.log('Is "a" a palindrome?', isPalindrome("a")); // true
  
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let filterStr = ''

  for(let char of str)
  {
    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')){
        filterStr += char.toLowerCase()
    }
  }

  let left = 0;
  let right = filterStr.length -1;

while(left < right){
  if(filterStr[left] !== filterStr[right])
  {
   return false;
  }
     left++
     right-- 
   }
return true
}

module.exports = isPalindrome;

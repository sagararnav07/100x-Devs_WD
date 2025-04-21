/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let counter = Number.NEGATIVE_INFINITY;

    if(numbers.length == 0) return undefined;

    for(const i of numbers)
    {
        if(i > counter)
        {
          counter = i
        }
    }
    return counter
}

module.exports = findLargestElement;
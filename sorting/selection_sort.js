/* Selection Sort - Ascending Order */
// Without using a set as intermediate data structure
function sort(arrayToBeSorted) {
  const array = arrayToBeSorted;
  // For each N position of the new array, select the Nth minimum value to fullfil it
  for (let n = 0; n < array.length; n++) {
    let currentMinimumIndex = n;
    // Iterate over the array to be sorted looking for its minimum value
    for (let comparingIndex = n + 1; comparingIndex < array.length; comparingIndex++) {
      // If a new minimum value is found save its index
      if (array[comparingIndex] < array[currentMinimumIndex]) {
        currentMinimumIndex = comparingIndex;
      }
    }
    // After all values in the array are compared...
    // Swap Nth value and Minimum Value in the array
    swapValues(n, currentMinimumIndex, array);
  }

  return array;
}

function swapValues(positionA, positionB, array) {
  let temp = array[positionA];
  array[positionA] = array[positionB];
  array[positionB] = temp;
}

// Using a set as intermediate data structure
// Copy the array to a set and for each position of the new array, pop the set's minimum value

const arrayToBeSorted = [8, 2, 4, 9, 1, 3, 9, 6, 5, 5, 4, 1, 8, 6, 7];
console.log('Array to be sorted:');
console.log(arrayToBeSorted);

const sortedArray = sort(arrayToBeSorted);
console.log('Sorted array:');
console.log(sortedArray);


/* Bubble Sort - Ascending Order */
function sort(arrayToBeSorted) {
  const array = [...arrayToBeSorted];
  let nextBubbledItemIndex = array.length - 1;

  // While not all items in the array are bubbled...
  while (nextBubbledItemIndex > 0) {
    // (We can optimize sorting speed by checking that array is already sorted)
    let isSorted = true;
    // Iterate over all items in the array comparing them by pairs 
    for (let comparingIndex = 0; comparingIndex < nextBubbledItemIndex; comparingIndex++) {
      // If item at the left position is bigger than item at the right position, then swap items
      if (array[comparingIndex] > array[comparingIndex + 1]) {
        swapValues(comparingIndex, comparingIndex + 1, array);
        // If we have to swap any items in the array, then the array is not sorted
        isSorted = false;
      }
    }
    nextBubbledItemIndex--;
    if (isSorted) break;
  }

  return array;
}

function swapValues(positionA, positionB, array) {
  let temp = array[positionA];
  array[positionA] = array[positionB];
  array[positionB] = temp;
}

const arrayToBeSorted = [8, 2, 4, 9, 1, 3, 9, 6, 5, 5, 4, 1, 8, 6, 7];
console.log('Array to be sorted:');
console.log(arrayToBeSorted);

const sortedArray = sort(arrayToBeSorted);
console.log('Sorted array:');
console.log(sortedArray);


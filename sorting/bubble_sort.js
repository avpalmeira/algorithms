/* Bubble Sort - Ascending Order */
function sort(arrayToBeSorted) {
  const array = arrayToBeSorted;
  let nextBubbledItemIndex = array.length - 1;

  // Iterate over all itens in the array comparing them by pairs, while lastBubbledItemIndex != 0;
  while (nextBubbledItemIndex > 0) {
    // We can optimize sorting speed by checking that array is sorted after comparing all items in the array
    let isSorted = true;
    for (let comparingIndex = 0; comparingIndex < nextBubbledItemIndex; comparingIndex++) {
      // If item at the left position is bigger than item at the right position, then swap items
      if (array[comparingIndex] > array[comparingIndex + 1]) {
        let temporaryRegistry = array[comparingIndex];
        array[comparingIndex] = array[comparingIndex + 1];
        array[comparingIndex + 1] = temporaryRegistry;
        // If we have to swap any items in the array, then the array is not sorted
        isSorted = false;
      }
    }
    nextBubbledItemIndex--;
    if (isSorted) break;
  }

  return array;
}

const arrayToBeSorted = [8, 2, 4, 9, 1, 3, 9, 6, 5, 5, 4, 1, 8, 6, 7];
console.log('Array to be sorted:');
console.log(arrayToBeSorted);

const sortedArray = sort(arrayToBeSorted);
console.log('Sorted array:');
console.log(sortedArray);

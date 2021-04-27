/* Insertion Sort Algorithm - Ascending Order */
function sort(arrayToBeSorted) {
  const array = arrayToBeSorted;

  // Iterate over all items in the array saving the reference to current item
  // ! In the insertion sort algorithm, we judge the first item of array to be sorted already
  for (let currentItemIndex = 1; currentItemIndex < array.length; currentItemIndex++) {
    let currentItem = array[currentItemIndex];
    let comparingItemIndex = currentItemIndex;
    let previousComparingItemIndex = comparingItemIndex - 1;

    // While there is a previous item relative to current item that is bigger than it...
    while (previousComparingItemIndex >= 0 && array[previousComparingItemIndex] > currentItem) {
      // Shift right the items in the array, copying the previous item to its next position
      array[comparingItemIndex] = array[previousComparingItemIndex];
      comparingItemIndex = previousComparingItemIndex;
      previousComparingItemIndex--;
    }
    // Finally when there is no previous item bigger than current...
    // Then insert item in its correct place
    array[comparingItemIndex] = currentItem;
  }
  return array;
}

const arrayToBeSorted = [8, 2, 4, 9, 1, 3, 9, 6, 5, 5, 4, 1, 8, 6, 7];
const sortedArray = sort(arrayToBeSorted);

console.log('Sorted array:');
console.log(sortedArray);

/**
 * Sorts the passed in array in ascending order without affecting the original array
 * @param data
 */
export const bubbleSort = (data: number[]): number[] => {
  const swap = (
    arrayReference: number[],
    indexOne: number,
    indexTwo: number
  ) => {
    const temp = arrayReference[indexOne];
    arrayReference[indexOne] = arrayReference[indexTwo];
    arrayReference[indexTwo] = temp;
  };

  // get the length of the array
  let length = data.length;

  // clone the array so we do not modify the array passed into this routine by reference
  const clone = data.slice();

  while (length > 1) {
    let sorted = true;

    for (let i = 0; i <= length; i++) {
      let current = clone[i];
      let next = clone[i + 1];

      if (current > next) {
        sorted = false;
        swap(clone, i, i + 1);
      }
    }

    if (sorted) {
      break;
    }

    length--;
  }

  return clone;
};

// handles normal
console.log(bubbleSort([1, 3, 5, 2, 7]));

// handles negative values and zero
console.log(bubbleSort([-4, -15, 0, 12, 30, 1, 3, 5, 2, 7]));

// handles duplicate values
console.log(bubbleSort([1, 5, 7, 1, 3, 5, 2, 7]));

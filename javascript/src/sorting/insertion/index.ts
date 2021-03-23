export const insertionSort = (data: number[]) => {
  const swap = (reference: number[], indexOne: number, indexTwo: number) => {
    if (indexOne === indexTwo) {
      return;
    }

    let temp = reference[indexOne];
    reference[indexOne] = reference[indexTwo];
    reference[indexTwo] = temp;
  };

  const clone = data.slice();

  for (let i = 1; i < clone.length; i++) {
    let currentIndex = i;

    while (currentIndex > 0 && clone[currentIndex] < clone[currentIndex - 1]) {
      swap(clone, currentIndex, currentIndex - 1);
      currentIndex--;
    }
  }

  return clone;
};

// handles normal
console.log(insertionSort([1, 3, 5, 2, 7]));

// handles negative values and zero
console.log(insertionSort([-4, -15, 0, 12, 30, 1, 3, 5, 2, 7]));

// handles duplicate values
console.log(insertionSort([1, 5, 7, 1, 3, 5, 2, 7]));

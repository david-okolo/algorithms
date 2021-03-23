export const selectionSort = (data: number[]) => {
  const clone = data.slice();

  const swap = (reference: number[], indexOne: number, indexTwo: number) => {
    if (indexOne === indexTwo) {
      return;
    }

    let temp = reference[indexOne];
    reference[indexOne] = reference[indexTwo];
    reference[indexTwo] = temp;
  };

  for (let i = 0; i < clone.length; i++) {
    let lowestIndex = i;

    for (let j = i; j < clone.length; j++) {
      const current = clone[j];

      if (clone[lowestIndex] > current) {
        lowestIndex = j;
      }
    }

    swap(clone, i, lowestIndex);
  }

  return clone;
};

// handles normal
console.log(selectionSort([1, 3, 5, 2, 7]));

// handles negative values and zero
console.log(selectionSort([-4, -15, 0, 12, 30, 1, 3, 5, 2, 7]));

// handles duplicate values
console.log(selectionSort([1, 5, 7, 1, 3, 5, 2, 7]));

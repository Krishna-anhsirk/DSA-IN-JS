// My solution

const arr = [7, 3, 8, 1, 0];

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let smallestValueIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[smallestValueIndex] > arr[j]) {
        smallestValueIndex = j;
      }
    }
    if (arr[smallestValueIndex] !== arr[i]) {
      const temp = arr[i];
      arr[i] = arr[smallestValueIndex];
      arr[smallestValueIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(arr));

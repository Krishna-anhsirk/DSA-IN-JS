// My solution
// Added Akshay's tweak of isSwapped afterwards

const arr = [1, 2, 3, 4, 5];

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      console.log('Another loop');
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) return arr;
  }
  return arr;
}

console.log(bubbleSort(arr));

// My solution

const arr = [7, 3, 8, 1, 0];

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let currIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[currIndex] >= arr[j]) break;
      else {
        const temp = arr[j];
        arr[j] = arr[currIndex];
        arr[currIndex] = temp;
        currIndex--;
      }
    }
  }
  return arr;
}

console.log(insertionSort(arr));

// Akshay's version -- simpler to read, differnt loop that's all

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const curr = arr[i];
    let prev = i - 1;
    while (prev >= 0 && curr < arr[prev]) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

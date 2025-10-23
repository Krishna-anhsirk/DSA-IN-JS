// Leetcode problem no. 912
// My solution - could do completely on my own with hearing on concept and a bit of help for recursive statements

const arr = [1, 2, 3, 4];

function mergeSortedArrays(arr1, arr2) {
  const arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    while (i < arr1.length) {
      arr.push(arr1[i]);
      i++;
    }
  }
  if (j < arr2.length) {
    while (j < arr2.length) {
      arr.push(arr2[j]);
      j++;
    }
  }
  return arr;
}

function mergeSort(ar) {
  if (ar.length === 1 || ar.length === 0) return ar;

  const mid = Math.floor(ar.length / 2);
  const left = mergeSort(ar.slice(0, mid));
  const right = mergeSort(ar.slice(mid, ar.length));
  return mergeSortedArrays(left, right);
}

console.log(JSON.stringify(mergeSort(arr)));

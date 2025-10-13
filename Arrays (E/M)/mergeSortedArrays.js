/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// My first version (with help of hint)

var merge = function (nums1, m, nums2, n) {
  const nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  return m + n;
};

// My second version (after hint)

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p1 < 0 || (p2 >= 0 && nums2[p2] > nums1[p1])) {
      nums1[i] = nums2[p2];
      p2--;
    } else {
      nums1[i] = nums1[p1];
      p1--;
    }
  }

  return m + n;
};

// Akshay's code - better written
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break; // Because nums1 is already sorted

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  return m + n;
};

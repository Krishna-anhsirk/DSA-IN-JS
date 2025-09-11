function countDigits(n) {
  if (n === 0) return 1;

  let num = n;
  let count = 0;

  if (num < 0) {
    num = num * -1; // Can use Math.abs(num)
  }

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }

  return count;
}

console.log(countDigits(19));
console.log(countDigits(0));
console.log(countDigits(-129));

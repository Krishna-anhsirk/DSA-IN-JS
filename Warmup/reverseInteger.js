// My solution (Successful submission)
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (Math.abs(x) < 10) return x;

  const limit = Math.pow(2, 31);
  const lowerLimit = -limit;
  const upperLimit = limit - 1;

  let isNeg = false;
  if (x < 0) isNeg = true;
  let x_copy = Math.abs(x);
  let reverse_integer = 0;

  while (x_copy > 0) {
    const lastDigit = x_copy % 10;
    reverse_integer = reverse_integer * 10 + lastDigit;
    x_copy = Math.floor(x_copy / 10);
  }

  // Negative case
  if (isNeg && -reverse_integer < lowerLimit) return 0;
  // Positive case
  else if (!isNeg && reverse_integer > upperLimit) return 0;

  return isNeg ? -reverse_integer : reverse_integer;
};

/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

  if (n === 0) {
    return 1;
  } else {
    let b = 1;
    for (let i = 0; i < n; i++) {
      b *= n - i;
    }
    return b;
  }
}

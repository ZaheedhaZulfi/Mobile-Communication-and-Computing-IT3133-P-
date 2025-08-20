let n = 4562;
const digits = [];
do {
  digits.unshift(n % 10);
  n = Math.floor(n / 10);
} while (n > 0);

console.log(digits);


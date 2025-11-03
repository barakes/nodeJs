// Published by Nati Goral, Sapir Mizrahi and Barak Shwam

const num = 237;
let flag;

for (let i = 2; i <= num; i++) {
  flag = true;

  // Check divisibility from 2 up to i-1
  for (let j = 2; j < i && flag; j++) {
    if (i % j === 0) {
      flag = false; // Found a divisor → not prime
    }
  }

  if (flag) {
    console.log(i); // Print the number if it's prime
  }
}

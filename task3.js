// Published by Nati Goral, Sapir Mizrahi and Barak Shwam

let arr = [100, 10, 5, 15001, 204, -2005];
let sum = 0;
let flagZero;
let num;

for (let i = 0; i < arr.length; i++) {
  num = arr[i];
  num = Math.abs(num); // Handle negative numbers
  flagZero = false;

  // Loop through each digit until a zero is found or number becomes 0
  while (num > 0 && !flagZero) {
    flagZero = num % 10 === 0 ? true : flagZero; // Check if current digit is 0
    num = Math.floor(num / 10); // Move to the next digit
  }

  sum = flagZero ? sum + 1 : sum; // Add 1 if number contains at least one zero
}

console.log(sum);

// Published by Nati Goral, Sapir Mizrahi and Barak Shwam

let arr = [100, 10, 5, 15000];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  while (arr[i] > 0) {
    sum = arr[i] % 10 === 0 ? sum + 1 : sum;
    arr[i] /= 10;
  }
}
console.log(sum);

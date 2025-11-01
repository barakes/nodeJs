// Published by Nati Goral, Sapir Mizrahi and Barak Shwam

const num = 123;

let div2 = Number(num) % 2 === 0;
let div3 = Number(num) % 3 === 0;
let div5 = Number(num) % 5 === 0;

let num1 =
  (div2 && !div3 && !div5) ||
  (!div2 && div3 && !div5) ||
  (!div2 && !div3 && div5);

let num2 =
  (div2 && div3 && !div5) || (div2 && !div3 && div5) || (!div2 && div3 && div5);

let num3 = div2 && div3 && div5;

console.log(
  "The number: " +
    num +
    " Divided by " +
    ((num1 && 1) || (num2 && 2) || (num3 && 3)) +
    " numbers"
);

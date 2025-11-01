// Published by Nati Goral, Sapir Mizrahi and Barak Shwam

const num = 237;
let flag;

for (let i = 1; i <= num; i++) {
  flag = true;

  for (let j = 2; j < i && flag; j++) {
    if (i % j === 0) {
      flag = false;
    }
  }

  if (flag) {
    console.log(i);
  }
}



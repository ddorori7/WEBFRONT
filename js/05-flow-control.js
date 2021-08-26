//  연습문제 1
//  2단 부터 9단 까지
//  (for 문, while 문)
console.log("==== for 구구단");
for (let dan = 2; dan <= 9; dan++) {
  //  단 루프
  console.log(dan + "단");
  for (let num = 1; num <= 9; num++) {
    // console.log(dan, "*", num, "=", dan * num);
    console.log(`${dan} * ${num} = ${dan * num}`);
  }
}
console.log("==== while 구구단");
let dan = 2;
while (dan <= 9) {
  //  단 루프
  let num = 1;
  console.log(dan + "단");
  while (num <= 9) {
    console.log(`${dan} * ${num} = ${dan * num}`);
    num++;
  }
  console.log();
  dan++;
}

// console.log("==== while 구구단 실험!!");
// 왜 안되지...?ㅇ.ㅇ

// let dan = 2;
// let num = 1;
// while (dan <= 9) {
//   //  단 루프

//   console.log(dan + "단");
//   while (num <= 9) {
//     console.log(`${dan} * ${num} = ${dan * num}`);
//     num++;
//   }
//   console.log();
//   dan++;
// }

//  연습문제 2
//  *****
//  ****
//  ***
//  **
//  *
//  (for 문, while 문)
console.log("==== for star");
for (let count = 5; count >= 1; count--) {
  let stars = ""; //    선언만 하고 ("")주지 않으면 undefined이므로 자체가 문자열로 변환됨.
  //  빈 문자열이라고 명시해주어야 함.
  for (let col = 1; col <= count; col++) {
    stars += "*";
  }
  console.log(stars);
}
console.log("==== while stars");
let count = 5;
while (count > 0) {
  let stars = "";
  let col = 1;
  while (col <= count) {
    stars += "*";
    col++;
  }
  console.log(stars);
  count--;
}

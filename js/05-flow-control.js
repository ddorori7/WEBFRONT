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

//  ES6: for ... in
//      객체의 속성(프로퍼티)를 순회
//  ES6: for ... of
//      순회 객체의 값을 순회 ex) 배열
let obj = {
  name: "홍길동",
  age: 28,
  job: "도적",
  gender: "남성",
};

console.log("==== for ... in");
for (let key in obj) {
  //  for ... in : 객체의 속성을 순회
  console.log(key, "->", obj[key]);
}
// ==== for ... in
// name -> 홍길동
// age -> 28
// job -> 도적
// gender -> 남성

const arr = [5, 1, 4, 3, 2, 9, 8, 0];
for (let key in arr) {
  console.log(key); //  -> 0 1 2 3 4 5 6 7 (배열의 번지(프로퍼티)가 나옴)
}
console.log("==== for ... of");
for (let value of arr) {
  //  for ... of : 반복 가능 객체에서 요소를 하나씩
  console.log(value); //    -> 5 1 4 3 2 9 8 0
}

//  for ... of는 순회 객체(배열 등)에서만 사용
// for (let value of obj) {
//   console.log(value);
// } -> TypeError: obj is not iterable(obj는 순회객체 아님)

//  주의: for ... in과 for ... of 를 구분해서 사용

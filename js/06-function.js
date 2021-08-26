//  함수 선언식
function sum(a, b) {
  // 매개변수 a, b를 입력받음
  return a + b;
  //  return 함수 종료, 출력 데이터를 반환할 수 있음
}

//  함수 호출
console.log("SUM:", sum(10, 20));

//  함수 표현식: 이름이 없는 함수 -> 익명 함수
//  그 자체로 독립된 객체
//      -변수에 할당될 수 있다
//      -다른 함수의 매개변수로 전달될 수 있다
const asum = function (a, b) {
  return a + b;
};
console.log(typeof asum, asum(10, 20));

//  익명 함수의 활용 1. 즉시 실행 함수
let initText;
(function (number) {
  let textList = ["홀수", "짝수"]; //   textList는 초기화에만 사용될 임시 변수
  if (number % 2 == 0) {
    initText = textList[1];
  } else {
    initText = textList[0];
  }
  console.log(`인수 ${number}를 이용하여 즉시 실행하였습니다.`);
})(5); //   -> 즉시 실행
console.log(initText);
// console.log(textList); -> Error : 스코프가 종료

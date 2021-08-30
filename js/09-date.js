//  Date: 날짜와 시간
let now = new Date(); //    현재 시간
console.log("now:", now); //    now: 2021-08-30T04:28:42.550Z
let time = new Date(2021, 7, 30); //    월은 0부터 => 2021년 8월 30일
console.log("time:", time); //  time: 2021-08-29T15:00:00.000Z
time = new Date(2012, 8, 24, 13, 30, 0); // 년월일시분초
console.log("time:", time); //  time: 2012-09-24T04:30:00.000Z

//  get 메서드
console.log("년도:", time.getFullYear()); //    년도
console.log("월:", time.getMonth() + 1); // 월정보는 0부터 시작! 주의! 1 더해줌
console.log("일:", time.getDate()); //  일
console.log("요일:", time.getDay()); // 일요일: 0
// 년도: 2012
// 월: 9
// 일: 24
// 요일: 1

//  set 메서드
time.setFullYear(2021);
console.log("변경된 time:", time); //   변경된 time: 2021-09-24T04:30:00.000Z
//  2021.9.24일 이날은 무슨 요일?
console.log("요일:", time.getDay()); // 요일: 5 -> 금요일

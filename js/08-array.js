//  배열 생성 : Array 객체로 생성
const v1 = new Array(10); //    10개짜리 빈배열
const v2 = new Array(); //  빈배열
const v3 = new Array(2021, "String", true); //  어떤 객체든 담을 수 있다.

//  .length 속성 : 요소의 갯수
console.log("v1:", v1, v1.length); //   v1: [ <10 empty items> ] 10
console.log("v2:", v2, v2.length); //   v2: [] 0
console.log("v3:", v3, v3.length); //   v3: [ 2021, 'String', true ] 3

//  리터럴로 생성(추천)
const v4 = []; //   빈배열
const v5 = [2021, "String", true];

//  배열 타입 확인시 typeof를 사용하면 안된다(object로 뜸)
console.log("v4:", v4, typeof v4); //   v4: [] object
console.log("v5:", v5, typeof v5); //   v5: [ 2021, 'String', true ] object

//  배열 타입 확인: Array.isArray() 메서드 활용
console.log("v4:", Array.isArray(v4)); //   v4: true
console.log("v5:", Array.isArray(v5)); //   v5: true

//  기본값으로 채우기: fill 메서드
const v6 = new Array(10).fill(1); //    10개짜리 1로 채워진 배열
console.log("v6:", v6); //  v6: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
v6.fill("default"); //  v6를 default로 채움
console.log("v6:", v6);
/*
v6: [
  'default', 'default',
  'default', 'default',
  'default', 'default',
  'default', 'default',
  'default', 'default'
]
*/

//  C, Java의 배열보다 다양한 용도로 활용
const person = {
  name: "홍길동",
  age: 28,
};

//  객체의 속성 -> 배열처럼 접근 가능
console.log(person.name, person["name"]); //  홍길동 홍길동
console.log(person.age, person["age"]); //  28 28

//  인덱스를 엄격히 체크하지 않음
const arr = []; //  빈배열
console.log(arr, arr.length); //  [] 0
//  인덱스 범위 벗어난 접근
arr[10] = 2021;
console.log(arr, arr.length); //  [ <10 empty items>, 2021 ] 11

console.log("======= 배열의 메서드");
const veges = ["배추", "무", " 쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];

console.log(veges, sources); // [ '배추', '무', ' 쪽파' ] [ '소금', '고춧가루', '새우젓' ]

//  배열 합치기
const items = veges.concat(sources);
console.log("CONCAT:", items); // CONCAT: [ '배추', '무', ' 쪽파', '소금', '고춧가루', '새우젓' ]

//  배열 요소 합치기: join
console.log("JOIN:", items.join(",")); // 요소들 ,로 합치기
// -> JOIN: 배추,무, 쪽파,소금,고춧가루,새우젓

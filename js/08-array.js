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

//  push: 배열 맨 뒤에 새 요소 추가
//  pop: 배열 맨 뒤 요소를 추출 후 제거
//  push + pop: Stack처럼 활용(접시쌓기)
console.log("====== push and pop");
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("STACK:", fruits); // STACK: [ 'Banana', 'Orange', 'Apple', 'Mango' ]
fruits.push("수박");
console.log("STACK:", fruits); // STACK: [ 'Banana', 'Orange', 'Apple', 'Mango', '수박' ]
console.log("POP:", fruits.pop()); // 맨 뒤 요소 추출 -> POP: 수박
console.log("POP:", fruits.pop()); // 맨 뒤 요소 추출 -> POP: Mango
console.log("POP:", fruits.pop()); // 맨 뒤 요소 추출 -> POP: Apple
console.log("STACK:", fruits); // STACK: [ 'Banana', 'Orange' ]

//  shift: 맨 앞에서 요소 추출 후 제거
//  push + shift : QUEUE 자료형처럼 활용(선입선출)
console.log("====== push and shift");
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("수박");
console.log("QUEUE:", fruits); // QUEUE: [ 'Banana', 'Orange', 'Apple', 'Mango', '수박' ]
console.log("SHIFT:", fruits.shift()); // 첫 요소 추출 후 제거 -> SHIFT: Banana
console.log("SHIFT:", fruits.shift()); // 첫 요소 추출 후 제거 -> SHIFT: Orange
console.log("SHIFT:", fruits.shift()); // 첫 요소 추출 후 제거 -> SHIFT: Apple
console.log("QUEUE:", fruits); // QUEUE: [ 'Mango', '수박' ]

console.log("===== splice");
//  splice: 요소 삭제와 삽입을 한번에 할 수 있다
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("원본:", fruits); //  원본: [ 'Banana', 'Orange', 'Apple', 'Mango' ]
//  인수가 1개: 해당 인덱스부터 끝까지 추출 후 제거
console.log("SPLICE(2):", fruits.splice(2)); // SPLICE(2): [ 'Apple', 'Mango' ]
console.log("원본:", fruits); //  원본: [ 'Banana', 'Orange' ]

fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("원본:", fruits); //  원본: [ 'Banana', 'Orange', 'Apple', 'Mango' ]
//  인수가 2개: 1번째 인수 인덱스 부터, 2번째 인수 갯수만큼 추출 후 제거
console.log("SPLICE(2, 1):", fruits.splice(2, 1)); // SPLICE(2, 1): [ 'Apple' ] -> 결과값이 1개여도 배열로 추출!
console.log("원본:", fruits); //  원본: [ 'Banana', 'Orange', 'Mango' ]

fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("원본:", fruits); //  원본: [ 'Banana', 'Orange', 'Apple', 'Mango' ]
//  인수가 3개 이상: 1번째 인수 인덱스 부터, 2번째 인수 갯수만큼 추출 후 제거, 3번째 이후 인수들을 삽입
console.log("SPLICE 인수 3개 이상:", fruits.splice(2, 1, "Kiwi", "Guava")); //  SPLICE 인수 3개 이상: [ 'Apple' ]
console.log("원본:", fruits); //  원본: [ 'Banana', 'Orange', 'Kiwi', 'Guava', 'Mango' ]

console.log("===== REVERSE");
//  reverse: 배열의 순서를 뒤집는다
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("원본:", fruits); //  원본: [ 'Banana', 'Orange', 'Apple', 'Mango' ]
fruits.reverse(); //  배열 순서 뒤집기
console.log("REVERSE:", fruits); // REVERSE: [ 'Mango', 'Apple', 'Orange', 'Banana' ]
console.log("===== SLICE");
//  slice: 배열의 일부 추출(추출 내용 삭제하지 않음)
let slices = fruits.slice(1, 2);
console.log("조각:", slices); //  조각: [ 'Apple' ]
console.log("원본:", fruits); //  원본: [ 'Mango', 'Apple', 'Orange', 'Banana' ] <- 원본 유지

console.log("SORT");
console.log("원본:", fruits);
fruits.sort(); // 기본적으로는 오름차순(ASC)
console.log("SORT(ASC):", fruits); // SORT(ASC): [ 'Apple', 'Banana', 'Mango', 'Orange' ]
//  사용자의 규칙으로 정렬할 경우, 키함수를 재정의
fruits.sort(function (v1, v2) {
  //  반환 값이 0: 순번이 같다.
  if (v1 == v2) return 0;
  if (v1 < v2) return 1; // v1이 순서가 뒤
  if (v1 > v2) return -1; // v1이 순서가 앞
});
console.log("SORT(User Defined):", fruits); //  SORT(User Defined): [ 'Orange', 'Mango', 'Banana', 'Apple' ]

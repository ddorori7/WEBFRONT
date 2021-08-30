console.log("====== 배열 전개 연산");

var arr1 = ["홍길동", "장길산"];
var arr2 = ["임꺽정", "전우치"];
console.log(arr1, arr2); // [ '홍길동', '장길산' ] [ '임꺽정', '전우치' ]

//  기존 방식 합치기
var combined = []; //   빈 배열
//  첫 번째 방법
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combine 1:", combined); // combine 1: [ '홍길동', '장길산', '임꺽정', '전우치' ]
//  두 번째 방법: concat
combined = arr1.concat(arr2);
console.log("combine 2:", combined); // combine 2: [ '홍길동', '장길산', '임꺽정', '전우치' ]
//  세 번째 방법: concat
combined = [].concat(arr1, arr2);
console.log("combine 3:", combined); // combine 3: [ '홍길동', '장길산', '임꺽정', '전우치' ]

//  ES6 방식
combined = [...arr1, ...arr2]; //   간결, 편리
console.log("ES6 combine:", combined); //   ES6 combine: [ '홍길동', '장길산', '임꺽정', '전우치' ]

//  배열의 전개
console.log("===== 배열의 전개");
console.log("원본배열:", arr1); //  원본배열: [ '홍길동', '장길산' ]
var [first, second, third = "empty", ...others] = arr1;
console.log(first, second, third, others); // 홍길동 장길산 empty []

console.log("원본배열:", combined); //  원본배열: [ '홍길동', '장길산', '임꺽정', '전우치' ]
var [first, second, third = "empty", ...others] = combined;
console.log(first, second, third, others);
//   홍길동 장길산 임꺽정 [ '전우치' ] -> 할당할 데이터 있을때 기본값 empty무시

console.log("===== 객체 전개 연산");
var obj1 = { one: 1, two: 2, other: 0 };
var obj2 = { three: 3, four: 4, other: -1 };

//  기존 방식 1
var combined = {
  one: obj1.one,
  two: obj1.two,
  three: obj2.three,
  four: obj2.four,
  other: obj2.other,
};
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("combine 1:", combined);
// obj1: { one: 1, two: 2, other: 0 }
// obj2: { three: 3, four: 4, other: -1 }
// combine 1: { one: 1, two: 2, three: 3, four: 4, other: -1 }

//  방법 2: Object 객체 이용 -> 순서가 중요
combined = Object.assign({}, obj1, obj2); //    빈객체 {}에 obj1, obj2 할당 -> other: -1(obj2의 값)
console.log("combine 2:", combined); // combine 2: { one: 1, two: 2, other: -1, three: 3, four: 4 }
//  연결 순서 바꾸기
combined = Object.assign({}, obj2, obj1);
console.log("combine 3(연결순서바꾸기):", combined); // -> other: 0(obj1의 값)
// combine 3(연결순서바꾸기): { three: 3, four: 4, other: 0, one: 1, two: 2 }

//  ES6 방식 -> 순서가 중요
combined = {
  ...obj1, // obj1의 모든 속성을 전개
  ...obj2, //  obj2의 모든 속성을 전개
};
console.log("ES6 combine:", combined); //   -> other: -1(obj2의 값)
//  ES6 combine: { one: 1, two: 2, other: -1, three: 3, four: 4 }
//  ES6 순서 바꾸기
combined = {
  ...obj2, // obj2의 모든 속성을 전개
  ...obj1, //  obj1의 모든 속성을 전개
};
console.log("ES6 combine 순서 바꾸기:", combined); //   -> other: 0(obj1의 값)
//  ES6 combine 순서 바꾸기: { three: 3, four: 4, other: 0, one: 1, two: 2 }

//  객체의 전개
console.log("원본:", combined); //  원본: { three: 3, four: 4, other: 0, one: 1, two: 2 }
var { one, three, ...others } = combined; //    -> 변수명 = 객체 속성명
console.log(one, three, others); // 1 3 { four: 4, other: 0, two: 2 }

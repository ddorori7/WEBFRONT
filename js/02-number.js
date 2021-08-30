// JavaScript의 Number
// int, float 가리지 않음, 산술 연산 가능
let n1 = 2021; // Literal
let n2 = Number(2021); // Number 객체를 이용 생성
console.log(n1, "==", n2, "?", n1 == n2);
console.log(typeof n1, typeof n2);
// 2021 == 2021 ? true
// number number

// 다양한 수치 데이터 입력
const hex = 0xff0000; // 16진수: 0x
const oct = 0o10; // 8진수: 0o
console.log(hex, oct); //   16711680 8

// Math 객체 활용: 수학 내장 객체
console.log("Math -------------------------");
console.log("PI상수:", Math.PI);
console.log("최댓값:", Math.max(1, 5, 3, 2, 6, 7));
console.log("최솟값:", Math.min(1, 5, 3, 2, 6, 7));
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567));
// Math -------------------------
// PI상수: 3.141592653589793
// 최댓값: 7
// 최솟값: 1
// 4 3 3

// 그 외 Number 객체가 가진 상수들
console.log("표현할 수 있는 최대 정수:", Number.MAX_SAFE_INTEGER);
console.log("표현할 수 있는 가장 큰 수:", Number.MAX_VALUE);
console.log("표현할 수 있는 최소 정수:", Number.MIN_SAFE_INTEGER);
console.log("표현할 수 있는 가장 작은 수:", Number.MIN_VALUE);
// 표현할 수 있는 최대 정수: 9007199254740991
// 표현할 수 있는 가장 큰 수: 1.7976931348623157e+308
// 표현할 수 있는 최소 정수: -9007199254740991
// 표현할 수 있는 가장 작은 수: 5e-324

console.log("------------- Casting: 타입 변환");
// 중간에 데이터 타입이 변경될 수 있다 -> 형변환이 필요한 경우 많다
// parse 계열: parseInt, parseFloat
console.log("011", parseInt("011"));
console.log("011", parseInt("011", 2)); // 2진수 011을 변환
console.log("0xFF", parseInt("0xFF", 16)); // 16진수 FF를 변환
console.log("123.456", parseInt("123.456")); // 정수형으로 변환 -> 123
console.log("123.456", parseFloat("123.456")); // 실수형으로 변환 -> 123.456
// ------------- Casting: 타입 변환
// 011 11
// 011 3
// 0xFF 255
// 123.456 123
// 123.456 123.456

// parse계열 메서드는 단순히 String -> Number, 뿐만 아니라
// 다른 타입으로 변경도 가능
console.log("PI", parseInt(Math.PI)); // float -> int로 변환 (PI 3)

// 중요: NaN - 숫자로 변환할 수 없는 문자열을 변환하면 NaN(Not a Number)
let v = parseInt("abc1234567");
console.log(v, "is ", typeof v); // 결과: NaN is  number -> NaN의 타입은 number
// NaN가 포함된 산술 연산 -> NaN
console.log(v + 2021); // NaN + 2021
// number 타입 변수가 NaN인가?
console.log(isNaN(v));
// NaN is  number
// NaN
// true

// Infinity
v = 1 / 0;
console.log("1/0 = ", v, typeof v); //  1/0 =  Infinity number
// Infinity 포함된 산술 연산식 -> Infinity
console.log(v + 2021); // Infinity + 2021 //    Infinity

// 유한수치인지 확인 isFinity 함수
console.log("1/0 is Finite? ", isFinite(1 / 0));
console.log("2021 is Finite? ", isFinite(2021));
console.log("NaN is Finite? ", isNaN(parseInt("abc123")));
// 1/0 is Finite?  false
// 2021 is Finite?  true
// NaN is Finite?  true

// JavaScript의 Numger
// int, float 가리지 않음, 산술 연산 가능
let n1 = 2021; // Literal
let n2 = Number(2021); // Number 객체를 이용 생성
console.log(n1, "==", n2, "?", n1 == n2);
console.log(typeof n1, typeof n2);

// 다양한 수치 데이터 입력
const hex = 0xff0000; // 16진수: 0x
const oct = 0o10; // 8진수: 0o
console.log(hex, oct);

// Math 객체 활용: 수학 내장 객체
console.log("Math -------------------------");
console.log("PI상수:", Math.PI);
console.log("최댓값:", Math.max(1, 5, 3, 2, 6, 7));
console.log("최솟값:", Math.min(1, 5, 3, 2, 6, 7));
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567));

// 그 외 Number 객체가 가진 상수들
console.log("표현할 수 있는 최대 정수:", Number.MAX_SAFE_INTEGER);
console.log("표현할 수 있는 가장 큰 수:", Number.MAX_VALUE);
console.log("표현할 수 있는 최소 정수:", Number.MIN_SAFE_INTEGER);
console.log("표현할 수 있는 가장 작은 수:", Number.MIN_VALUE);

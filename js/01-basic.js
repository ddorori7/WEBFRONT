// 한 줄 주석
/*
    여러 줄 주석 
    : JavaScript 주석은 c, Java와 동일
*/
// 내장 객체 consol
console.info("정보 메시지");
console.debug("디버그 메시지");
console.warn("경고 메시지");
console.log("에러 메시지");

console.log("Hello, JavaScript!");

// 연속으로 데이터를 출력 -> , 로 구분
console.log("String", 2021, true);

// 현재 플랫폼 정보 출력
console.log("Process Version:", process.version);
console.log("Process Platform:", process.platform);

// 객체의 속성 접근: .으로 접근
console.log(Math.PI); // Math객체의 속성인 PI
console.log(Math.max(1, 3, 2, 4, 9, 5));

console.log("-----------------------------");

// var, let, const
var testVar = 10; // 전통적 할당 방법: 가급적 사용 지양

// let, const -> 변수의 스코프는 block 단위
let testLet = "let"; // let -> 변경 가능
const TEST_CONST = "const"; // const -> 변경 불가
// 상수처럼 활용, 반드시 선언과 동시에 할당해야 한다.

console.log("testVar:", testVar);
console.log("testLet:", testLet);
console.log("TEST_CONST:", TEST_CONST);

// 값의 변경
testVar = "changed";
testLet = "changed";
// TEST_CONST = "changed"; // -> Error: 변경할 수 없다

console.log("testVar:", testVar);
console.log("testLet:", testLet);
console.log("TEST_CONST:", TEST_CONST);

console.log("-----------------------------");

// JavaScript는 동적 타입 언어
//      데이터 타입이 고정되지 않고
//      데이터가 할당 되었을 때, 그 타입이 결정
let v = "This is String";
// 데이터의 타입을 체크해야 한다
console.log(v, "=>", typeof v);
// 다른 데이터 타입 할당
v = 2021;
console.log(v, "=>", typeof v);

var queue = [];
queue.push(1);
queue.push(5);
queue.push(3);
queue.shift();
console.log(queue[1]);

//  논리형 true or false
//  비교연산/ 논리연산의 결과
//  논리 조합: AND(논리곱: &&) , OR(논리합: ||), NOT(논리 부정: !)
let v1; //  선언하되 초기화 되지 않음 -> undefined
let v2 = null; //   선언하고 null로 초기화 -> null
console.log(typeof v1, typeof v2); //   undefined object(버그라고함.null임-타입이면서 특수한 개체)
//  undefined : 자바스크립트 엔진에 허용된 데이터
//  null : 개발자에게 허용된 타입

//  널 체크
console.log(v1, typeof v1, v1 == null); // undefined undefined true
console.log(v2, typeof v2, v2 == null); // null object true

//  개발자가 임의로 undefined를 할당할 수는 있다
v2 = undefined;
console.log(v2, typeof v2, v2 == undefined); // undefined 체크
// undefined undefined true

//  == : 데이터 타입과 관계 없이 값을 비교
//  === : 값과 함께 데이터 타입도 비교
console.log(2021 == "2021"); //    값만 비교 / true
console.log(2021 === "2021"); //    값과 타입 비교 / false

//  javaScript는 number, string이 비어있으면 false
//                                데이터가 있으면 true 반환
console.log("문자열:", Boolean("String"), Boolean("")); //  문자열: true false
console.log("수치형:", Boolean(2021), Boolean(0)); //   수치형: true false

let content = "CONTENTS";

console.log(true && content); //    전체가 true -> CONTENTS 선택
console.log(false && content); //   전체가 false -> false
console.log(true || content); //    전체가 true -> true (or조건이므로 앞이 true면 그냥 true니까 바로 반환)
console.log(content || true); //    전체가 true -> CONTENTS (or조건이므로 앞이 true(CONTENTS)면 그냥 true니까 바로 반환)
console.log(false || content); //   전체가 true -> CONTENTS (앞이 false니까 뒤까지 확인하고 CONTENTS 반환)

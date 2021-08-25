//  JavaScript의 문자열
const s1 = "Modern JavaScript and Java"; //  Literal
const s2 = String("Modern JavaScript"); //  String 객체 이용
console.log(typeof s1, typeof s2);

//  Property: .length - 문자열의 길이
//      모든 문자열 내부 데이터는 인덱스로 접근 가능
console.log(s1, ", length=", s1.length);

//  문자열 추출 메서드
console.log(s1.charAt(7)); //  인덱스 7의 문자
console.log(s1[7]); //  배열처럼 사용할 수 있다. 다만, 불변 자료형
//  부분 문자열 메서드
console.log(s1.substr(7)); //  7번 인덱스 ~ 끝까지
console.log(s1.substr(7, 10)); //  7번 인덱스 ~ 10글자
console.log(s1.substring(7)); //  7번 인덱스 ~ 끝까지
console.log(s1.substring(7, 17)); //  7번 인덱스 17인덱스 앞까지

console.log("---------- Search ");
console.log(s1, ", length=", s1.length);
//  중요: 문자열 검색 메서드
//  s1에서 Java를 검색

let position = s1.indexOf("Java"); //  처음부터 Java를 검색
console.log("1st Java:", position);
position += "JavaScript".length; //  검색 시작 위치 변경
position = s1.indexOf("Java", position); //   검색 범위 제한
console.log("2nd Java:", position);
position += "Java".length; //  검색 시작 위치 변경
position = s1.indexOf("Java", position); //  검색어 없음
console.log("No keyword:", position); //  찾는 검색어 없음 -> -1

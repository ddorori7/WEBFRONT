//  객체의 생성
const person = new Object(); // 빈 객체
//  필요할 때 동적으로 속성 추가
person.name = "서지원"; //  프로퍼티
person.age = 27; //  프로퍼티
person.showInfo = function () {
  //  일반적으로 this는 객체 자신을 가리킴
  let message = `Name: ${this.name}, Age: ${this.age}`;
  console.log(message);
}; //    메서드

person.showInfo(); //   속성에 접근시 .으로 구분
//  Name: 서지원, Age: 27

//  JSON(JavaScript Object Notation) - 중요
//  키: 값
//  속성은 ,로 구분
const person2 = {
  name: "홍길동",
  age: 28,
  showInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};
person2.showInfo(); //  Name: 홍길동, Age: 28

//  프로토타입 상속
const Member = function (name, position) {
  //  함수를 생성자로 활용
  this.name = name;
  this.position = position;
};

let m1 = new Member("강백호", "PF");
let m2 = new Member("서태웅", "SF");

console.log("m1:", m1);
console.log("m2:", m2);
// m1: Member { name: '강백호', position: 'PF' }
// m2: Member { name: '서태웅', position: 'SF' }

//  JavaScript는 동적으로 속성과 메서드를 추가할 수 있다.
m1.sayHi = function () {
  // m1에 추가
  console.log(`${this.name}님이 당신을 부릅니다.`);
};
m1.sayHi(); //  강백호님이 당신을 부릅니다.
// m2.sayHi(); -> Error
//  동적 추가된 속성, 메서드는 해당 객체에서만 활용
console.log("m1:", m1);
console.log("m2:", m2);
// m1: Member { name: '강백호', position: 'PF', sayHi: [Function (anonymous)] }
// m2: Member { name: '서태웅', position: 'SF' }

//  원래 객체의 prototype(공유영역)을 이용하면
//  해당 객체를 new한 모든 객체들이 속성을 공유할 수 있다.
//  OOP의 상속 개념을 구현 가능

console.log("m1", m1.constructor);
console.log("m2", m2.constructor);
console.log("Member prototype:", Member.prototype); //  공유 영역
// m1 [Function: Member]
// m2 [Function: Member]
// Member prototype: {}

//  prototype 영역에 속성추가
//  해당 객체를 이용하는 new 한 모든 객체가 공유
Member.prototype.introduce = function () {
  console.log(`Name: ${this.name}, Position: ${this.position}`);
};
m1.introduce();
m2.introduce();
console.log("Member prototype:", Member.prototype); //  공유 영역
// Name: 강백호, Position: PF
// Name: 서태웅, Position: SF
// Member prototype: { introduce: [Function (anonymous)] }

//  기본 객체들에도 동적으로 속성을 추가할 수 있다.
String.prototype.sayHello = function () {
  return "Hello, " + this;
};
console.log("둘리".sayHello()); //  Hello, 둘리

console.log("=========== This Binding");

const testFunc = function (location) {
  console.log(`나는 ${location}에 사는 ${this.name} 입니다.`);
  console.log("this는 global? ", this === global);
};

testFunc("서울");
/*
나는 서울에 사는 undefined 입니다.
this는 global?  true
*/

const obj = { name: "홍길동" }; // 객체 생성
testFunc.call(obj, "서울"); // 함수 내부의 this를 obj와 연결
testFunc.apply(obj, ["서울"]); // 함수 내부의 this를 obj와 연결, 인자를 배열로 전달
/*
나는 서울에 사는 홍길동 입니다.
this는 global?  false
*/
/*
call과 apply의 동작은 본질적으로 같음
차이점: 함수에 인수를 넘길 때, apply는 배열로, call의 인수는 쉼표로 구분한 값의 목록을 전달함
*/

//  bind -> 함수와 특정 개체 연결(영구적으로 연결)
const boundTestFunc = testFunc.bind(obj);
// bind 메서드는 함수를 호출하지는 않고 this가 새 객체로 연결된 새 함수를 반환
boundTestFunc("서울"); // this === obj
/*
나는 서울에 사는 홍길동 입니다.
this는 global?  false
*/

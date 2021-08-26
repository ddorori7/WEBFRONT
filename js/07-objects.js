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
person2.showInfo();

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

//  JavaScript는 동적으로 속성과 메서드를 추가할 수 있다.
m1.sayHi = function () {
  // m1에 추가
  console.log(`${this.name}님이 당신을 부릅니다.`);
};
m1.sayHi();
// m2.sayHi(); -> Error
//  동적 추가된 속성, 메서드는 해당 객체에서만 활용
console.log("m1:", m1);
console.log("m2:", m2);

//  원래 객체의 prototype(공유영역)을 이용하면
//  해당 객체를 new한 모든 객체들이 속성을 공유할 수 있다.
//  OOP의 상속 개념을 구현 가능

console.log("m1", m1.constructor);
console.log("m2", m2.constructor);
console.log("Member prototype:", Member.prototype); //  공유 영역

//  prototype 영역에 속성추가
//  해당 객체를 이용하는 new 한 모든 객체가 공유
Member.prototype.introduce = function () {
  console.log(`Name: ${this.name}, Position: ${this.position}`);
};
m1.introduce();
m2.introduce();
console.log("Member prototype:", Member.prototype); //  공유 영역

//  기본 객체들에도 동적으로 속성을 추가할 수 있다.
String.prototype.sayHello = function () {
  return "Hello, " + this;
};
console.log("둘리".sayHello());

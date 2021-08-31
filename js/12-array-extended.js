function testForEach() {
  //  forEach 메서드: 배열의 요소를 하나씩 콜백에 전달
  let source = ["Banana", "Orange", "Apple", "Mango"];
  console.log("===== forEach");
  source.forEach((item) => {
    //    콜백 함수의 인자가 1개: 개별 요소
    console.log(item);
  });
  //   Banana
  //   Orange
  //   Apple
  //   Mango

  source.forEach((item, index) => {
    //  콜백 함수의 인자가 2개: 개별 요소, 배열 내의 인덱스
    console.log(`${index}번째 요소 ${item}`);
  });
  //   0번째 요소 Banana
  //   1번째 요소 Orange
  //   2번째 요소 Apple
  //   3번째 요소 Mango

  source.forEach((item, index, arr) => {
    //  콜백 함수의 인자가 3개: 개별요소, 인덱스, 배열 자체
    console.log(`배열 ${arr}의 ${index}번째 요소 ${item}`);
  });
  //   배열 Banana,Orange,Apple,Mango의 0번째 요소 Banana
  //   배열 Banana,Orange,Apple,Mango의 1번째 요소 Orange
  //   배열 Banana,Orange,Apple,Mango의 2번째 요소 Apple
  //   배열 Banana,Orange,Apple,Mango의 3번째 요소 Mango
}
// testForEach();

function testSome() {
  let data = [
    {
      name: "홍길동",
      age: 28,
    },
    {
      name: "장길산",
      age: 35,
    },
    {
      name: "전우치",
      age: 25,
    },
  ];

  //  some, any: 조건을 만족하는 데이터가 1개 이상 있을때
  let result = data.some((x) => {
    return x.age > 25;
  });

  console.log("------- some: age > 25 ?", result);
  // ------- some: age > 25 ? true
}
// testSome();

function testEvery() {
  let data = [
    {
      name: "홍길동",
      age: 28,
    },
    {
      name: "장길산",
      age: 35,
    },
    {
      name: "전우치",
      age: 25,
    },
  ];

  //  every: 모든 요소가 콜백 함수의 조건을 만족시킬 때 true
  let result = data.every((x) => {
    return x.age > 25;
  });
  console.log("------- every: age > 25 ?", result);
  // ------- every: age > 25 ? false
}
// testEvery();

function testFilter() {
  console.log("----- Filter");

  let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //  source에서 짝수요소만 필터링 해보자

  //  기존 방식
  let result = [];
  for (let i = 0; i < source.length; i++) {
    //  판별
    if (source[i] % 2 == 0) {
      result.push(source[i]);
    }
  }
  console.log("원본:", source);
  console.log("짝수 필터링:", result);
  // 원본: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  // 짝수 필터링: [ 2, 4, 6, 8, 10 ]

  //  ES6
  result = source.filter((item) => item % 2 == 0);
  console.log("짝수 필터링(filter):", result);
  // 짝수 필터링(filter): [ 2, 4, 6, 8, 10 ]
}
// testFilter();

function testMap() {
  console.log("===== map");
  let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("원본:", source);

  //  모든 요소를 *2한 새 배열을 만들어라
  //  기존 방식
  let multiply = [];
  for (let i = 0; i < source.length; i++) {
    multiply.push(source[i] * 2);
  }
  console.log("요소 계산:", multiply);
  // 요소 계산: [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]

  //  ES6  map 함수 활용
  multiply = source.map((item) => item * 2);
  console.log("배열 곱셈(map):", multiply);
  // 배열 곱셈(map): [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]
}
// testMap();

function testReduce() {
  let source = [12, 4, 19, 33, 86];
  //  callback
  //      acc: 직전까지의 누산값
  //      value: 현재요소의 값
  //      idx: 현재요소의 인덱스
  //      arr: 누산에 사용되는 배열 자체
  let sum = source.reduce((acc, value, idx, arr) => {
    console.log(`이전 값은 ${acc}`);
    console.log(`${arr}의 ${idx}번째 요소는 ${value}`);

    //  직전 누산값과 현재 누산값을 연산하여 리턴
    return acc + value;
    // 이전 값은 0
    // 12,4,19,33,86의 0번째 요소는 12
    // 이전 값은 12
    // 12,4,19,33,86의 1번째 요소는 4
    // 이전 값은 16
    // 12,4,19,33,86의 2번째 요소는 19
    // 이전 값은 35
    // 12,4,19,33,86의 3번째 요소는 33
    // 이전 값은 68
    // 12,4,19,33,86의 4번째 요소는 86
  }, 0); // 초깃값은 0으로 설정되어 있음

  console.log("원본:", source);
  console.log("누계값(reduce):", sum);
  // 원본: [ 12, 4, 19, 33, 86 ]
  // 누계값(reduce): 154
}
// testReduce();

function testReduce2() {
  //  map 함수를 reduce 함수로 시뮬레이션
  let source = [12, 4, 19, 33, 86];
  //  요소를 받아와서 짝수면 짝수, 홀수면 홀수
  //  내부 요소를 변경
  console.log("원본:", source);
  let result = source.reduce((acc, value) => {
    console.log(`현재 누산기: ${acc}`);
    console.log(`${value}는 ${value % 2 == 0 ? "짝수" : "홀수"}`);
    acc.push(value % 2 == 0 ? "짝수" : "홀수");

    return acc;
    // 현재 누산기:
    // 12는 짝수
    // 현재 누산기: 짝수
    // 4는 짝수
    // 현재 누산기: 짝수,짝수
    // 19는 홀수
    // 현재 누산기: 짝수,짝수,홀수
    // 33는 홀수
    // 현재 누산기: 짝수,짝수,홀수,홀수
    // 86는 짝수
  }, []);
  console.log(result);
  //  [ '짝수', '짝수', '홀수', '홀수', '짝수' ]
}
// testReduce2();

function filterMapReduce() {
  let source = [12, 7, 3, 8, 4, 9, 6, 2, 15, 14];
  /* 목표
  source 배열에서 짝수만 필터링 : .filter
  내부 요소를 2배 : .map
  합산 : .reduce
  */

  let result = source
    .filter((item) => item % 2 == 0)
    .map((item) => item * 2)
    .reduce((acc, value) => {
      return acc + value;
    });
  console.log("Result:", result);
  // Result: 92
}
filterMapReduce();

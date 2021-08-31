function logicA() {
  console.log("begin logicA"); // 1

  setTimeout(() => {
    console.log("callbackA called"); // 3
    console.log("begin logicB"); // 4
    setTimeout(() => {
      console.log("callbackB called"); // 6
    }, 2000);
    console.log("end logicB"); // 5
  }, 2000); //    2초 후에 콜백함수 수행

  console.log("end logicA"); // 2
}
// logicA();
// begin logicA
// end logicA -> 비동기 로직 수행
// callbackA called
// begin logicB
// end logicB -> 비동기 로직 수행
// callbackB called

function logicPromise() {
  console.log("begin logicPromise");

  //  비동기 처리를 위한 Promise 객체 생성
  return new Promise((resolve, reject) => {
    //  resolve: 성공했을 때 값을 전달
    //  reject: 실패했을 때 사유를 전달
    setTimeout(() => {
      //   resolve("Success");
      //    비동기 처리에 성공하면 resolve 함수를 실행
      reject("REJECTED!");
    }, 2000);
    console.log("end logicPromise");
  });
}

function testLogicPromise() {
  console.log("Test logic Promise");
  logicPromise()
    .then((value) => {
      //    성공했을 때
      console.log("PROMISE SUCCESS:", value);
    })
    .catch((reason) => {
      //    실패했을 때
      console.error("PROMISE FAILED:", reason);
    });
}
// testLogicPromise();
/* <resolve일때> - 성공했을 때
Test logic Promise
begin logicPromise
end logicPromise
PROMISE SUCCESS: Success
*/
/* <reject일 때> -  실패했을 때
Test logic Promise
begin logicPromise
end logicPromise
PROMISE FAILED: REJECTED!
*/

//  async/await는 Promise를 좀 더 쉽게 다룰 수 있도록 해줌
//  function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환
async function asyncFunc() {
  console.log("async function");
  return "SUCCESS";
}

//  async 함수는 항상 Promise를 리턴함
asyncFunc().then((value) => console.log(value)); // 성공시의 처리
// async function
// SUCCESS

function testAttributes() {
  //  개발자 도구 콘솔에서 확인
  //  main-image id속성을 가진 요소를 찾아와서
  //  속성 확인
  let obj = document.getElementById("main-image");
  console.log("#main-image:", obj);
  //    가지고 있는 모든 속성의 확인
  console.log(obj.getAttributeNames());
  for (let key of obj.getAttributeNames()) {
    console.log("attribute:", key);
  }
  //    title 속성 출력
  console.log("title:", obj.getAttribute("title"));
  //    title 속성의 변경
  obj.setAttribute("title", "사진:" + obj.getAttribute("title"));
  console.log("title:", obj.getAttribute("title"));

  //    하단의 Product 이미지들의 title 속성도 변경해 봅시다
  let subs = document.getElementsByClassName("sub-image");
  console.log(".sub-image:", subs);
  //    HTMLCollection: 직접 접근은 불가, loop로 개별요소에 접근해야 한다.
  for (let i = 0; i < subs.length; i++) {
    //  속성 변경
    subs[i].setAttribute("title", "사진:" + subs[i].getAttribute("title"));
  }
}
// testAttributes();
// title속성 -> 마우스 이미지 위에 올렸을때!

//  이벤트 붙이기 두번째 방식
document.getElementById("main-image").onclick = function (event) {
  console.log(event); //    이벤트 객체
  console.log("이벤트 이름:", event.name);
  console.log("이벤트 발생 객체:", event.target);
  //  이벤트 발생 객체: event.target
  alert(event.target.title);
};
//  키보드 이벤트
// .onkeypress = function (event){}-> 한글키가 안먹음..
//  keyup -> 키보드에서 손을 뗄때
document.getElementById("keyword").onkeyup = function (event) {
  console.log(event); //    이벤트 정보
  console.log(event.target); // 이벤트를 발생시킨 객체
  console.log("눌러진 키:", event.keyCode);

  let btn = document.querySelector("#btn-search");
  btn.innerText = event.target.value + "검색";
};

//  이벤트 리스너 부착: 가장 추천하는 방식
window.addEventListener("load", function (event) {
  //  load 이벤트 -> 주로 페이지 초기화를 담당

  //  키보드 이벤트
  document.getElementById("keyword").onkeyup = function (event) {
    console.log(event); //  이벤트 정보
    console.log(event.target); //  이벤트 발생시킨 객체
    console.log("눌러진 키:", event.keyCode);

    let btn = document.querySelector("#btn-search");
    btn.innerText = event.target.value + " :검색";
  };

  //    class가 sub-image인 모든 요소들 검색
  let products = document.getElementsByClassName("sub-image");
  console.log(products);
  //    HTMLCollection 이므로
  for (let i = 0; i < products.length; i++) {
    //    개별 상품들 요소 확인
    let product = products[i];
    console.log(product);

    //  이벤트 리스터 부착
    product.addEventListener("click", function (event) {
      //  이벤트 발생 객체 검색
      let obj = event.target;
      let mainImage = document.getElementById("main-image");
      mainImage.setAttribute("src", obj.getAttribute("src"));
      mainImage.setAttribute("title", obj.getAttribute("title"));

      let title = document.querySelector("#product-info h2");
      title.innerText = obj.getAttribute("title");
    });
  }
});

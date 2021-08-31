if (name === null) {
  name = "Anonumous";
}
document.writeln("<p>Welcome, " + name + "</p>");
let result = confirm("준비 되셨습니까?"); // 사용자 선택
if (result) {
  alert("한번 실행해 봅시다");
}

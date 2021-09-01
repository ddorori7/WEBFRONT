function checkForm() {
  //  폼 name으로 식별
  let frm = document.registerForm;
  console.log(frm);

  //  userid 검증
  let userid = frm.userid.value.trim(); //  name="userid"
  //  길이 비교 4 ~ 10 이하 검증
  if (userid.length < 4 || userid.length > 10) {
    //  검증 실패
    alert("사용자 아이디는 4자 이상," + "10자 이하로 해 주세요");
    frm.userid.focus(); //  포커스 부여
    return false;
  }

  //  비밀번호 검증
  let password = frm.password.value.trim(); //  name="password"
  if (password.length < 4 || password.length > 10) {
    alert("비밀번호는 4 ~ 10 자로 해주세요");
    frm.password.focus();
    return false;
  }

  //  선호 음료(favorite)는 최소 1개 이상 선택
  let checkedCount = 0;
  for (let i = 0; i < frm.favorite.length; i++) {
    // 개별 체크박스
    let cb = frm.favorite[i];
    if (cb.checked) {
      console.log(cb.value, "is checked!");
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    alert("최소 1개 이상의 음료를 선택 해야 합니다.");
    return false;
  }

  //  통신사 선택(Select)
  //  선택된 것의 인덱스 확인
  let selectedIndex = frm.telecom.selectedIndex; // select name="telecom"
  console.log("Selected Index:", selectedIndex);
  // The HTMLSelectElement.selectedIndex is a long
  // that reflects the index of
  // the first or last selected < option > element,
  // depending on the value of multiple.
  // The value - 1 indicates that no element is selected.
  let option = frm.telecom[selectedIndex];
  //  option = frm.telecom[선택된 index값]
  alert("선택 통신사:" + option.innerText);
  //  선택된 옵션의 내부 텍스트

  return true;
  // return false;
}

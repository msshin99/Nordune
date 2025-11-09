document.querySelector("header[data-include-file]").addEventListener("includeLoaded", function () {
  const menuButton = document.querySelector("header .mo-menu"); // 이제 요소가 확실히 존재합니다.
  const gnb = document.querySelector("header > ul.gnb"); // GNB 셀렉터도 확인 필요
  const moNavOpen = document.querySelector("header .mo-nav-open");
  const body = document.body;
  
  if (menuButton) { // 안전 장치 추가
    menuButton.addEventListener("click", function () {
      // 1. 햄버거 버튼 클래스 토글
      menuButton.classList.toggle("active");

      // 2. mo-nav-open 요소 클래스 토글
      moNavOpen.classList.toggle("is-open");

      // 3. body에 'no-scroll' 클래스 토글
      body.classList.toggle("no-scroll");
    });
  } else {
      console.error("Error: .mo-menu button not found after includeLoaded");
  }

});
// include.js - HTML 파일을 동적으로 로드하는 스크립트
document.addEventListener("DOMContentLoaded", function () {
  const includeElements = document.querySelectorAll("[data-include-file]");

  includeElements.forEach(function (element) {
    const filePath = element.getAttribute("data-include-file");

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        element.innerHTML = html;

        // === 경로 자동 보정 시작 ===

        const currentPath = window.location.pathname;
        let prefix = "";

        // 현재 경로에서 리포지토리 이름(예: /GOALCHECK)과 파일명을 제외한 순수 폴더 깊이를 계산합니다.
        
        // 1. URL 경로를 '/'로 분리하고 빈 문자열을 제거합니다.
        // 예: /GOALCHECK/insights/sub.html  → ["GOALCHECK", "insights", "sub.html"] (길이 3)
        // 예: /GOALCHECK/index.html         → ["GOALCHECK", "index.html"] (길이 2)
        const pathSegments = currentPath.split("/").filter(segment => segment.length > 0);
        
        // 2. 메인 페이지인지 확인합니다.
        const isMainPage = pathSegments.length <= 2 && (pathSegments.length === 0 || pathSegments[pathSegments.length - 1].toLowerCase().endsWith('index.html'));

        if (!isMainPage) {
            // 서브 페이지인 경우:
            // 깊이 = (전체 세그먼트 개수) - (리포지토리 이름 세그먼트 1개) - (현재 파일명 세그먼트 1개)
            // 즉, /GOALCHECK/insights/sub.html (3개) -> 깊이 = 3 - 2 = 1
            const depth = pathSegments.length - 2; 

            if (depth > 0) {
                // depth가 1이면 "../", 2이면 "../../"
                prefix = "../".repeat(depth);
            }
        }

        // 3. 접두사가 있는 경우에만 포함된 HTML 요소의 경로를 보정합니다.
        if (prefix) {
          element.querySelectorAll("img, a, link, script").forEach((el) => {
            ["src", "href"].forEach((attr) => {
              if (el.hasAttribute(attr)) {
                const val = el.getAttribute(attr);

                // 4. 절대 경로, 외부 링크, 앵커, 이미 보정된 경로는 제외하고 상대 경로만 보정합니다.
                if (
                  val &&
                  !val.startsWith("http") && 
                  !val.startsWith("#") && 
                  !val.startsWith("/") && 
                  !val.startsWith("mailto:") &&
                  !val.startsWith("tel:") &&
                  !val.startsWith("data:") &&
                  !val.startsWith("../") // 이미 상대 경로인 경우 제외 (중복 방지 핵심)
                ) {
                  // 보정된 경로를 속성에 다시 설정합니다.
                  el.setAttribute(attr, prefix + val);
                }
              }
            });
          });
        }
        // === 경로 자동 보정 끝 ===

        element.dispatchEvent(new Event("includeLoaded"));
      })
      .catch((error) => {
        console.error("Error loading file:", filePath, error);
        element.innerHTML = "<p>콘텐츠를 불러올 수 없습니다.</p>";
      });
  });
});
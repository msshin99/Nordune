/* 마우스 커서[s] */
var cursor = document.querySelector(".cursor");
var img_slide = document.querySelectorAll(".product-filter-list");
function cursorEvent(e){
    cursor.style.top = e.pageY - scrollY + "px";
    cursor.style.left = e.pageX + "px";
}
window.addEventListener('mousemove', cursorEvent);
img_slide.forEach(link =>{
    if ( link !== img_slide ){
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("on");
        });
        link.addEventListener("mouseover", () => {
            cursor.classList.add("on");
        });
    }  
});


const quantity = document.getElementById('goodscnt');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');

quantity.addEventListener('input', function() {
    let value = quantity.value;

    if (/[^0-9]/.test(value)) {
        alert('숫자만 입력할 수 있습니다.');
        value = value.replace(/[^0-9]/g, '');
    }

    if (value.length > 4) {
        alert('최대 4자리까지만 입력할 수 있습니다.');
        value = value.slice(0, 4);
    }

    quantity.value = value;
});

plusBtn.addEventListener('click', function(){
    let current = parseInt(quantity.value) || 0;

    current += 1;
    quantity.value = current;

})

minusBtn.addEventListener('click', function(){
    let current = parseInt(quantity.value) || 0;

    current -= 1;
    if(current < 0) current = 0; 

    quantity.value = current;
});



  // 모든 li 요소 선택
        const tabItems = document.querySelectorAll('.tab-menu li');
        
        // 각 li에 클릭 이벤트 추가
        tabItems.forEach(item => {
            const rtWrap = item.querySelector('.rt-wrap');
            
            rtWrap.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 모든 li에서 active 클래스 제거
                tabItems.forEach(tab => {
                    tab.classList.remove('active');
                    // 모든 rt-v1 링크에서 on 클래스 제거
                    const rtV1 = tab.querySelector('.rt-v1');
                    if (rtV1) {
                        rtV1.classList.remove('on');
                    }
                });
                
                // 클릭된 li에 active 클래스 추가
                item.classList.add('active');
                // 클릭된 li의 rt-v1 링크에 on 클래스 추가
                const clickedRtV1 = item.querySelector('.rt-v1');
                if (clickedRtV1) {
                    clickedRtV1.classList.add('on');
                }
            });
        });






// 메뉴 버튼 클릭 시 모바일 네비 열기
const menuBtn = document.querySelector('.menu-open-btn');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
  mobileNav.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});

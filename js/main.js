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
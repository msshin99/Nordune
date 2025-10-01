// include.js
function includeHTML(callback) {
  const includeTarget = document.querySelectorAll('.js-include');
  let loadedCount = 0;

  includeTarget.forEach(el => {
    const file = el.dataset.includeFile;
    if (file) {
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
          loadedCount++;

          // 모든 include 완료 후 콜백 실행
          if (loadedCount === includeTarget.length && typeof callback === 'function') {
            callback();
          }
        })
        .catch(error => {
          el.innerHTML = 'Page Not Found.';
          console.error(error);
        });
    }
  });
}


function initHeaderEvent() {
  const searchBg = document.querySelector('.search-bg');
  const searchBtn = document.querySelector('ul.menu-btn li.search');
  const closeBtn = document.querySelector('.close');
  const header = document.querySelector('header');

  searchBtn.addEventListener('click', () => {
    header.classList.add('active');
    searchBg.classList.add('active');
  });

  closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    header.classList.remove('active');
    searchBg.classList.remove('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML(initHeaderEvent); 
});

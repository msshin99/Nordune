var tab = ['ARTFUL', 'CALM', 'SERENE'];

const mainVisual = new Swiper(".main-visual", {
  loop: true,
  speed: 1000,
  effect:'fade',
  pagination: {
    el: '.main-bullet',
    bulletClass: 'custom-bullet',
    bulletActiveClass: 'is-active',
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '"><span>' + tab[index] + '</span></p>';
    },
  },

  on: {
    slideChange: function () {
      const realIndex = this.realIndex;
      const titleEl = document.querySelector('.main-txt .title');
      if (titleEl) {
        // 텍스트 교체
        titleEl.textContent = tab[realIndex];

        // 애니메이션 효과 클래스 추가
        titleEl.classList.remove('animate'); // 이전 animation 제거 (재시작용)
        void titleEl.offsetWidth; // 강제 리플로우 (애니메이션 재적용용)
        titleEl.classList.add('animate');
      }
    },
  },
});


const newProduct = new Swiper(".product-filter-list", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 12,

  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

// -------------------- 제품 필터링 ----------------------



const viedoBanner = new Swiper(".video-list", {
  slidesPerView: 1,
  loop: true,
  speed: 3000,
  parallax: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  }
});

// 커스텀 페이지네이션 연결
const menuButtons = document.querySelectorAll('.video-pagination .menu-btn');

menuButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    viedoBanner.slideToLoop(index);
  });
});

// 슬라이드 변경 시 active 상태 업데이트
viedoBanner.on('slideChange', () => {
  menuButtons.forEach(btn => btn.classList.remove('on'));
  menuButtons[viedoBanner.realIndex].classList.add('on');
});


// ------------------- 비디오 리스트 -----------------

const otherProduct = new Swiper(".other-list", {
  loop: true,
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 12,
  navigation: {
    nextEl: ".carousel-next",
    prevEl: ".carousel-prev",
  },
    breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});


const detailProduct = new Swiper(".detail-list", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup:1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
        slidesPerView: 2,
        spaceBetween: 2,
        slidesPerGroup:1,
        centeredSlides: true,
    },
  },
  

});

const bannerInner = new Swiper(".banner-list", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
  delay: 4000,
  disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      speed: 1000,
      autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      },
        },
  },

});

const hitgroupList = new Swiper(".hitgroup-list", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 12,
  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },

});
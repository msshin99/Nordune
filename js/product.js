// 상품 데이터 배열
const products = [
    {
        id: 1,
        name: 'The Quiet Form',
        image: 'img/product/chair/img-01.png',
        price: '￦150,000',
        category: 'chair',
        tags: ['NEW', 'FEATURED']
    },
    {
        id: 2,
        name: 'Arcane Seat',
        image: 'img/product/chair/img-02.png',
        price: '￦120,000',
        category: 'chair',
        tags: ['NEW', 'FEATURED']
    },
    {
        id: 3,
        name: 'Arcane Seat',
        image: 'img/product/sofa/img-02.png',
        price: '￦320,000',
        category: 'sofa',
        tags: ['BESTSELLER']
    },
    {
        id: 4,
        name: 'Cloudtone',
        image: 'img/product/table/img-06.png',
        price: '￦200,000',
        category: 'table',
        tags: ['LIMITED']
    },
    {
        id: 5,
        name: 'Cloudtone',
        image: 'img/product/chair/img-05.png',
        price: '￦200,000',
        category: 'chair',
        tags: ['LIMITED']
    },
    {
        id: 6,
        name: 'Still Beam',
        image: 'img/product/props/img-06.png',
        price: '￦60,000',
        category: 'props',
        tags: ['TRENDING']
    },

    // ------------------------------
    {
        id: 7,
        name: 'Whisper Curve',
        image: 'img/product/chair/img-03.png',
        price: '￦62,000',
        category: 'chair',
        tags: ['NEW', 'LIMITED']
    },
    {
        id: 8,
        name: 'Still Frame',
        image: 'img/product/chair/img-04.png',
        price: '￦90,000',
        category: 'chair',
        tags: ['TRENDING', 'FEATURED']
    },
    {
        id: 9,
        name: 'Lune Chair',
        image: 'img/product/chair/img-05.png',
        price: '￦100,000',
        category: 'chair',
        tags: ['BESTSELLER', 'FEATURED']
    },
    {
        id: 10,
        name: 'Fold of Light',
        image: 'img/product/chair/img-06.png',
        price: '￦260,000',
        category: 'chair',
        tags: ['NEW', 'BESTSELLER']
    },
    {
        id: 11,
        name: 'Serene Edge',
        image: 'img/product/chair/img-07.png',
        price: '￦200,000',
        category: 'chair',
        tags: ['LIMITED', 'FEATURED']
    },
    {
        id: 12,
        name: 'Silhouette Chair',
        image: 'img/product/chair/img-08.png',
        price: '￦320,000',
        category: 'chair',
        tags: ['NEW', 'TRENDING']
    },
    
    // -------------------

    {
        id: 13,
        name: 'Stillwood',
        image: 'img/product/table/img-02.png',
        price: '￦320,000',
        category: 'table',
        tags: ['LIMITED', 'FEATURED']
    },
    {
        id: 14,
        name: 'Surface 11',
        image: 'img/product/table/img-03.png',
        price: '￦320,000',
        category: 'table',
        tags: ['BESTSELLER', 'FEATURED']
    },
    {
        id: 15,
        name: 'Atelier Form',
        image: 'img/product/table/img-04.png',
        price: '￦320,000',
        category: 'table',
        tags: ['NEW', 'BESTSELLER']
    },
    {
        id: 16,
        name: 'Calm Ground',
        image: 'img/product/table/img-05.png',
        price: '￦320,000',
        category: 'table',
        tags: ['FEATURED', 'TRENDING']
    },
    {
        id: 17,
        name: 'Grain',
        image: 'img/product/table/img-06.png',
        price: '￦320,000',
        category: 'table',
        tags: ['NEW', 'LIMITED']
    },
    {
        id: 18,
        name: 'Stoneframe',
        image: 'img/product/table/img-07.png',
        price: '￦320,000',
        category: 'table',
        tags: ['LIMITED', 'TRENDING']
    },
    {
        id: 19,
        name: 'Memento',
        image: 'img/product/table/img-08.png',
        price: '￦320,000',
        category: 'table',
        tags: ['BESTSELLER', 'TRENDING']
    },
    {
        id: 20,
        name: 'Nør Table',
        image: 'img/product/table/img-09.png',
        price: '￦320,000',
        category: 'table',
        tags: ['LIMITED', 'TRENDING']
    },

    // ----------------------------
    {
        id: 21,
        name: 'Embrace',
        image: 'img/product/sofa/img-02.png',
        price: '￦120,000',
        category: 'sofa',
        tags: ['BESTSELLER', 'TRENDING']
    },
    {
        id: 22,
        name: 'Nuvé',
        image: 'img/product/sofa/img-03.png',
        price: '￦380,000',
        category: 'sofa',
        tags: ['LIMITED', 'TRENDING']
    },
    {
        id: 23,
        name: 'Velvet Field',
        image: 'img/product/sofa/img-04.png',
        price: '￦360,000',
        category: 'sofa',
        tags: ['BESTSELLER', 'TRENDING']
    },
    {
        id: 24,
        name: 'Slowwave',
        image: 'img/product/sofa/img-05.png',
        price: '￦320,000',
        category: 'sofa',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 25,
        name: 'Haven',
        image: 'img/product/sofa/img-06.png',
        price: '￦340,000',
        category: 'sofa',
        tags: ['BESTSELLER', 'TRENDING']
    },

    // --------------------------

    {
        id: 30,
        name: 'Mura',
        image: 'img/product/props/img-01.png',
        price: '￦160,000',
        category: 'props',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 31,
        name: 'Mura',
        image: 'img/product/props/img-02.png',
        price: '￦180,000',
        category: 'props',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 32,
        name: 'Mura',
        image: 'img/product/props/img-03.png',
        price: '￦120,000',
        category: 'props',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 33,
        name: 'Mura',
        image: 'img/product/props/img-04.png',
        price: '￦92,000',
        category: 'props',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 34,
        name: 'Mura',
        image: 'img/product/props/img-05.png',
        price: '￦32,000',
        category: 'props',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 35,
        name: 'Mura',
        image: 'img/product/props/img-06.png',
        price: '￦40,000',
        category: 'props',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 36,
        name: 'Mura',
        image: 'img/product/props/img-07.png',
        price: '￦200,000',
        category: 'props',
        tags: ['NEW', 'TRENDING']
    },

];

// 페이지 타입 감지
function isSubPage() {
    return document.querySelector('.tab-menu') !== null;
}

// 이미지 경로 변환 함수
function getImagePath(imagePath) {
    if (isSubPage()) {
        return '../' + imagePath;
    }
    return imagePath;
}

// 배경 이미지 경로 변환 함수
function getBgImagePath(bgPath) {
    if (isSubPage()) {
        return '../' + bgPath;
    }
    return bgPath;
}

// Swiper 인스턴스 저장
let newProduct = null;

// 현재 선택된 필터
let currentFilter = 'ALL';

// 상품 렌더링 함수
function renderProducts(filter = 'ALL') {
    const productList = document.querySelector('.product-list');
    if (!productList) return;

    // 필터링된 상품 배열
    let filteredProducts = products;
    
    if (filter !== 'ALL') {
        filteredProducts = products.filter(product => 
            product.tags.includes(filter)
        );
    }

    // HTML 생성
    const productsHTML = filteredProducts.map(product => `
        <div class="swiper-slide item" style="background: #f7f8f9 url('${getBgImagePath('img/product/276x360-bg.png')}') no-repeat center center" onclick="location.href='product/detail.html'">
            <span class="name">${product.name}</span>
            <img src="${getImagePath(product.image)}" alt="${product.name}">
            <span class="price">${product.price}</span>
        </div>
    `).join('');

    productList.innerHTML = productsHTML;

    // Swiper 업데이트
    if (newProduct) {
        // Swiper를 파괴하고 다시 초기화
        newProduct.destroy(true, true);
        initSwiper();
    }
}

// Swiper 초기화 함수
function initSwiper() {
    newProduct = new Swiper(".product-filter-list", {
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
}

// 버튼 활성화 상태 변경
function updateButtonState(filterName) {
    // 모든 버튼의 on 클래스 제거
    document.querySelectorAll('.rt-recent .rt-v1').forEach(btn => {
        btn.classList.remove('on');
    });

    // 클릭된 버튼에 on 클래스 추가
    const buttons = document.querySelectorAll('.rt-recent .rt-v1');
    buttons.forEach(btn => {
        const btnText = btn.textContent.replace(',', '').trim();
        if (btnText === filterName) {
            btn.classList.add('on');
        }
    });
}

// 필터 버튼 이벤트 리스너 등록
function initializeFilters() {
    // rt-wrap에 클릭 이벤트 추가 (rt-v1과 rt-v2를 모두 포함하는 영역)
    const filterWrappers = document.querySelectorAll('.rt-wrap');

    filterWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function(e) {
            const btn = this.querySelector('.rt-v1');
            if (!btn) return;
            
            const filterName = btn.textContent.replace(',', '').trim();
            currentFilter = filterName;
            
            console.log('Filter clicked:', filterName); // 디버깅용
            
            // 버튼 상태 업데이트
            updateButtonState(filterName);
            
            // 상품 렌더링
            renderProducts(filterName);
        });
        
        // 커서 포인터 추가
        wrapper.style.cursor = 'pointer';
    });
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 초기 상품 렌더링
    renderProducts('ALL');
    
    // Swiper 초기화
    initSwiper();
    
    // 필터 버튼 초기화
    initializeFilters();
});



// -------------------------other-product-list ------------------------- //

// 현재 선택된 카테고리 (기본값: 전체)
let currentCategory = 'all';

// Swiper 인스턴스들을 저장할 배열
let otherSwipers = [];

// 카테고리별로 상품 필터링
function getProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// sub.html 상품 목록 렌더링
function renderSubProducts(category = 'all') {
    const productList = document.querySelector('.product-list');
    if (!productList) return;

    const filteredProducts = getProductsByCategory(category);

    // HTML 생성
    const productsHTML = filteredProducts.map(product => {
        const objectFit = product.category === 'chair' || product.category === 'table' ? 'style="object-fit: contain;"' : '';
        return `
            <li class="item" style="background: #f7f8f9 url('${getBgImagePath('img/product/276x360-bg.png')}') no-repeat center center">
                <span class="name">${product.name}</span>
                <img src="${getImagePath(product.image)}" alt="${product.name}" ${objectFit}>
                <span class="price">${product.price}</span>
            </li>
        `;
    }).join('');

    productList.innerHTML = productsHTML;
    
    console.log(`Rendered ${filteredProducts.length} products for category: ${category}`);
}

// index.html 카테고리별 상품 렌더링 (기존 코드)
function renderCategoryProducts(category, containerIndex) {
    const otherLists = document.querySelectorAll('.other-list');
    if (!otherLists[containerIndex]) return;

    const productList = otherLists[containerIndex].querySelector('.product-list');
    if (!productList) return;

    const categoryProducts = getProductsByCategory(category);

    // HTML 생성
    const productsHTML = categoryProducts.map(product => {
        const objectFit = category === 'chair' || category === 'table' ? 'style="object-fit: contain;"' : '';
        return `
            <div class="swiper-slide item" style="background: #f7f8f9 url('${getBgImagePath('img/product/426x520-bg.png')}') no-repeat center center">
                <span class="name">${product.name}</span>
                <img src="${getImagePath(product.image)}" alt="${product.name}" ${objectFit}>
                <span class="price">${product.price}</span>
            </div>
        `;
    }).join('');

    productList.innerHTML = productsHTML;
}

// index.html 모든 카테고리 상품 렌더링
function renderAllProducts() {
    const categories = ['chair', 'table','sofa', 'props'];
    
    categories.forEach((category, index) => {
        renderCategoryProducts(category, index);
    });
}

// Swiper 초기화 (index.html용)
function initSwipers() {
    const otherLists = document.querySelectorAll('.other-list');
    
    // 기존 Swiper 인스턴스 파괴
    otherSwipers.forEach(swiper => {
        if (swiper) swiper.destroy(true, true);
    });
    otherSwipers = [];

    otherLists.forEach((list, index) => {
        const swiper = new Swiper(list, {
            loop: true,
            speed: 1000,
            slidesPerView: 2,
            spaceBetween: 12,
            navigation: {
                nextEl: list.querySelector('.carousel-next'),
                prevEl: list.querySelector('.carousel-prev'),
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
        
        otherSwipers.push(swiper);
    });
}

// 탭 메뉴 활성화 상태 업데이트
function updateTabActiveState(selectedTab) {
    const tabItems = document.querySelectorAll('.tab-menu li');
    tabItems.forEach(item => item.classList.remove('active'));
    selectedTab.classList.add('active');
}

// 탭 메뉴 이벤트 리스너 설정
function initTabMenu() {
    const tabMenu = document.querySelector('.tab-menu');
    if (!tabMenu) return;

    const tabItems = tabMenu.querySelectorAll('li');
    
    tabItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 카테고리 매핑 (인덱스 기반)
            const categoryMap = {
                0: 'all',
                1: 'chair',
                2: 'table',
                3: 'sofa',
                4: 'props'
            };
            
            currentCategory = categoryMap[index];
            
            // 탭 활성화 상태 업데이트
            updateTabActiveState(item);
            
            // 상품 목록 다시 렌더링
            renderSubProducts(currentCategory);
        });
    });
    
    // 첫 번째 탭 기본 활성화
    if (tabItems.length > 0) {
        tabItems[0].classList.add('active');
    }
}

// 페이지 타입 감지 및 초기화
function initPage() {
    const isSubPageCheck = document.querySelector('.tab-menu') !== null;
    const isIndexPage = document.querySelector('.other-product-list') !== null;
    
    if (isSubPageCheck) {
        // sub.html 초기화
        renderSubProducts('all');
        initTabMenu();
        console.log('Sub page initialized');
    }
    
    if (isIndexPage) {
        // index.html 초기화
        renderAllProducts();
        initSwipers();
        console.log('Index page initialized with other products:', {
            chair: getProductsByCategory('chair').length,
            table: getProductsByCategory('table').length,
            props: getProductsByCategory('props').length
        });
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', initPage);
// 상품 데이터 배열
const products = [
    {
        id: 1,
        name: '[Sharp oblong 1800]',
        image: 'img/product/chair/img-01.png',
        price: '￦150,000',
        category: 'chair',
        tags: ['NEW', 'FEATURED']
    },
    {
        id: 2,
        name: '[Sharp oblong 1800]',
        image: 'img/product/chair/img-02.png',
        price: '￦150,000',
        category: 'chair',
        tags: ['BESTSELLER']
    },
    {
        id: 3,
        name: '[Sharp oblong 1800]',
        image: 'img/product/chair/img-03.png',
        price: '￦150,000',
        category: 'chair',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 4,
        name: '[Sharp oblong 1800]',
        image: 'img/product/chair/img-04.png',
        price: '￦150,000',
        category: 'chair',
        tags: ['LIMITED']
    },
    {
        id: 5,
        name: '[Sharp oblong 1800]',
        image: 'img/product/chair/img-05.png',
        price: '￦150,000',
        category: 'chair',
        tags: ['FEATURED']
    },
    {
        id: 6,
        name: '[Sharp oblong 1800]',
        image: 'img/product/table/img-01.png',
        price: '￦150,000',
        category: 'table',
        tags: ['BESTSELLER', 'FEATURED']
    },
    {
        id: 7,
        name: '[Sharp oblong 1800]',
        image: 'img/product/table/img-02.png',
        price: '￦150,000',
        category: 'table',
        tags: ['NEW']
    },
    {
        id: 8,
        name: '[Sharp oblong 1800]',
        image: 'img/product/table/img-03.png',
        price: '￦150,000',
        category: 'table',
        tags: ['TRENDING', 'LIMITED']
    },
    {
        id: 9,
        name: '[Sharp oblong 1800]',
        image: 'img/product/table/img-04.png',
        price: '￦150,000',
        category: 'table',
        tags: ['NEW', 'BESTSELLER']
    },
    {
        id: 10,
        name: '[Sharp oblong 1800]',
        image: 'img/product/table/img-05.png',
        price: '￦150,000',
        category: 'table',
        tags: ['FEATURED']
    },
    {
        id: 11,
        name: '[Sharp oblong 1800]',
        image: 'img/product/props/img-01.png',
        price: '￦150,000',
        category: 'props',
        tags: ['NEW', 'TRENDING']
    },
    {
        id: 12,
        name: '[Sharp oblong 1800]',
        image: 'img/product/props/img-02.png',
        price: '￦150,000',
        category: 'props',
        tags: ['LIMITED']
    },
    {
        id: 13,
        name: '[Sharp oblong 1800]',
        image: 'img/product/props/img-03.png',
        price: '￦150,000',
        category: 'props',
        tags: ['BESTSELLER']
    },
    {
        id: 14,
        name: '[Sharp oblong 1800]',
        image: 'img/product/props/img-04.png',
        price: '￦150,000',
        category: 'props',
        tags: ['NEW', 'FEATURED']
    },
    {
        id: 15,
        name: '[Sharp oblong 1800]',
        image: 'img/product/props/img-05.png',
        price: '￦150,000',
        category: 'props',
        tags: ['TRENDING']
    },
    {
        id: 16,
        name: '[Sharp oblong 1800]',
        image: 'img/product/props/img-06.png',
        price: '￦150,000',
        category: 'props',
        tags: ['LIMITED', 'FEATURED']
    }
];

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
        <div class="swiper-slide item" style="background: #f7f8f9 url('img/product/276x360-bg.png') no-repeat center center">
            <span class="name">${product.name}</span>
            <img src="${product.image}" alt="${product.name}">
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
            <li class="item" style="background: #f7f8f9 url('img/product/276x360-bg.png') no-repeat center center">
                <span class="name">${product.name}</span>
                <img src="${product.image}" alt="${product.name}" ${objectFit}>
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
            <div class="swiper-slide item" style="background: #f7f8f9 url('img/product/426x520-bg.png') no-repeat center center">
                <span class="name">${product.name}</span>
                <img src="${product.image}" alt="${product.name}" ${objectFit}>
                <span class="price">${product.price}</span>
            </div>
        `;
    }).join('');

    productList.innerHTML = productsHTML;
}

// index.html 모든 카테고리 상품 렌더링
function renderAllProducts() {
    const categories = ['chair', 'table', 'props'];
    
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
    const isSubPage = document.querySelector('.tab-menu') !== null;
    const isIndexPage = document.querySelector('.other-product-list') !== null;
    
    if (isSubPage) {
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
const carsData = [
    { brand: "RANGE ROVER", model: "SPORT", generation: "L320 (1-ше пок.)", year: "2008", images: ["https://loremflickr.com/640/480/range,rover,sport?lock=101", "https://loremflickr.com/640/480/range,rover,sport?lock=102"] },
    { brand: "RANGE ROVER", model: "SPORT", generation: "L494 (2-ге пок.)", year: "2017", images: ["https://loremflickr.com/640/480/range,rover,sport?lock=103", "https://loremflickr.com/640/480/range,rover,sport?lock=104"] },
    { brand: "RANGE ROVER", model: "SPORT", generation: "L461 (3-тє пок.)", year: "2025", images: ["https://loremflickr.com/640/480/range,rover,sport?lock=105", "https://loremflickr.com/640/480/range,rover,sport?lock=106"] },

    { brand: "BMW", model: "M5", generation: "E39 (3-тє пок.)", year: "1999", images: ["https://loremflickr.com/640/480/bmw,m5?lock=201", "https://loremflickr.com/640/480/bmw,m5?lock=202"] },
    { brand: "BMW", model: "M5", generation: "F90 (6-те пок.)", year: "2021", images: ["https://loremflickr.com/640/480/bmw,m5?lock=203", "https://loremflickr.com/640/480/bmw,m5?lock=204"] },
    { brand: "BMW", model: "M5", generation: "G90 (7-ме пок.)", year: "2025", images: ["https://loremflickr.com/640/480/bmw,m5?lock=205", "https://loremflickr.com/640/480/bmw,m5?lock=206"] },

    { brand: "MERCEDES-BENZ", model: "G-CLASS", generation: "W463 (1-ше пок.)", year: "2012", images: ["https://loremflickr.com/640/480/mercedes,g-class?lock=301", "https://loremflickr.com/640/480/mercedes,g-class?lock=302"] },
    { brand: "MERCEDES-BENZ", model: "G-CLASS", generation: "W463 FL (2-ге пок.)", year: "2022", images: ["https://loremflickr.com/640/480/mercedes,g-class?lock=303", "https://loremflickr.com/640/480/mercedes,g-class?lock=304"] },

    { brand: "TESLA", model: "MODEL S", generation: "1-ше покоління", year: "2015", images: ["https://loremflickr.com/640/480/tesla,model-s?lock=401", "https://loremflickr.com/640/480/tesla,model-s?lock=402"] },
    { brand: "TESLA", model: "MODEL S", generation: "Plaid (Рестайлінг)", year: "2023", images: ["https://loremflickr.com/640/480/tesla,model-s?lock=403", "https://loremflickr.com/640/480/tesla,model-s?lock=404"] },

    { brand: "AUDI", model: "RS6", generation: "C7 (3-тє пок.)", year: "2015", images: ["https://loremflickr.com/640/480/audi,rs6?lock=501", "https://loremflickr.com/640/480/audi,rs6?lock=502"] },
    { brand: "AUDI", model: "RS6", generation: "C8 (4-те пок.)", year: "2022", images: ["https://loremflickr.com/640/480/audi,rs6?lock=503", "https://loremflickr.com/640/480/audi,rs6?lock=504"] }
];

// 2. HTML-ШАБЛОН ГОЛОВНОЇ СТОРІНКИ
const mainPageHTML = `
    <section class="hero">
  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80" alt="Hero Car" class="hero-bg">
        <div class="hero-content">
            <h1><span>NEOTRACK</span> - платформа для пошуку та вибору автомобілів.</h1>
            <p>Ми допомагаємо швидко знаходити автомобілі різних марок, поколінь та років випуску.</p>
            <button class="btn-yellow" id="hero-action-btn">Переглянути авто</button>
        </div>
    </section>
    <section class="about-section">
        <div class="about-text">
            <h2 class="section-title">Хто ми</h2>
            <p class="about-subtitle"><span>NEOTRACK</span> — це сучасний online-сервіс для зручного пошуку автомобілів.</p>
            <ul class="about-list">
                <li>сучасний дизайн та зручна навігація</li>
                <li>швидкий пошук автомобілів</li>
                <li>великий каталог різних брендів</li>
                <li>актуальна та перевірена інформація</li>
                <li>комфортне користування сайтом на будь-якому пристрої</li>
            </ul>
        </div>
        <div class="about-img-box">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" alt="About Us Car" class="about-img">
        </div>
    </section>
    <section style="display: flex; flex-direction: column; gap: 25px;">
        <h2 class="advantages-title">Наші переваги</h2>
        <div class="advantages-grid">
            <div class="adv-card"><div class="adv-icon">🚗</div><div><h3>Великий вибір</h3><p>Багато автомобілів різних брендів, моделей і років випуску.</p></div></div>
            <div class="adv-card"><div class="adv-icon">🔍</div><div><h3>Швидкий пошук</h3><p>Фільтрація по марці, моделі та поколінню за лічені секунди.</p></div></div>
            <div class="adv-card"><div class="adv-icon">🛡️</div><div><h3>Надійність</h3><p>Перевіряємо історію автомобіля, технічний стан та документи.</p></div></div>
        </div>
    </section>
`;

// 3. HTML-ШАБЛОН СТОРІНКИ КАТАЛОГУ (Всі селекти заблоковані по черзі)
const catalogPageHTML = `
    <section class="filter-panel">
        <select class="filter-select" id="brand-select">
            <option value="" disabled selected>Марка &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</option>
            <option value="RANGE ROVER">Range Rover</option>
            <option value="BMW">BMW</option>
            <option value="MERCEDES-BENZ">Mercedes-Benz</option>
            <option value="TESLA">Tesla</option>
            <option value="AUDI">Audi</option>
        </select>
        
        <select class="filter-select" id="model-select" disabled>
            <option value="" disabled selected>Модель &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</option>
        </select>
        
        <select class="filter-select" id="gen-select" disabled>
            <option value="" disabled selected>Покоління &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</option>
        </select>
        
        <button class="btn-search">Пошук</button>
    </section>

    <section class="catalog-grid" id="cars-list-container"></section>
`;

const contentArea = document.getElementById('content-area');

// 4. ГОЛОВНА ФУНКЦІЯ РЕНДЕРУ ТА ДИНАМІЧНОЇ ФІЛЬТРАЦІЇ
function renderPage(pageName) {
    if (!contentArea) return;
    
    if (pageName === 'main') {
        contentArea.innerHTML = mainPageHTML;
        const actionBtn = document.getElementById('hero-action-btn');
        if (actionBtn) {
            actionBtn.addEventListener('click', () => renderPage('catalog'));
        }
        
    } else if (pageName === 'catalog') {
        contentArea.innerHTML = catalogPageHTML;
        
        const brandSel = document.getElementById('brand-select');
        const modelSel = document.getElementById('model-select');
        const genSel = document.getElementById('gen-select');
        const searchBtn = document.querySelector('.btn-search');
        const container = document.getElementById('cars-list-container');
        
        // КРОК А: Користувач обрав Марку -> підтягуємо її Моделі
        brandSel.addEventListener('change', () => {
            modelSel.innerHTML = `<option value="" disabled selected>Модель &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</option>`;
            genSel.innerHTML = `<option value="" disabled selected>Покоління &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</option>`;
            genSel.disabled = true;
            
            const models = [];
            carsData.forEach(car => {
                if (car.brand === brandSel.value && !models.includes(car.model)) {
                    models.push(car.model);
                }
            });
            
            models.forEach(m => modelSel.innerHTML += `<option value="${m}">${m}</option>`);
            modelSel.disabled = false;
        });

        // КРОК Б: Користувач обрав Модель -> підтягуємо її Покоління
        modelSel.addEventListener('change', () => {
            genSel.innerHTML = `<option value="" disabled selected>Покоління &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</option>`;
            
            const generations = [];
            carsData.forEach(car => {
                if (car.brand === brandSel.value && car.model === modelSel.value && !generations.includes(car.generation)) {
                    generations.push(car.generation);
                }
            });
            
            generations.forEach(g => genSel.innerHTML += `<option value="${g}">${g}</option>`);
            genSel.disabled = false;
        });
        
        // КРОК В: Клік на «ПОШУК» -> виводимо картки з 2 фотографіями окремо (ВИПРАВЛЕНО ІНДЕКСИ КАРТИНОК)
        searchBtn.addEventListener('click', () => {
            container.innerHTML = '';
            
            carsData.forEach(car => {
                const matchBrand = car.brand === brandSel.value;
                const matchModel = car.model === modelSel.value;
                const matchGen = !genSel.value || car.generation === genSel.value;
                
if (matchBrand && matchModel && matchGen) {
    car.images.forEach((image, index) => {
        container.innerHTML += `
            <div class="car-card">
                <div class="car-img-box">
                    <img src="${image}" alt="${car.brand} ${car.model} photo ${index + 1}" class="car-img" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; max-width: 100%; max-height: 100%;">
                </div>
                <div class="car-tags">
                    <div class="car-tag">${car.brand}</div>
                    <div class="car-tag">${car.model}</div>
                    <div class="car-tag">${car.generation}</div>
                </div>
            </div>`;
    });
}
            });
            
            if (container.innerHTML === '') {
                container.innerHTML = `<h3 style="grid-column: 1/-1; text-align: center; color: #666; margin-top: 20px; text-transform: uppercase;">Нічого не знайдено</h3>`;
            }
        });

    } else if (pageName === 'add') {
        contentArea.innerHTML = `
            <section style="max-width: 500px; margin: 40px auto; background: #ffffff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 20px;">
                <h2 style="font-size: 22px; font-weight: 700; text-transform: uppercase; text-align: center; color: #0B0F19; margin-bottom: 10px;">Добавити марку</h2>
                <div style="display: flex; flex-direction: column; gap: 8px;"><label style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #666; text-align: left;">Марка</label><input type="text" id="add-brand" placeholder="Наприклад, RANGE ROVER" style="width: 100%; background: #0B0F19; color: #ffffff; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 14px; outline: none;"></div>
                <div style="display: flex; flex-direction: column; gap: 8px;"><label style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #666; text-align: left;">Модель</label><input type="text" id="add-model" placeholder="Наприклад, SPORT" style="width: 100%; background: #0B0F19; color: #ffffff; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 14px; outline: none;"></div>
                <div style="display: flex; flex-direction: column; gap: 8px;"><label style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #666; text-align: left;">Покоління / Рік</label><input type="text" id="add-year" placeholder="Наприклад, 2025" style="width: 100%; background: #0B0F19; color: #ffffff; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 14px; outline: none;"></div>
                <div style="display: flex; flex-direction: column; gap: 8px;"><label style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #666; text-align: left;">Фото машини</label><label style="width: 100%; background: #E5E5E5; color: #0B0F19; border: 2px dashed #0B0F19; padding: 15px; border-radius: 8px; font-weight: bold; font-size: 14px; text-align: center; cursor: pointer; display: block; transition: 0.2s;">📁 Виберіть файл зображення<input type="file" id="add-img" accept="image/*" style="display: none;"></label></div>
                <button id="submit-car-btn" class="btn-yellow" style="width: 100%; padding: 14px; margin-top: 10px; border-radius: 8px; font-weight: 900; text-align: center; justify-content: center; display: flex;">Підтвердити додавання</button>
            </section>
        `;
        document.getElementById('submit-car-btn').addEventListener('click', () => {
            alert('Марку успішно надіслано на модерацію!');
            renderPage('catalog'); 
        });
    }
    updateActiveNavigation(pageName);
    window.scrollTo(0, 0);
}

// 5. НАЛАШТУВАННЯ НАВІГАЦІЇ ТА КЛІКІВ (СУПЕР-НАДІЙНИЙ ВАРІАНТ ЗА ТЕКСТОМ)
function updateActiveNavigation(pageName) {
    document.querySelectorAll('.nav-links a, .mobile-nav .nav-btn').forEach(btn => {
        const page = btn.getAttribute('data-page');
        const text = btn.innerText ? btn.innerText.toUpperCase() : '';
        
        if (page === pageName || (pageName === 'catalog' && text.includes('ЗНАЙТИ'))) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

document.querySelectorAll('.nav-links a, .mobile-nav a, header a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        let targetPage = link.getAttribute('data-page');
        const text = link.innerText ? link.innerText.toUpperCase() : '';
        
        if (!targetPage) {
            if (text.includes('ГОЛОВНА')) targetPage = 'main';
            else if (text.includes('ЗНАЙТИ') || text.includes('АВТО')) targetPage = 'catalog';
            else if (text.includes('ДОБАВИТИ') || text.includes('МАРКУ')) targetPage = 'add';
        }
        
        if (targetPage) {
            renderPage(targetPage);
        }
    });
});

const logoDesktop = document.getElementById('logo-desktop');
const logoMobile = document.getElementById('logo-mobile');
if (logoDesktop) logoDesktop.addEventListener('click', (e) => { e.preventDefault(); renderPage('main'); });
if (logoMobile) logoMobile.addEventListener('click', (e) => { e.preventDefault(); renderPage('main'); });

document.querySelectorAll('.plus-btn, .mobile-add-text').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        renderPage('add');
    });
});

renderPage('main');

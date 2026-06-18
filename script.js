// 1. ОНОВЛЕНА БАЗА ДАНИХ (ЧАСТИНА 1: Range Rover, BMW, Mercedes)
const carsData = [
    // RANGE ROVER SPORT
    { brand: "RANGE ROVER", model: "SPORT", generation: "L320 (1-ше пок.)", year: "2008", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M15 38 L25 24 L55 22 L85 30 L85 42 L15 42 Z' fill='%23ffffff'/><circle cx='30' cy='42' r='7' fill='%23FF9900'/><circle cx='70' cy='42' r='7' fill='%23FF9900'/><text x='50' y='15' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>RR SPORT L320</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M15 38 L25 24 L55 22 L85 30 L85 42 L15 42 Z' fill='%23ffffff'/><circle cx='30' cy='42' r='7' fill='%23FF9900'/><circle cx='70' cy='42' r='7' fill='%23FF9900'/><text x='50' y='15' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>RR SPORT REAR</text></svg>"] },
    { brand: "RANGE ROVER", model: "SPORT", generation: "L494 (2-ге пок.)", year: "2017", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M12 36 L22 22 L60 20 L88 28 L88 42 L12 42 Z' fill='%23f0f0f0'/><circle cx='28' cy='42' r='7' fill='%23FF9900'/><circle cx='72' cy='42' r='7' fill='%23FF9900'/><text x='50' y='14' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>RR SPORT L494</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M12 36 L22 22 L60 20 L88 28 L88 42 L12 42 Z' fill='%23f0f0f0'/><circle cx='28' cy='42' r='7' fill='%23FF9900'/><circle cx='72' cy='42' r='7' fill='%23FF9900'/><text x='50' y='14' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>RR SPORT REAR</text></svg>"] },
    { brand: "RANGE ROVER", model: "SPORT", generation: "L461 (3-тє пок.)", year: "2025", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M10 35 L20 20 L65 18 L90 26 L90 42 L10 42 Z' fill='%23ffffff'/><circle cx='26' cy='42' r='7' fill='%23FF9900'/><circle cx='74' cy='42' r='7' fill='%23FF9900'/><text x='50' y='12' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>RR SPORT L461</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M10 35 L20 20 L65 18 L90 26 L90 42 L10 42 Z' fill='%23ffffff'/><circle cx='26' cy='42' r='7' fill='%23FF9900'/><circle cx='74' cy='42' r='7' fill='%23FF9900'/><text x='50' y='12' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>RR SPORT REAR</text></svg>"] },
    
    // BMW M5
    { brand: "BMW", model: "M5", generation: "E39 (3-тє пок.)", year: "1999", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M15 38 L28 25 L65 25 L85 34 L85 44 L15 44 Z' fill='%230066cc'/><circle cx='32' cy='44' r='6' fill='%23E5E5E5'/><circle cx='68' cy='44' r='6' fill='%23E5E5E5'/><text x='50' y='15' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>BMW M5 E39</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M15 38 L28 25 L65 25 L85 34 L85 44 L15 44 Z' fill='%230066cc'/><circle cx='32' cy='44' r='6' fill='%23E5E5E5'/><circle cx='68' cy='44' r='6' fill='%23E5E5E5'/><text x='50' y='15' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>BMW M5 REAR</text></svg>"] },
    { brand: "BMW", model: "M5", generation: "F90 (6-те пок.)", year: "2021", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M12 36 L26 23 L68 23 L88 32 L88 44 L12 44 Z' fill='%23cc0000'/><circle cx='30' cy='44' r='6' fill='%23E5E5E5'/><circle cx='70' cy='44' r='6' fill='%23E5E5E5'/><text x='50' y='14' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>BMW M5 F90</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M12 36 L26 23 L68 23 L88 32 L88 44 L12 44 Z' fill='%23cc0000'/><circle cx='30' cy='44' r='6' fill='%23E5E5E5'/><circle cx='70' cy='44' r='6' fill='%23E5E5E5'/><text x='50' y='14' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>BMW M5 REAR</text></svg>"] },
    { brand: "BMW", model: "M5", generation: "G90 (7-ме пок.)", year: "2025", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M10 35 L24 21 L70 21 L90 30 L90 44 L10 44 Z' fill='%23000000'/><circle cx='28' cy='44' r='6' fill='%23FF9900'/><circle cx='72' cy='44' r='6' fill='%23FF9900'/><text x='50' y='12' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>BMW M5 G90</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M10 35 L24 21 L70 21 L90 30 L90 44 L10 44 Z' fill='%23000000'/><circle cx='28' cy='44' r='6' fill='%23FF9900'/><circle cx='72' cy='44' r='6' fill='%23FF9900'/><text x='50' y='12' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>BMW M5 REAR</text></svg>"] },

    // MERCEDES-BENZ G-CLASS
    { brand: "MERCEDES-BENZ", model: "G-CLASS", generation: "W463 (1-ше пок.)", year: "2012", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M20 42 L20 20 L65 20 L80 30 L80 42 Z' fill='%23444444'/><circle cx='35' cy='42' r='6' fill='%23fff'/><circle cx='65' cy='42' r='6' fill='%23fff'/><text x='50' y='13' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>G-CLASS W463</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M20 42 L20 20 L65 20 L80 30 L80 42 Z' fill='%23444444'/><circle cx='35' cy='42' r='6' fill='%23fff'/><circle cx='65' cy='42' r='6' fill='%23fff'/><text x='50' y='13' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>G-CLASS REAR</text></svg>"] },
    { brand: "MERCEDES-BENZ", model: "G-CLASS", generation: "W463 FL (2-ге пок.)", year: "2022", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M20 42 L20 18 L68 18 L82 28 L82 42 Z' fill='%23777777'/><circle cx='35' cy='42' r='6' fill='%23fff'/><circle cx='68' cy='42' r='6' fill='%23fff'/><text x='50' y='12' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>G63 AMG FL</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M20 42 L20 18 L68 18 L82 28 L82 42 Z' fill='%23777777'/><circle cx='35' cy='42' r='6' fill='%23fff'/><circle cx='68' cy='42' r='6' fill='%23fff'/><text x='50' y='12' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>G63 AMG REAR</text></svg>"] },

     // TESLA MODEL S
    { brand: "TESLA", model: "MODEL S", generation: "1-ше покоління", year: "2015", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M10 38 L25 24 L65 24 L90 35 L90 44 L10 44 Z' fill='%23eeeeee'/><circle cx='28' cy='44' r='6' fill='%23111'/><circle cx='72' cy='44' r='6' fill='%23111'/><text x='50' y='15' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>TESLA MODEL S</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M10 38 L25 24 L65 24 L90 35 L90 44 L10 44 Z' fill='%23eeeeee'/><circle cx='28' cy='44' r='6' fill='%23111'/><circle cx='72' cy='44' r='6' fill='%23111'/><text x='50' y='15' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>TESLA REAR</text></svg>"] },
    { brand: "TESLA", model: "MODEL S", generation: "Plaid (Рестайлінг)", year: "2023", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M10 36 L25 22 L65 22 L90 33 L90 44 L10 44 Z' fill='%23cc0000'/><circle cx='28' cy='44' r='6' fill='%23111'/><circle cx='72' cy='44' r='6' fill='%23111'/><text x='50' y='14' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>MODEL S PLAID</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M10 36 L25 22 L65 22 L90 33 L90 44 L10 44 Z' fill='%23cc0000'/><circle cx='28' cy='44' r='6' fill='%23111'/><circle cx='72' cy='44' r='6' fill='%23111'/><text x='50' y='14' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>TESLA REAR</text></svg>"] },

    // AUDI RS6
    { brand: "AUDI", model: "RS6", generation: "C7 (3-тє пок.)", year: "2015", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M10 36 L24 24 L75 24 L90 32 L90 44 L10 44 Z' fill='%23444444'/><circle cx='28' cy='44' r='6' fill='%23fff'/><circle cx='72' cy='44' r='6' fill='%23fff'/><text x='50' y='15' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>AUDI RS6 C7</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M10 36 L24 24 L75 24 L90 32 L90 44 L10 44 Z' fill='%23444444'/><circle cx='28' cy='44' r='6' fill='%23fff'/><circle cx='72' cy='44' r='6' fill='%23fff'/><text x='50' y='15' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>AUDI RS6 REAR</text></svg>"] },
    { brand: "AUDI", model: "RS6", generation: "C8 (4-те пок.)", year: "2022", images: ["data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%230B0F19'/><path d='M10 34 L24 22 L78 22 L90 30 L90 44 L10 44 Z' fill='%23222222'/><circle cx='28' cy='44' r='6' fill='%23FF9900'/><circle cx='74' cy='44' r='6' fill='%23FF9900'/><text x='50' y='13' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>AUDI RS6 C8</text></svg>", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60' width='100%' height='100%'><rect width='100' height='60' fill='%231a2233'/><path d='M10 34 L24 22 L78 22 L90 30 L90 44 L10 44 Z' fill='%23222222'/><circle cx='28' cy='44' r='6' fill='%23FF9900'/><circle cx='74' cy='44' r='6' fill='%23FF9900'/><text x='50' y='13' fill='white' font-size='5' font-weight='bold' text-anchor='middle'>AUDI RS6 REAR</text></svg>"] }
];

// 2. HTML-ШАБЛОН ГОЛОВНОЇ СТОРІНКИ
const mainPageHTML = `
    <section class="hero">
  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80" alt="Hero Car" class="hero-bg">h
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
                    container.innerHTML += `
                        <div class="car-card">
                            <!-- ТУТ ВИПРАВЛЕНО: Фото беруться окремо через [0] та [1] -->
                            <div class="car-img-box" style="display: flex; gap: 10px; height: 180px; background: transparent; padding: 0;">
                                <img src="${car.images[0]}" alt="Photo 1" class="car-img" style="width: 50%; height: 100%; object-fit: cover; border-radius: 12px; max-width: 50%;">
                                <img src="${car.images[1]}" alt="Photo 2" class="car-img" style="width: 50%; height: 100%; object-fit: cover; border-radius: 12px; max-width: 50%;">
                            </div>
                            <div class="car-tags">
                                <div class="car-tag">${car.brand}</div>
                                <div class="car-tag">${car.model}</div>
                                <div class="car-tag">${car.generation}</div>
                            </div>
                        </div>`;
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

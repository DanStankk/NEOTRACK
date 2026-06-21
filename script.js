const fallbackPhotos = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85"
];

const car = (brand, model, generation, year, query, photoOffset) => ({
    brand, model, generation, year, query,
    fallbackImages: [0, 1, 2].map(index => fallbackPhotos[(photoOffset + index) % fallbackPhotos.length])
});

const carsData = [
    car("RANGE ROVER", "SPORT", "L461 (3-тє покоління)", "2025", "Range Rover Sport L461 automobile", 0),
    car("RANGE ROVER", "VELAR", "L560 (рестайлінг)", "2024", "Range Rover Velar automobile", 1),
    car("RANGE ROVER", "EVOQUE", "L551 (2-ге покоління)", "2023", "Range Rover Evoque L551 automobile", 2),
    car("BMW", "M5", "G90 (7-ме покоління)", "2025", "BMW M5 G90 automobile", 3),
    car("BMW", "M3", "G80 (6-те покоління)", "2024", "BMW M3 G80 automobile", 4),
    car("BMW", "X5", "G05 (рестайлінг)", "2024", "BMW X5 G05 automobile", 5),
    car("MERCEDES-BENZ", "G-CLASS", "W465", "2025", "Mercedes-Benz G-Class W465 automobile", 6),
    car("MERCEDES-BENZ", "E-CLASS", "W214", "2024", "Mercedes-Benz E-Class W214 automobile", 7),
    car("MERCEDES-BENZ", "AMG GT", "C192", "2024", "Mercedes-AMG GT C192 automobile", 8),
    car("TESLA", "MODEL S", "Plaid (рестайлінг)", "2024", "Tesla Model S Plaid automobile", 9),
    car("TESLA", "MODEL 3", "Highland", "2024", "Tesla Model 3 Highland automobile", 0),
    car("TESLA", "MODEL Y", "Juniper", "2025", "Tesla Model Y Juniper automobile", 1),
    car("AUDI", "RS6", "C8 (4-те покоління)", "2024", "Audi RS6 C8 automobile", 2),
    car("AUDI", "Q8", "4M8 (рестайлінг)", "2024", "Audi Q8 automobile", 3),
    car("AUDI", "E-TRON GT", "рестайлінг", "2025", "Audi e-tron GT automobile", 4),
    car("PORSCHE", "911", "992.2", "2025", "Porsche 911 992 automobile", 5),
    car("PORSCHE", "CAYENNE", "9Y0 (рестайлінг)", "2024", "Porsche Cayenne 9Y0 automobile", 6),
    car("PORSCHE", "TAYCAN", "рестайлінг", "2025", "Porsche Taycan automobile", 7),
    car("TOYOTA", "CAMRY", "XV80", "2025", "Toyota Camry XV80 automobile", 8),
    car("TOYOTA", "LAND CRUISER", "J250", "2025", "Toyota Land Cruiser J250 automobile", 9),
    car("TOYOTA", "GR SUPRA", "A90", "2024", "Toyota GR Supra A90 automobile", 0),
    car("FORD", "MUSTANG", "S650", "2025", "Ford Mustang S650 automobile", 1),
    car("FORD", "BRONCO", "U725", "2024", "Ford Bronco U725 automobile", 2),
    car("FORD", "F-150", "14-те покоління", "2024", "Ford F-150 fourteenth generation automobile", 3),
    car("VOLKSWAGEN", "GOLF", "Mk8 (рестайлінг)", "2025", "Volkswagen Golf Mk8 automobile", 4),
    car("VOLKSWAGEN", "TIGUAN", "3-тє покоління", "2024", "Volkswagen Tiguan third generation automobile", 5),
    car("VOLKSWAGEN", "TOUAREG", "CR (рестайлінг)", "2024", "Volkswagen Touareg CR automobile", 6),
    car("LAMBORGHINI", "REVUELTO", "1-ше покоління", "2024", "Lamborghini Revuelto automobile", 7),
    car("LAMBORGHINI", "URUS", "SE", "2025", "Lamborghini Urus SE automobile", 8),
    car("LAMBORGHINI", "HURACÁN", "STO", "2023", "Lamborghini Huracan STO automobile", 9)
];

const mainPageHTML = `
    <section class="hero">
        <img src="${fallbackPhotos[0]}" alt="Спортивний автомобіль" class="hero-bg">
        <div class="hero-content">
            <h1><span>NEOTRACK</span> — платформа для пошуку та вибору автомобілів.</h1>
            <p>Знаходьте автомобілі різних марок, моделей, поколінь та років випуску.</p>
            <button class="btn-yellow" id="hero-action-btn">Переглянути авто</button>
        </div>
    </section>
    <section class="about-section">
        <div class="about-text">
            <h2 class="section-title">Хто ми</h2>
            <p class="about-subtitle"><span>NEOTRACK</span> — сучасний онлайн-сервіс для зручного пошуку автомобілів.</p>
            <ul class="about-list">
                <li>сучасний дизайн та зручна навігація</li>
                <li>швидкий пошук автомобілів</li>
                <li>10 популярних брендів і десятки моделей</li>
                <li>актуальна та перевірена інформація</li>
                <li>повноцінні фотогалереї для кожного авто</li>
            </ul>
        </div>
        <div class="about-img-box"><img src="${fallbackPhotos[1]}" alt="Автомобіль на дорозі" class="about-img"></div>
    </section>
    <section class="advantages-section">
        <h2 class="advantages-title">Наші переваги</h2>
        <div class="advantages-grid">
            <div class="adv-card"><div class="adv-icon">🚗</div><div><h3>Великий вибір</h3><p>Багато брендів, моделей і поколінь автомобілів.</p></div></div>
            <div class="adv-card"><div class="adv-icon">🔎</div><div><h3>Швидкий пошук</h3><p>Фільтрація за маркою, моделлю та поколінням за кілька секунд.</p></div></div>
            <div class="adv-card"><div class="adv-icon">📷</div><div><h3>Реальні фото</h3><p>Для кожного авто завантажується окрема галерея фотографій.</p></div></div>
        </div>
    </section>`;

const catalogPageHTML = `
    <section class="catalog-intro">
        <div><p class="eyebrow">Каталог NEOTRACK</p><h1>30 автомобілів у 10 марках</h1></div>
        <p>Оберіть марку, модель і покоління. Можна шукати лише за маркою, щоб побачити всі її моделі.</p>
    </section>
    <section class="filter-panel">
        <select class="filter-select" id="brand-select"><option value="">Усі марки</option></select>
        <select class="filter-select" id="model-select" disabled><option value="">Усі моделі</option></select>
        <select class="filter-select" id="gen-select" disabled><option value="">Усі покоління</option></select>
        <button class="btn-search">Пошук</button>
    </section>
    <div class="catalog-status" id="catalog-status">Оберіть параметри або натисніть «Пошук», щоб переглянути весь каталог.</div>
    <section class="catalog-grid" id="cars-list-container"></section>`;

const contentArea = document.getElementById("content-area");
const imageCache = new Map();

function uniqueValues(items, key) {
    return [...new Set(items.map(item => item[key]))].sort((a, b) => a.localeCompare(b, "uk"));
}

function fillSelect(select, values, placeholder) {
    select.innerHTML = `<option value="">${placeholder}</option>`;
    values.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}

async function fetchCommonsImages(selectedCar) {
    const cacheKey = `${selectedCar.brand}-${selectedCar.model}`;
    if (imageCache.has(cacheKey)) return imageCache.get(cacheKey);
    const params = new URLSearchParams({
        action: "query", format: "json", origin: "*", generator: "search",
        gsrsearch: selectedCar.query, gsrnamespace: "6", gsrlimit: "12",
        prop: "imageinfo", iiprop: "url", iiurlwidth: "1200"
    });
    try {
        const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
        if (!response.ok) throw new Error("Photo request failed");
        const data = await response.json();
        const blockedWords = /(logo|badge|emblem|interior|engine|wheel|drawing|diagram|icon|svg)/i;
        const photos = Object.values(data.query?.pages || {})
            .filter(page => !blockedWords.test(page.title))
            .map(page => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)
            .filter(Boolean).slice(0, 5);
        const result = photos.length >= 3 ? photos : selectedCar.fallbackImages;
        imageCache.set(cacheKey, result);
        return result;
    } catch {
        return selectedCar.fallbackImages;
    }
}

function createCarCard(selectedCar) {
    const article = document.createElement("article");
    article.className = "car-card";
    article.innerHTML = `
        <div class="car-gallery">
            <div class="car-img-box">
                <div class="photo-loader">Завантажуємо фото…</div>
                <img alt="${selectedCar.brand} ${selectedCar.model}" class="car-img" hidden>
                <button class="gallery-arrow gallery-prev" type="button" aria-label="Попереднє фото">‹</button>
                <button class="gallery-arrow gallery-next" type="button" aria-label="Наступне фото">›</button>
                <span class="photo-counter">1 / 3</span>
            </div>
            <div class="gallery-thumbs"></div>
        </div>
        <div class="car-info">
            <div><p class="car-brand">${selectedCar.brand}</p><h2>${selectedCar.model}</h2></div>
            <span class="car-year">${selectedCar.year}</span>
        </div>
        <div class="car-tags"><div class="car-tag">${selectedCar.generation}</div></div>`;

    fetchCommonsImages(selectedCar).then(images => {
        let currentIndex = 0;
        const mainImage = article.querySelector(".car-img");
        const loader = article.querySelector(".photo-loader");
        const thumbs = article.querySelector(".gallery-thumbs");
        const counter = article.querySelector(".photo-counter");
        const showImage = index => {
            currentIndex = (index + images.length) % images.length;
            mainImage.src = images[currentIndex];
            mainImage.hidden = false;
            loader.hidden = true;
            counter.textContent = `${currentIndex + 1} / ${images.length}`;
            thumbs.querySelectorAll("button").forEach((button, thumbIndex) => {
                button.classList.toggle("active", thumbIndex === currentIndex);
            });
        };
        mainImage.addEventListener("error", () => {
            mainImage.src = selectedCar.fallbackImages[currentIndex % selectedCar.fallbackImages.length];
        }, { once: true });
        images.forEach((image, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "gallery-thumb";
            button.setAttribute("aria-label", `Відкрити фото ${index + 1}`);
            button.innerHTML = `<img src="${image}" alt="">`;
            button.addEventListener("click", () => showImage(index));
            thumbs.appendChild(button);
        });
        article.querySelector(".gallery-prev").addEventListener("click", () => showImage(currentIndex - 1));
        article.querySelector(".gallery-next").addEventListener("click", () => showImage(currentIndex + 1));
        showImage(0);
    });
    return article;
}

function renderCars(cars) {
    const container = document.getElementById("cars-list-container");
    const status = document.getElementById("catalog-status");
    container.innerHTML = "";
    if (!cars.length) {
        status.textContent = "За вибраними параметрами нічого не знайдено.";
        return;
    }
    status.textContent = `Знайдено: ${cars.length}`;
    cars.forEach(selectedCar => container.appendChild(createCarCard(selectedCar)));
}

function setupCatalog() {
    const brandSelect = document.getElementById("brand-select");
    const modelSelect = document.getElementById("model-select");
    const generationSelect = document.getElementById("gen-select");
    fillSelect(brandSelect, uniqueValues(carsData, "brand"), "Усі марки");
    brandSelect.addEventListener("change", () => {
        const brandCars = brandSelect.value ? carsData.filter(item => item.brand === brandSelect.value) : carsData;
        fillSelect(modelSelect, uniqueValues(brandCars, "model"), "Усі моделі");
        modelSelect.disabled = !brandSelect.value;
        fillSelect(generationSelect, [], "Усі покоління");
        generationSelect.disabled = true;
    });
    modelSelect.addEventListener("change", () => {
        const modelCars = carsData.filter(item =>
            item.brand === brandSelect.value && (!modelSelect.value || item.model === modelSelect.value)
        );
        fillSelect(generationSelect, uniqueValues(modelCars, "generation"), "Усі покоління");
        generationSelect.disabled = !modelSelect.value;
    });
    document.querySelector(".btn-search").addEventListener("click", () => {
        renderCars(carsData.filter(item =>
            (!brandSelect.value || item.brand === brandSelect.value) &&
            (!modelSelect.value || item.model === modelSelect.value) &&
            (!generationSelect.value || item.generation === generationSelect.value)
        ));
    });
}

function renderPage(pageName) {
    if (!contentArea) return;
    if (pageName === "main") {
        contentArea.innerHTML = mainPageHTML;
        document.getElementById("hero-action-btn")?.addEventListener("click", () => renderPage("catalog"));
    } else if (pageName === "catalog") {
        contentArea.innerHTML = catalogPageHTML;
        setupCatalog();
    } else if (pageName === "add") {
        contentArea.innerHTML = `
            <section class="add-form">
                <h2>Додати автомобіль</h2>
                <label>Марка<input type="text" placeholder="Наприклад, BMW"></label>
                <label>Модель<input type="text" placeholder="Наприклад, M5"></label>
                <label>Покоління / рік<input type="text" placeholder="Наприклад, G90 / 2025"></label>
                <label class="file-label">📁 Виберіть фотографії<input type="file" accept="image/*" multiple></label>
                <button id="submit-car-btn" class="btn-yellow">Надіслати на модерацію</button>
            </section>`;
        document.getElementById("submit-car-btn").addEventListener("click", () => {
            alert("Автомобіль успішно надіслано на модерацію!");
            renderPage("catalog");
        });
    }
    updateActiveNavigation(pageName);
    window.scrollTo(0, 0);
}

function updateActiveNavigation(pageName) {
    document.querySelectorAll(".nav-links a, .mobile-nav .nav-btn").forEach(button => {
        button.classList.toggle("active", button.getAttribute("data-page") === pageName);
    });
}

document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        renderPage(link.getAttribute("data-page"));
    });
});
document.getElementById("logo-desktop")?.addEventListener("click", event => { event.preventDefault(); renderPage("main"); });
document.getElementById("logo-mobile")?.addEventListener("click", event => { event.preventDefault(); renderPage("main"); });
document.querySelectorAll(".plus-btn, .mobile-add-text").forEach(element => {
    element.addEventListener("click", event => { event.preventDefault(); renderPage("add"); });
});

renderPage("main");

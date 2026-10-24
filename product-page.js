const root = document.getElementById("product-root");
const params = new URLSearchParams(window.location.search);
const allProducts = Array.isArray(products) ? products : [];
const clean = value => String(value || "").trim().toLocaleLowerCase("uk-UA");
// Accept current links (?id=...), older links (?name=...) and links with a hash.
const requestedId = params.get("id") || params.get("product") || "";
const requestedName = clean(params.get("name"));
const hashId = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
const product = allProducts.find(p => clean(p.id) === clean(requestedId)) ||
    allProducts.find(p => requestedName && clean(p.name) === requestedName) ||
    allProducts.find(p => hashId && (clean(p.id) === clean(hashId) || clean(p.name) === clean(hashId)))
    // Last-resort recovery: if a product page is opened without its query string,
    // show the first catalog item rather than a dead end.
    ||
    (allProducts.length && !requestedId && !requestedName && !hashId ? allProducts[0] : null);
if (!product) {
    root.innerHTML = `<div class="not-found"><p class="eyebrow">LEO GOLD / CATALOG</p><h1>Товар не знайдено</h1><p>Можливо, посилання застаріло або товар ще не додано до каталогу.</p><a class="gold-button" href="index.html#catalog">ПОВЕРНУТИСЯ ДО КАТАЛОГУ ↗</a></div>`;
} else {
    let colorIndex = 0,
        photoIndex = 0,
        size = "";

    function render() {
        const color = product.colors[colorIndex];
        document.title = product.name + " — LEO GOLD";
        root.innerHTML = `<a class="back-link" href="index.html#catalog">← ПОВЕРНУТИСЯ ДО КАТАЛОГУ</a><div class="product-layout"><section class="gallery"><div class="main-image-frame"><img id="main-photo" src="${color.photos[photoIndex]}" alt="${product.name} — ${color.name}">${color.photos.length>1?`<button class="gallery-arrow prev" aria-label="Попереднє фото" id="prev-photo">‹</button><button class="gallery-arrow next" aria-label="Наступне фото" id="next-photo">›</button>`:""}</div><div class="thumb-row">${color.photos.map((src,i)=>`<button class="thumb ${i===photoIndex?"selected":""}" data-photo="${i}" aria-label="Фото ${i+1}"><img src="${src}" alt=""></button>`).join("")}</div></section><section class="product-info-detail"><p class="eyebrow">${product.category} / ${product.seasons.join(" · ")}</p><h1>${product.name}</h1><p class="detail-price">${product.price.toLocaleString("uk-UA")} ₴</p><p class="detail-description">${product.description}</p><div class="detail-line"><span>МАТЕРІАЛ</span><b>${product.material}</b></div><div class="detail-line"><span>ВИРОБНИЦТВО</span><b>${product.madeIn}</b></div><div class="selector-block"><div class="selector-title">Колір <span>${color.name}</span></div><div class="swatches">${product.colors.map((c,i)=>`<button class="swatch ${i===colorIndex?"chosen":""}" data-color="${i}" style="--swatch:${c.hex}" aria-label="${c.name}" title="${c.name}"></button>`).join("")}</div></div><div class="selector-block"><div class="selector-title">Розмір <span>${size||"Оберіть розмір"}</span></div><div class="size-options">${product.sizes.map(s=>`<button class="size-option ${s===size?"chosen":""}" data-size="${s}">${s}</button>`).join("")}</div></div><a class="availability-button" id="availability" href="#" target="_blank" rel="noreferrer">◎ &nbsp; ПЕРЕВІРИТИ НАЯВНІСТЬ <span>↗</span></a><p class="availability-note">Наявність уточнюється в Instagram Direct. Замовлення на сайті не оформлюються.</p><button class="copy-message" id="copy-message">▢ Скопіювати повідомлення про товар</button></section></div><section class="extra-info"><div><p class="eyebrow">ДЕТАЛІ</p><h2>Продумано <em>для тебе.</em></h2></div><div class="spec-list"><div><span>Сезон</span><b>${product.seasons.join(", ")}</b></div><div><span>Розміри</span><b>${product.sizes.join(", ")}</b></div><div><span>Догляд</span><b>${product.care}</b></div></div></section>`;
        root.querySelectorAll("[data-color]").forEach(b => b.onclick = () => {
            colorIndex = Number(b.dataset.color);
            photoIndex = 0;
            render()
        });
        root.querySelectorAll("[data-photo]").forEach(b => b.onclick = () => {
            photoIndex = Number(b.dataset.photo);
            render()
        });
        root.querySelectorAll("[data-size]").forEach(b => b.onclick = () => {
            size = b.dataset.size;
            render()
        });
        const prev = document.getElementById("prev-photo"),
            next = document.getElementById("next-photo");
        if (prev) prev.onclick = () => {
            photoIndex = (photoIndex + color.photos.length - 1) % color.photos.length;
            render()
        };
        if (next) next.onclick = () => {
            photoIndex = (photoIndex + 1) % color.photos.length;
            render()
        };
        const message = () => `Вітаю! Підкажіть, будь ласка, наявність товару ${product.name}, колір ${product.colors[colorIndex].name}, розмір ${size||"ще не обрано"}.`;
        document.getElementById("availability").href = `https://ig.me/m/${encodeURIComponent(INSTAGRAM_USERNAME)}`;
        document.getElementById("copy-message").onclick = async () => {
            try {
                await navigator.clipboard.writeText(message());
                document.getElementById("copy-message").textContent = "✓ Повідомлення скопійовано"
            } catch (e) {
                window.prompt("Скопіюйте повідомлення для Instagram:", message())
            }
        };
    }
    render();
}
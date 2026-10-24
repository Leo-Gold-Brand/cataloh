const grid = document.getElementById("catalog-grid");
const empty = document.getElementById("empty-state");
let activeSeason = "усі";

function card(p) {
    const c = p.colors[0];
    return `<a class="product-card" href="./product.html?id=${encodeURIComponent(p.id)}&name=${encodeURIComponent(p.name)}"><div class="product-image-wrap"><img class="product-image" src="${c.photos[0]}" alt="${p.name} — ${c.name}" loading="lazy"><span class="image-arrow">↗</span><span class="product-tag">${p.seasons.join(" / ")}</span></div><div class="product-meta"><div><p class="product-category">${p.category}</p><h3>${p.name}</h3></div><strong>${p.price.toLocaleString("uk-UA")} ₴</strong></div><p class="product-colors">${p.colors.length} кольори · ${p.sizes[0]}–${p.sizes[p.sizes.length-1]}</p></a>`
}

function render() {
    const list = products.filter(p => activeSeason === "усі" || p.seasons.includes(activeSeason));
    grid.innerHTML = list.map(card).join("");
    empty.hidden = list.length > 0
}
document.querySelectorAll("[data-season]").forEach(el => el.addEventListener("click", e => {
    const season = el.dataset.filterSeason || el.dataset.season;
    if (!season) return;
    activeSeason = season;
    document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b.dataset.season === season));
    render();
    if (el.dataset.filterSeason) document.getElementById("catalog").scrollIntoView({
        behavior: "smooth"
    })
}));
document.getElementById("year").textContent = new Date().getFullYear();
render();
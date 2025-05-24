// Başlangıç verileri
let filteredProducts = [...products];
let searchTerm = '';
let selectedCompany = 'all';
let selectedPrice = Math.max(...products.map((p) => p.price));

let sortOption = 'default';


// DOM elementleri
const productsContainer = document.querySelector('.products-container');
const searchInput = document.querySelector('.search-input');
const companiesDOM = document.querySelector('.companies');
const priceRange = document.querySelector('.price-range');
const priceValue = document.querySelector('.price-value');

// Ürünleri Ekrana Bas
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `
           <a href="product.html?id=${id}" class="product-link">
        <article class="product" data-id="${id}">
          <img src="${image}" class="product-img img" alt="${title}" />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>
        </a>`;
    })
    .join('');
};

// Filtreleri Uygula
const applyFilters = () => {
    filteredProducts = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm);
      const matchesCompany =
        selectedCompany === 'all' || product.company === selectedCompany;
      const matchesPrice = product.price <= selectedPrice;
      return matchesSearch && matchesCompany && matchesPrice;
    });
  
    // Sıralama uygula
    if (sortOption === 'low-to-high') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
  
    displayProducts();
  };
  

// Şirket Butonlarını Oluştur
const displayButtons = () => {
  const companies = ['all', ...new Set(products.map((p) => p.company))];

  companiesDOM.innerHTML = companies
    .map(
      (company) =>
        `<button class="company-btn" data-id="${company}">${company}</button>`
    )
    .join('');
};

// Fiyat Slider'ını Ayarla
const setUpPrice = () => {
  const maxPrice = Math.max(...products.map((p) => p.price));
  priceRange.max = Math.ceil(maxPrice);
  priceRange.value = Math.ceil(maxPrice);
  selectedPrice = Math.ceil(maxPrice);
  priceValue.textContent = `Value: $${priceRange.value}`;
};

// Event Listeners
// Arama
searchInput.addEventListener('keyup', (e) => {
  searchTerm = e.target.value.toLowerCase();
  applyFilters();
});

// Firma seçimi
companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (!el.classList.contains('company-btn')) return;

  selectedCompany = el.dataset.id;
  searchInput.value = '';
  searchTerm = '';
  applyFilters();
});

// Fiyat seçimi
priceRange.addEventListener('input', (e) => {
  selectedPrice = Number(e.target.value);
  priceValue.textContent = `Value: $${selectedPrice}`;
  applyFilters();
});
const sortSelect = document.querySelector('.sort-select');

sortSelect.addEventListener('change', (e) => {
  sortOption = e.target.value;
  applyFilters();
});

// Başlangıç çağrıları
displayButtons();
setUpPrice();
applyFilters();


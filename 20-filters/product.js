const baseUrl = 'https://www.course-api.com/javascript-store-single-product';

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const url = `${baseUrl}?id=${productId}`;

// DOM
const img = document.querySelector('.product-img');
const title = document.querySelector('.product-title');
const price = document.querySelector('.product-price');
const company = document.querySelector('.product-company');
const colors = document.querySelector('.product-colors');
const description = document.querySelector('.product-description');

const fetchProduct = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Product not found');

    const { fields } = await response.json();
    const {
      name,
      company: brand,
      price: cost,
      image,
      colors: colorArray,
      description: desc,
    } = fields;

    img.src = image[0].url;
    img.alt = name;
    title.textContent = name;
    price.textContent = `$${(cost / 100).toFixed(2)}`;
    company.textContent = `Company: ${brand}`;
    description.textContent = desc;

    // Renkleri oluştur
    colors.innerHTML = colorArray
      .map((color) => `<span class="product-color" style="background:${color}"></span>`)
      .join('');
  } catch (error) {
    console.error(error);
    document.querySelector('.product-detail').innerHTML = `<p class="error">Product not found</p>`;
  }
};

fetchProduct();

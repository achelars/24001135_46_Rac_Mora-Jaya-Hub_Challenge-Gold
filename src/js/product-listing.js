const products = [
  { id: 1, name: 'Product 1', price: 10.0, description: 'Description 1', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', price: 20.0, description: 'Description 2', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', price: 30.0, description: 'Description 3', image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Product 4', price: 40.0, description: 'Description 4', image: 'https://via.placeholder.com/300' },
  { id: 5, name: 'Product 5', price: 50.0, description: 'Description 5', image: 'https://via.placeholder.com/300' },
  { id: 6, name: 'Product 6', price: 60.0, description: 'Description 6', image: 'https://via.placeholder.com/300' },
  { id: 7, name: 'Product 7', price: 70.0, description: 'Description 7', image: 'https://via.placeholder.com/300' },
  { id: 8, name: 'Product 8', price: 80.0, description: 'Description 8', image: 'https://via.placeholder.com/300' },
  { id: 9, name: 'Product 9', price: 90.0, description: 'Description 9', image: 'https://via.placeholder.com/300' }
];

const productList = document.getElementById('productList');
const productSearch = document.getElementById('productSearch');
const sortOptions = document.getElementById('sortOptions');
const pagination = document.getElementById('pagination');

const itemsPerPage = 3;
let currentPage = 1;

function paginate(items, page, perPage) {
  const offset = (page - 1) * perPage;
  return items.slice(offset, offset + perPage);
}

function renderPagination(items, perPage) {
  const pageCount = Math.ceil(items.length / perPage);
  pagination.innerHTML = '';
  for (let i = 1; i <= pageCount; i++) {
    const pageItem = document.createElement('li');
    pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
    pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    pageItem.addEventListener('click', () => {
      currentPage = i;
      renderProducts(products);
      renderPagination(products, itemsPerPage);
    });
    pagination.appendChild(pageItem);
  }
}

function renderProducts(products) {
  const paginatedProducts = paginate(products, currentPage, itemsPerPage);
  productList.innerHTML = '';
  paginatedProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'col-md-4 mb-4';
    productCard.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <a href="product-detail.html?id=${product.id}" class="btn btn-primary">View Details</a>
        </div>
      </div>
    `;
    productList.appendChild(productCard);
  });
}

function sortProducts(products, criterion) {
  return products.sort((a, b) => {
    if (criterion === 'price') {
      return a.price - b.price;
    }
    return a.name.localeCompare(b.name);
  });
}

productSearch.addEventListener('input', () => {
  const searchTerm = productSearch.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  const criterion = sortOptions.value;
  const sortedProducts = sortProducts(filteredProducts, criterion);
  renderProducts(sortedProducts);
  renderPagination(sortedProducts, itemsPerPage);
});

sortOptions.addEventListener('change', () => {
  const criterion = sortOptions.value;
  const searchTerm = productSearch.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  const sortedProducts = sortProducts(filteredProducts, criterion);
  renderProducts(sortedProducts);
  renderPagination(sortedProducts, itemsPerPage);
});

renderProducts(sortProducts(products, sortOptions.value));
renderPagination(products, itemsPerPage);

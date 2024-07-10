// Example data, replace with actual API call
const products = [
    { id: 1, name: 'Product 1', price: 10.0, description: 'Description 1', image: 'https://via.placeholder.com/400' },
    { id: 2, name: 'Product 2', price: 20.0, description: 'Description 2', image: 'https://via.placeholder.com/400' },
    { id: 3, name: 'Product 3', price: 30.0, description: 'Description 3', image: 'https://via.placeholder.com/400' },
    { id: 4, name: 'Product 4', price: 40.0, description: 'Description 4', image: 'https://via.placeholder.com/400' },
    { id: 5, name: 'Product 5', price: 50.0, description: 'Description 5', image: 'https://via.placeholder.com/400' },
    { id: 6, name: 'Product 6', price: 60.0, description: 'Description 6', image: 'https://via.placeholder.com/400' },
    { id: 7, name: 'Product 7', price: 70.0, description: 'Description 7', image: 'https://via.placeholder.com/400' },
    { id: 8, name: 'Product 8', price: 80.0, description: 'Description 8', image: 'https://via.placeholder.com/400' },
    { id: 9, name: 'Product 9', price: 90.0, description: 'Description 9', image: 'https://via.placeholder.com/400' }
  ];
  
  function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  function getRelatedProducts(currentProductId) {
    return products.filter(product => product.id !== currentProductId).slice(0, 4); // Example logic
  }
  
  function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = getProductById(productId);
  
    if (product) {
      document.getElementById('productName').textContent = product.name;
      document.getElementById('productDescription').textContent = product.description;
      document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
      document.getElementById('productImage').src = product.image;
  
      // Load related products
      const relatedProducts = getRelatedProducts(productId);
      const relatedProductsContainer = document.getElementById('relatedProducts');
      relatedProductsContainer.innerHTML = '';
      relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-3 mb-4';
        productCard.innerHTML = `
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price.toFixed(2)}</p>
              <a href="product-detail.html?id=${product.id}" class="btn btn-primary">View Details</a>
            </div>
          </div>
        `;
        relatedProductsContainer.appendChild(productCard);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadProductDetails);
  
// ITERATION 1

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity input');

  const price = parseFloat(priceElement.textContent);
  const quantity = parseInt(quantityInput.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal.toFixed(2);

  return subtotal;
}

// ITERATION 2

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  // ITERATION 3

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

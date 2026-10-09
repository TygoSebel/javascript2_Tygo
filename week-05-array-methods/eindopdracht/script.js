const products = [
  'Laptop Pro',
  'Draadloze muis',
  'USB-C hub',
  'Bureaulamp',
  'Notitieboek',
  'Pennenset',
  'Koptelefoon',
  'Bluetooth speaker',
  'Webcam HD',
  'Muismat XL',
  'Monitor 27"',
  'Desk organizer',
];

let searchTerm = '';
let sorting = '';

function showProducts(list) {
  document.querySelector('#products').innerHTML = list
    .map((product) => `<article><h3>${product}</h3></article>`)
    .join('');
  document.querySelector('#counter').textContent = list.length + ' producten';
}

function filterProducts() {
  let filtered = products.filter((product) =>
    product.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (sorting === 'az') {
    filtered.sort();
  }
  if (sorting === 'za') {
    filtered.sort();
    filtered.reverse();
  }

  showProducts(filtered);
}

document.querySelector('#search-bar').addEventListener('input', (event) => {
  searchTerm = event.target.value;
  filterProducts();
});

document.querySelector('#sort-az').addEventListener('click', () => {
  sorting = 'az';
  filterProducts();
});

document.querySelector('#sort-za').addEventListener('click', () => {
  sorting = 'za';
  filterProducts();
});

filterProducts();

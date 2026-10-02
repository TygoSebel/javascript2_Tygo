const formulier = document.querySelector('#shop-form');
const invoer = document.querySelector('#shop-input');
const teller = document.querySelector('#counter');
const lijst = document.querySelector('#list');

const updateTeller = () => {
  const totaal = lijst.children.length;
  const gekocht = lijst.querySelectorAll('input:checked').length;

  teller.textContent = `${gekocht} / ${totaal} producten in je mandje`;

  teller.classList.toggle('compleet', totaal > 0 && gekocht === totaal);
};

formulier.addEventListener('submit', (event) => {
  event.preventDefault();

  const product = invoer.value.trim();
  if (!product) return;

  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  const knop = document.createElement('button');

  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    item.classList.toggle('gekocht');
    updateTeller();
  });
  
  knop.textContent = 'Verwijder';
  knop.addEventListener('click', () => {
    item.remove();
    updateTeller();
  });

  item.append(checkbox, product, knop);
  lijst.append(item);
  updateTeller();
  invoer.value = '';
});

updateTeller();

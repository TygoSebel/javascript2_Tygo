const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

const searchFindInput = document.querySelector('#search-find');
const outputFind = document.querySelector('#output-find');
const searchIncludesInput = document.querySelector('#search-includes');
const outputIncludes = document.querySelector('#output-includes');

searchFindInput.addEventListener('change', event => {
  const letter = event.target.value.trim().toLowerCase();
  const firstMatch = names.find(name => name.toLowerCase().startsWith(letter));

  outputFind.textContent = firstMatch || 'Niet gevonden';
  event.target.value = '';
});

searchIncludesInput.addEventListener('change', event => {
  const name = event.target.value.trim().toLowerCase();
  const isInList = names.some(item => item.toLowerCase().includes(name));

  outputIncludes.textContent = isInList;
  event.target.value = '';
});


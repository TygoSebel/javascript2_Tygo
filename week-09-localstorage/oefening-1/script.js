const input = document.getElementById('input');
const saveButton = document.getElementById('save');
const retrieveButton = document.getElementById('retrieve');
const result = document.getElementById('result');

saveButton.addEventListener('click', () => {
  const text = input.value.trim();

  if (!text) {
    result.textContent = 'Typ eerst iets in.';
    return;
  }

  localStorage.setItem('tekst', text);
  result.textContent = 'Opgeslagen!';
});

retrieveButton.addEventListener('click', () => {
  const savedText = localStorage.getItem('tekst');

  if (savedText === null) {
    result.textContent = 'Er is nog niets opgeslagen.';
    return;
  }

  result.textContent = 'Opgehaald: ' + savedText;
});

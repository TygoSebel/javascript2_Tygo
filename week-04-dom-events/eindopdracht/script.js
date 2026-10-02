const formulier = document.querySelector('#task-form');
const invoer = document.querySelector('#task-input');
const lijst = document.querySelector('#tasks');
const teller = document.querySelector('#counter');

function telTaken() {
    const aantal = lijst.children.length;
    teller.textContent = `${aantal} ${aantal === 1 ? 'taak' : 'taken'}`;
}

formulier.addEventListener('submit', function(event) {
    event.preventDefault();

    const naam = invoer.value.trim();

    if (naam === '') return;

    const taak = document.createElement('li');

    taak.innerHTML = `
        <input type="checkbox">
        <span>${naam}</span>
        <button type="button">Verwijder</button>
    `;

    lijst.appendChild(taak);

    invoer.value = '';
    telTaken();
});

lijst.addEventListener('click', function(event) {
    const taak = event.target.closest('li');
    
    if (event.target.type === 'checkbox') {
        taak.classList.toggle('afgevinkt', event.target.checked);
    }

    if (event.target.tagName === 'BUTTON') {
        taak.remove();
        telTaken();
    }
});
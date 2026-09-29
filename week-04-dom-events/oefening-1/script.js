const button = document.getElementById('btn');
let input = document.getElementById('input');
let list = document.getElementById('list');

button.addEventListener('click', () => {
    const itemText = input.value.trim();
    if (!itemText) return;

    const item = document.createElement('li');
    item.append(itemText, ' ');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'verwijderen';
    deleteButton.addEventListener('click', () => {
        item.remove();
    });

    item.appendChild(deleteButton);
    list.appendChild(item);
    input.value = '';

})


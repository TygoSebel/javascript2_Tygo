let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let message = document.getElementById('message');
let list = document.getElementById('list');


btn1.addEventListener('click', () => {
    message.textContent = 'Je hebt op knop 1 geklikt!';
});


btn2.addEventListener('click', () => {
    message.textContent = 'Je hebt op knop 2 geklikt!';

    let item = document.createElement('li');
    item.textContent = 'Nieuw item toegevoegd!';

    list.appendChild(item);
});


btn3.addEventListener('click', () => {
    message.textContent = 'Je hebt op knop 3 geklikt!';

    message.classList.toggle('active');
});

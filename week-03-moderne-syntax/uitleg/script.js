let title = document.getElementById('title');
let button = document.getElementById('btn');
let section = document.getElementById('section');
let getName = document.getElementById('showName')

button.addEventListener('click', () => {
    title.textContent = 'geklikt';

    title.classList.toggle('active');

    const p = document.createElement('p');

    p.textContent = 'ik voeg een paragraaf toe';

    section.appendChild(p);
})



const showName = (name, stad) => {
    return `Mijn naam is ${name} en ik woon in ${stad}`
}

getName.textContent = showName('Tygo', "schiedam")

let fruits = ['Appel','Banaan','Perzik']

for(let fruit of fruits){
    getName.innerHTML += fruit + '<br>'
    
}
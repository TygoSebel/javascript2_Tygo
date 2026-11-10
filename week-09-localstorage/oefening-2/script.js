const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

const zonderJson = document.getElementById('zonder-json');
const metJson = document.getElementById('met-json');

localStorage.setItem('userWithoutJson', user);
const rawValue = localStorage.getItem('userWithoutJson');

const jsonValue = JSON.stringify(user);
localStorage.setItem('userWithJson', jsonValue);
const parsedValue = JSON.parse(localStorage.getItem('userWithJson'));

zonderJson.innerHTML += `<p>${rawValue}</p>`;
metJson.innerHTML += `<p>Naam: ${parsedValue.name}</p><p>Leeftijd: ${parsedValue.age}</p><p>Stad: ${parsedValue.city}</p>`;

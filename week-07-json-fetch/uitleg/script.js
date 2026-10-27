let carsList = document.getElementById("carsList");

// let cars = [
// {
//     name: 'Fiat',
//     model: '500',
//     color: 'red',
// },
// {
//     name: 'Ford',
//     model: 'Focus',
//     color: 'blue',
// },
// {
//     name: 'Toyota',
//     model: 'Yaris',
//     color: 'green',
// },
// ];

fetch('./cars.json')
.then(response => response.json())
.then(data =>{
    for(let car of data) {
    carsList.innerHTML += `
    <h2>${car.name}</h2>
    <p>${car.model}</p>
    <p>${car.color}</p>
    <p>${car.weight}</p>
    `
}
})


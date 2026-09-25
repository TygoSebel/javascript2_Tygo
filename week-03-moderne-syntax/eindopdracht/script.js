// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart
let form = document.getElementById('profile-form');
let list = document.getElementById('profiles-list');

form.addEventListener('submit', (event) => {
event.preventDefault();

let name = document.getElementById('name').value;
let role = document.getElementById('role').value;
let department = document.getElementById('department').value;

list.innerHTML += `
    <div class="profile-card">
        <h3>${name}</h3>
        <p>Functie: ${role}</p>
        <p>Afdeling: ${department}</p>
        <button class="delete-btn">Verwijderen</button>
    </div>
`;

form.reset();
});

list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});
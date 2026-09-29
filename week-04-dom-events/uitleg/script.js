const button = document.getElementById('btn');
let songList = document.getElementById('songList');
const songInput = document.getElementById('songInput');

button.addEventListener('click', () => {
    
    const input = songInput.value.trim();
    const lijst = document.createElement('li');
    lijst.textContent = input
    
    const deletebutton = document.createElement("button")
    deletebutton.textContent = 'verwijderen';
    lijst.appendChild(deletebutton)
    
deletebutton.addEventListener('click', () => {
    lijst.remove();   
})
    
    
    songList.appendChild(lijst)
    songInput.value = ""
})


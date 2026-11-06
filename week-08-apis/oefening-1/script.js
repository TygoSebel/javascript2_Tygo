fetch('https://rickandmortyapi.com/api/character')
  .then(response => {
    if (!response.ok) {
      throw new Error('Kan de gegevens niet ophalen');
    }

    return response.json();
  })
  .then(data => {
    console.log(data); 

    const container = document.querySelector('#characters');

    data.results.forEach(character => {
      const article = document.createElement('article');
      const image = document.createElement('img');
      const name = document.createElement('h2');

      image.src = character.image;
      image.alt = character.name;
      image.width = 150;

      name.textContent = character.name;

      article.append(image, name);
      container.appendChild(article);
    });
  })
  .catch(error => {
    console.error('Fout:', error);
    document.querySelector('#characters').textContent = 'Kon de karakters niet laden.';
  });

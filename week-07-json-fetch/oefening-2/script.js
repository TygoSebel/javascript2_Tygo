fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    const filmsSection = document.querySelector('#films');
    for (const movie of movies) {
      const article = document.createElement('article');
      const title = document.createElement('h2');
      const details = document.createElement('p');

      title.textContent = movie.title;
      details.textContent = `${movie.director} · ${movie.year} · ${movie.genre}`;

      article.append(title, details);
      filmsSection.appendChild(article);
    }
  })
  .catch(error => console.error('Fout bij het laden van films:', error));

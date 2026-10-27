let allArticles = [];

const articlesElement = document.querySelector('#articles');

function showArticles(articles) {
  articlesElement.innerHTML = articles.map(article => `
    <article>
      <span>${article.category}</span>
      <h2>${article.title}</h2>
      <p>${article.summary}</p>
    </article>
  `).join('');
}

fetch('./news.json')
  .then(response => response.json())
  .then(articles => {
    allArticles = articles;
    showArticles(articles);
  })
  .catch(error => console.error('Fout bij laden:', error));

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

document.querySelector('#filter-stad').addEventListener('click', () =>
  showArticles(allArticles.filter(article => article.category === 'Stad'))
);

document.querySelector('#filter-technologie').addEventListener('click', () =>
  showArticles(allArticles.filter(article => article.category === 'Technologie'))
);

document.querySelector('#filter-media').addEventListener('click', () =>
  showArticles(allArticles.filter(article => article.category === 'Media'))
);

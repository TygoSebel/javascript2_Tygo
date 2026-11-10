let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const results = document.querySelector('#results');
const loading = document.querySelector('#loading');

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  results.innerHTML = '';

  items.forEach((pokemon) => {
    const article = document.createElement('article');

    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    img.alt = pokemon.name;

    const h2 = document.createElement('h2');
    h2.textContent = pokemon.name;

    const button = document.createElement('button');
    button.className = 'favorite-btn';

    const isFavorite = favorites.includes(pokemon.name);
    button.textContent = isFavorite ? 'Favoriet' : 'Toevoegen';
    button.disabled = isFavorite;

    button.addEventListener('click', () => {
      if (favorites.includes(pokemon.name)) {
        return;
      }

      favorites.push(pokemon.name);
      saveFavorites();
      showItems(items);
    });

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(button);
    results.appendChild(article);
  });
};

loading.textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((response) => response.json())
  .then((data) => {
    loading.textContent = '';

    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
    }));

    showItems(allPokemon);
  })
  .catch((error) => {
    loading.textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

document.querySelector('#show-all').addEventListener('click', () => {
  showItems(allPokemon);
});

document.querySelector('#show-favorites').addEventListener('click', () => {
  const favorietePokemon = allPokemon.filter((pokemon) => favorites.includes(pokemon.name));
  showItems(favorietePokemon);
});

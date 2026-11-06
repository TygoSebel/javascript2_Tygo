let allPokemon = [];
const pokemonList = document.querySelector('#pokemon-list');
const counter = document.querySelector('#counter');
const searchBar = document.querySelector('#search-bar');

function renderPokemon(items) {
  pokemonList.innerHTML = '';

  items.forEach(pokemon => {
    const article = document.createElement('article');
    const image = document.createElement('img');
    const name = document.createElement('h2');

    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    image.alt = pokemon.name;
    image.width = 96;

    name.textContent = pokemon.name;

    article.append(image, name);
    pokemonList.appendChild(article);
  });

  counter.textContent = `${items.length} Pokémon getoond`;
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => {
    if (!response.ok) {
      throw new Error('Kon de Pokémon niet ophalen');
    }

    return response.json();
  })
  .then(data => {
    console.log(data);

    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));

    renderPokemon(allPokemon);
  })
  .catch(error => {
    console.error('Fout:', error);
    counter.textContent = 'Er ging iets mis bij het laden van de Pokémon.';
  });

searchBar.addEventListener('input', event => {
  const query = event.target.value.trim().toLowerCase();

  const filteredPokemon = allPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query)
  );

  renderPokemon(filteredPokemon);
});

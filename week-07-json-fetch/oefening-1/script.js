fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    // Toon elk boek als een <li> in #books-list
    const booksList = document.querySelector('#books-list');
    for (const book of books) {
      const listItem = document.createElement('li');
      listItem.textContent = `${book.title} (${book.year}) - ${book.author}`;
      booksList.appendChild(listItem);
    }
  })
  .catch(error => console.error('Fout:', error));

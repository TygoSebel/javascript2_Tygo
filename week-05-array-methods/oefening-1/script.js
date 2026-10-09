const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const filteredScores = scores.filter(score => score > 50);
const doubledScores = scores.map(score => score * 2);
const sortedScores = [...scores].sort((a, b) => a - b);

function displayScores(elementId, values) {
  const resultElement = document.querySelector(`#${elementId}`);

  values.forEach(value => {
    const listItem = document.createElement('li');
    listItem.textContent = value;
    resultElement.appendChild(listItem);
  });
}

displayScores('result-filtered', filteredScores);
displayScores('result-map', doubledScores);
displayScores('result-sorted', sortedScores);

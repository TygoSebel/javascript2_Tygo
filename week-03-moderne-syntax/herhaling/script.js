const title = document.getElementById('title');
const btn = document.getElementById('btn');
const section = document.getElementById('section');

const naam = 'Tygo';
const opleiding = 'software developer';
let aantalKlikken = 0;

const berekenPunten = (aantalKlikken) => aantalKlikken * 10;

btn.textContent = 'Klik hier';

btn.addEventListener('click', () => {
  aantalKlikken += 1;

  title.textContent = `Hoi, ik ben ${naam} en ik doe de opleiding ${opleiding}`;
  title.classList.toggle('active');

  const paragraaf = document.createElement('p');
  paragraaf.textContent = `Klik ${aantalKlikken}: je hebt nu ${berekenPunten(aantalKlikken)} punten`;
  section.appendChild(paragraaf);
});

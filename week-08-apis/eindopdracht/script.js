// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)
const weatherInfo = document.querySelector('#weather-info');
const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');

const showWeather = (data) => {
  console.log(data);

  const city = data.name;
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const temperature = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  weatherInfo.innerHTML = `
    <article>
      <h2>${city}</h2>
      <img src="${iconUrl}" alt="${data.weather[0].description}">
      <p><span>Temperatuur</span><span>${temperature}°C</span></p>
      <p><span>Gevoelstemperatuur</span><span>${feelsLike}°C</span></p>
      <p><span>Luchtvochtigheid</span><span>${humidity}%</span></p>
      <p><span>Windsnelheid</span><span>${windSpeed} m/s</span></p>
    </article>
  `;
};

const getWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Stad niet gevonden');
      }

      return response.json();
    })
    .then(data => {
      console.log(data);
      showWeather(data);
    })
    .catch(error => {
      console.error('Fout:', error);
      weatherInfo.innerHTML = '<p>Kon het weer voor deze stad niet ophalen.</p>';
    });
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (!city) return;

  getWeather(city);
  cityInput.value = '';
});

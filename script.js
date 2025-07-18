async function getWeather() {
  const city = document.getElementById('city').value.trim();
  if (!city) {
    document.getElementById('weather').innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const apikey = 'YOUR_WEATHER_APP_API_KEY';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q={city}&aqi=ye`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      document.getElementById('weather').innerHTML = `<p>${data.error.message}</p>`;
      return;
    }

    const location = `${data.location.name}, ${data.location.country}`;
    const temp = `${data.current.temp_c} \u00B0C`;
    const feels = `${data.current.feelslike_c} \u00B0C`;
    const condition = data.current.condition.text;
    const wind = `${data.current.wind_kph} kph`;
    const humidity = `${data.current.humidity}%`;

    document.getElementById('weather').innerHTML = `
      <h2>${location}</h2>
      <p><strong>Temperature:</strong> ${temp}</p>
      <p><strong>Feels Like:</strong> ${feels}</p>
      <p><strong>Condition:</strong> ${condition}</p>
      <p><strong>Wind:</strong> ${wind}</p>
      <p><strong>Humidity:</strong> ${humidity}</p>
    `;
  } catch (err) {
    document.getElementById('weather').innerHTML = `<p>Could not fetch weather data. Please check your connection or try again later.</p>`;
    console.error('Fetch error:', err);
  }
}

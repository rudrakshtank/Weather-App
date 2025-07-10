async function getWeather() {
  const city = document.getElementById('city').value;

  const apikey = '7cc1c6d99aa240f295a54616251007';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;

  try{
    const response = await fetch(url);
    const data = await response.json();

    const location = data.location.name + ', ' + data.location.country;
    const temp = data.current.temp_c + ' \u00B0C';
    const condition = data.current.condition.text;
    const wind = data.current.wind_kph + ' kph';
    const humidity = data.current.humidity + '%';
    const feels = data.current.feelslike_c + ' \u00B0C';

    document.getElementById('weather').innerHTML = `
      <h2>${location}</h2>
      <p><strong>Temperature:</strong> ${temp}</p>
      <p><strong>Feels Like:</strong> ${feels}</p>
      <p><strong>Condition:</strong> ${condition}</p>
      <p><strong>Wind:</strong> ${wind}</p>
      <p><strong>Humidity:</strong> ${humidity}</p>
    `;
  } 
  catch(err) {
    document.getElementById('weather').innerHTML = `<p>Could not fetch weather data. Try again.</p>`;
    console.error(err);
  }
}

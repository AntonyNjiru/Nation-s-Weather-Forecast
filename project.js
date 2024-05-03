const apiKey = 'b6d01ef2006995827d8841449636a467'; 
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const windSpeed = document.getElementById('wind-speed'); 
const humidity = document.getElementById('humidity'); 
 


function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      cityName.textContent = data.name;
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      description.textContent = data.weather[0].description;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`; 

      const weatherContainer = document.querySelector('.weather-container');
      weatherContainer.style.backgroundColor = getBackgroundColor(data.main.temp);
   
    })
    .catch(error => {
      console.error(error);
      alert('Error fetching weather data!');
    });
}
function getBackgroundColor(temperature) {
  // Example criteria, you can adjust these conditions as per your preference
  if (temperature > 25) {
    return '#ff6347'; // Red for hot weather
  } else if (temperature < 10) {
    return '#6495ed'; // Blue for cold weather
  } else {
    return '#f0f8ff'; // Default color
  }
}


searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
    cityInput.value = ''; // Clear input field after search
  } else {
    alert('Please enter a city name!');
  }
});
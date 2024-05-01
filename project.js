function getWeather() {
    var city = document.getElementById("city").value;
    var apiKey = "b6d01ef2006995827d8841449636a467";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var weather = data.weather[0].main;
        var description = data.weather[0].description;
        var temperature = (data.main.temp - 273.15).toFixed(1);
        var humidity = data.main.humidity;
        var windSpeed = data.wind.speed;
        var result = "Weather: " + weather + "<br>Description: " + description + "<br>Temperature: " + temperature + "°C<br>Humidity: " + humidity + "%<br>Wind Speed: " + windSpeed + " m/s";
        document.getElementById("result").innerHTML = result;
    })
    .catch(error => {
        console.log("Error fetching data:", error);
        document.getElementById("result").innerHTML = "Error fetching data. Please try again later.";
    });
}
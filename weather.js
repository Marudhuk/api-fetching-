let weather = '';
fetch('https://api.openweathermap.org/data/2.5/weather?q=villupuram&appid=ba3af3ca215651ede8950caa40067705')
    .then(res => res.json())
    .then(data => {
        console.log(data, "dfghjk")
        weather += `<div class="weather-icon">
        <img src="./images/icons8-partly-cloudy-day-50.png" alt="Weather Icon">
    </div>
    <div class="weather-info">
        <h2 class="city-name">${data.name}</h2>

        <div class="details">
            <div class="weather-description">${data.weather[0].description}</div>
            <div class="temperature">${data.main.temp} T</div>
        </div>
    </div>`

        document.getElementById("weather-card").innerHTML = weather;

    })



// ° F = ( °C × 9 5 ) + 32.
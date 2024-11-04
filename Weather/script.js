const apiKey = "ff22d1aec44aba47beaba034048e66d5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
const icon = document.querySelector(".weatherPng");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";


    if (data.weather[0].main == "Clouds") {
        icon.src = "cloudy.png";
    } else if (data.weather[0].main == "Rain") {
        icon.src = "rain.png";
    } else if (data.weather[0].main == "Clear") {
        icon.src = "sun.png";
    }else if (data.weather[0].main == "Drizzle") {
        icon.src = "drizzle.png";
    }else if (data.weather[0].main == "mist") {
        icon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener('click', function() {
    checkWeather(searchBox.value);
});

searchBox.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
})
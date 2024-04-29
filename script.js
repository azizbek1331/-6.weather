const apiKey = "2ea80ec1055d163195e21918e3792703";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    if (response.status == 404) {
        document.querySelector(".error").getElementsByClassName.display = "block";
        document.querySelector(".weather").getElementsByClassName.display = "none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "0c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = 'img/images/clouds.png';
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = 'img/images/clear.png';
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = 'img/images/rain.png';
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = 'img/images/clear.png';
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = 'img/images/mist.png';
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

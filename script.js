const formSearch = document.getElementById("form-search");
const inputCity = document.getElementById("input-city");
const spanCurrentTemp = document.getElementById("span-current-temp");
const spanCurrentWind = document.getElementById("span-current-wind");
const spanCurrentHum = document.getElementById("span-current-hum");
const spanCurrentUv = document.getElementById("span-current-uv");

const apiKey = "78a74d81029ef7eb507c261cbe6ab860";

//Gets a city's weather data from the api
function getCityWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  return fetch(url).then(function (response) {
    return response.json();
  });
}

//
function oneCall(lon, lat) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  return fetch(url).then(function (response) {
    return response.json();
  });
}

//Converts temperature from kelvin to celcius
function kelvinToCelcius(kelvin) {
  return kelvin - 273.15;
}

//Gets the weather of a chosen city entered by the user
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = inputCity.value;
  getCityWeather(city)
    .then(function (data) {
      //Shows the current weather data
      spanCurrentWind.textContent = data.wind.speed;
      spanCurrentTemp.textContent = kelvinToCelcius(data.main.temp).toFixed(2);
      spanCurrentHum.textContent = data.main.humidity;

      //Shows the uv level
      return oneCall(data.coord.lon, data.coord.lat);
    })
    .then(function (oneCallData) {
      const uv = oneCallData.current.uvi;

      spanCurrentUv.textContent = uv;

      if (uv < 4) {
        spanCurrentUv.setAttribute("class", "green");
      }
      if (uv >= 4 && uv <= 8) {
        spanCurrentUv.setAttribute("class", "yellow");
      }
      if (uv > 9) {
        spanCurrentUv.setAttribute("class", "red");
      }
    });

function createCard(date, icon, temp, wind, humidity){
    
}



});

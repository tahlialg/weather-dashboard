const formSearch = document.getElementById("form-search");
const inputCity = document.getElementById("input-city");
const spanCurrentTemp = document.getElementById("span-current-temp");
const spanCurrentWind = document.getElementById("span-current-wind");

const apiKey = "78a74d81029ef7eb507c261cbe6ab860";

function getCityWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  return fetch(url).then(function (response) {
    console.log(response);
    return response.json();
  });
}

function oneCall(lon, lat) {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
}

formSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = inputCity.value;
  getCityWeather(city).then(function (data) {
    console.log("data is", data);
  });
});

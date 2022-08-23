var weatherApi = "a114f343abd95da24e9e500373bebdc3";
var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");

function getLatlong(city) {
  var byCity =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    weatherApi;
  fetch(byCity)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var lat = data.coord.lat;
      var long = data.coord.lon;
      getWeather(lat, long);
    });
}

function getWeather(lat, long) {
  var oneCall =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    long +
    "&units=imperial&appid=" +
    weatherApi;
  fetch(oneCall)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

searchBtn.addEventListener("click", function () {
  var city = searchInput.value;
  console.log(city);
  getLatlong(city);
});

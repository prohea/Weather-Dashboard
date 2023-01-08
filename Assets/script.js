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
		"https://api.openweathermap.org/data/2.5/forecast?lat=" +
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
			week(data);
		});
}

function week (forecast) {
	var weeklyEl = document.getElementById("weekly");
	console.log(temp);
	console.log(wind);
	console.log(humidity);
	for (var i = 0; i < 7; i++) {
		var divEl = document.createElement("div");
		divEl.classList.add("weather-box");
		var temp = forecast.list[i].main.temp;
		var wind = forecast.list[i].wind.speed;
		var humidity = forecast.list[i].main.humidity;
		var tempEl = document.createElement("li");
		var windEl = document.createElement("li");
		var humidityEl = document.createElement("li");
		tempEl.classList.add("temp-li");
		humidityEl.classList.add("humidity-li");
		windEl.classList.add("wind-li");
		tempEl.textContent = temp + " °F";
		windEl.textContent = "Wind Speed: " + wind;
		humidityEl.textContent = "Humidity: " + humidity;
		weeklyEl.appendChild(tempEl);
		weeklyEl.appendChild(windEl);
		weeklyEl.appendChild(humidityEl);
	}
}

searchBtn.addEventListener("click", function (event) {
	event.preventDefault();

	var city = searchInput.value;
	console.log(city);
	getLatlong(city);
});

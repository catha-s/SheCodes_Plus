// Time
let now = new Date();
console.log(now);

function currentTime() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let time = document.querySelector("#time");
time.innerHTML = currentTime();

// Change City
function changeCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-input");

  let city = document.querySelector("h2");
  city.innerHTML = `${cityInput.value}`;

  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(displayTemp);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", changeCity);

// Temperature
function displayTemp(response) {
  let weatherH1 = document.querySelector("#temp");
  let temperature = Math.round(response.data.main.temp);

  console.log(response.data.weather);

  weatherH1.innerHTML = `${temperature}°`;
}

// Current Location
//function getCurrentLocation(event) {
//  event.preventDefault();
//  navigator.geolocation.getCurrentPosition(searchLocation);
//}

//function searchLocation(position) {
//  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
//  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

//  axios.get(apiUrl).then(displayTemp);
//}

console.log("data received")
console.log("Icon URL:",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "075de7c155cf4fe7a6d77bef627503ce"; //
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data received")
    console.log("Icon URL:",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    console.log(data);

    if (data.cod === 200) {
     document.getElementById("cityName").textContent = data.name;
      document.getElementById("temp").textContent = `🌡️ Temperature: ${data.main.temp}°C`;
      document.getElementById("description").textContent = `🌥️ ${data.weather[0].description}`;
      document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").textContent = `💨 Wind: ${data.wind.speed} km/h`;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } else {
      alert("❌ City not found!");
    }
  } catch (error) {
    alert("⚠️ Unable to fetch weather data. Please try again.");
  }
}
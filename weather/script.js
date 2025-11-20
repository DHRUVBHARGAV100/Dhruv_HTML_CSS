const weatherData = {
  "New York": {
    current: {
      temp: "17°C",
      description: "Clear sky"
    },
    forecast: [
      { day: "Wed", temp: "21°C", description: "Sunny" },
      { day: "Thu", temp: "24°C", description: "Cloudy" },
      { day: "Fri", temp: "21°C", description: "Sunny" },
      { day: "Sat", temp: "24°C", description: "Partly Cloudy" }
    ]
  },
  "London": {
    current: {
      temp: "15°C",
      description: "Cloudy"
    },
    forecast: [
      { day: "Wed", temp: "16°C", description: "Rainy" },
      { day: "Thu", temp: "17°C", description: "Cloudy" },
      { day: "Fri", temp: "18°C", description: "Sunny" },
      { day: "Sat", temp: "19°C", description: "Cloudy" }
    ]
  }
};

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const data = weatherData[city];

  if (data) {
    document.getElementById("currentWeather").innerHTML = `
      <h2>${city}</h2>
      <p>${data.current.temp}</p>
      <p>${data.current.description}</p>
    `;

    let forecastHTML = "";
    data.forecast.forEach(day => {
      forecastHTML += `
        <div class="day">
          <p>${day.day}</p>
          <p>${day.temp}</p>
          <p>${day.description}</p>
        </div>
      `;
    });
    document.getElementById("forecast").innerHTML = forecastHTML;
  } else {
    document.getElementById("currentWeather").innerHTML = `<p>City not found.</p>`;
    document.getElementById("forecast").innerHTML = "";
  }
});

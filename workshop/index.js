let weather = {
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=tumkur&appid=812b4cc3134a2308d3ac3bbdbfea11d5"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No Weather found");
          throw new Error("Invalid");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
  },
};

function setWeather() {
    let name = document.getElementById("searchbar").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=ru&appid=577b3bd2eec54e5a84a1ae825e746783`)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            document.getElementById("city_name").innerHTML = data.name;
            document.getElementById("temperature").innerHTML = parseInt(data.main.temp - 273) + "&deg";
            document.getElementById("img").setAttribute("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
            console.log(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            return console.log(data);
        })
}

const apiWeather = document.getElementById("weather");

async function getWeather(){
    const resp = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Rome&units=metric&appid=bb3844452f440a8c6685050a549abd36");
    const data = await resp.json();
    const div = document.createElement("div");
    div.innerHTML = `
    <p>${data["name"]}</p>
    <p>${data["main"]["temp"]} °c</p>
    `
    apiWeather.append(div)

}
getWeather()


const API_KEY = "254074ac40264cd6b0f55636261403";

function getWeather(){

let location = document.getElementById("locationInput").value;

fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&hours=24`)
.then(response => response.json())
.then(data => {

document.getElementById("city").innerText =
data.location.name + ", " + data.location.country;

let hours = data.forecast.forecastday[0].hour;

let weatherHTML = "";

hours.forEach(hour => {

weatherHTML += `
<div class="hour">
<b>${hour.time.split(" ")[1]}</b> :
${hour.temp_c} °C
</div>
`;

});

document.getElementById("weatherContainer").innerHTML = weatherHTML;

})
.catch(err =>{
alert("City not found");
});

}
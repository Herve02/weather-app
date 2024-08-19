
let weatherInfo = document.querySelector('.weather-infos');
let btn = document.querySelector('#btn');
let city = document.querySelector('#input').value;
const temp = document.querySelector('#temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
let cityName = document.getElementById('#cityName');
let stat = document.querySelector('#status');
let img = document.querySelector('.img img');
const notFound = document.getElementById('notFoundError');
let url = `http://api.weatherapi.com/v1/current.json?key=86efcd1a922344bdb3775059241508&q=${city}&aqi=no`


function position() {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        let url = `https://api.weatherapi.com/v1/current.json?key=86efcd1a922344bdb3775059241508&q=${lat},${lon}&aqi=no`
        
        fetch(url).then(res => res.json()).then(data =>{  
        
        cityName.innerHTML = data.location.name
        img.src = data.current.condition.icon
        temp.innerHTML = data.current.temp_c
        humidity.innerHTML = data.current.humidity
        wind.innerHTML = data.current.wind_kph
        stat.innerHTML = data.current.condition.text
    })
        .catch(error=>console.log(error))
    })
}
position()

function getWeather() {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        weatherInfo.style.maxWidth = "100%";
        
        city = document.querySelector('#input').value
        url = `http://api.weatherapi.com/v1/current.json?key=86efcd1a922344bdb3775059241508&q=${city}&aqi=no`
        fetch(url).then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>{
            if(data.location.name.toLowerCase() === city.toLowerCase()){
                
                cityName.innerHTML = data.location.name
                img.src = data.current.condition.icon
                temp.innerHTML = data.current.temp_c
                humidity.innerHTML = data.current.humidity
                wind.innerHTML = data.current.wind_kph
                stat.innerHTML = data.current.condition.text  
                 
            }
            else{
                weatherInfo.innerHTML = "<p style='color:red'>City Not Found</p>";
            }
        })
        // .catch(error=>console.log(error))
    })
    
    window.addEventListener("onload", () => {
        weatherInfo.style.display = "none";
    });
}
getWeather()

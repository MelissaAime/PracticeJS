const API_KEY = '983cf1f8c52835e13e01e9fc5b17dd4d';

const fetchData = position => {
    const {latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        temperature: data.main.temp,
        temperature_max: data.main.temp_max,
        temperature_min: data.main.temp_min,
        temperature_feel: data.main.feels_like,
        date: getDate(),
        hour: getHour(),
    };

    Object.keys(weatherData).forEach( key => {
        document.getElementById(key).textContent = weatherData[key];
    });

    cleanUp();
}

const cleanUp = () => {
    let container = document.getElementById('divContainer');
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    container.style.display = 'flex';
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0' + date.getMonth() + 1).slice(-2)}-${date.getFullYear()}`;
}

const getHour = () => {
    let hour = new Date();
    let now = hour.toLocaleTimeString();
    return now;
    
}

const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}
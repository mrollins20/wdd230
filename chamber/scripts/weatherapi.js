/* Weather API script. Used to retrieve weather data from OpenWeatherMap. */
// select HTML elements in the document
const weatherImg = document.querySelector(".weather-img");
const weatherTemp = document.querySelector(".temperature");
const weatherTempValue = weatherTemp.innerText;
const windSpeed = document.querySelector(".wind-speed");
const windSpeedValue = windSpeed.innerText;
const feelTemp = document.querySelector(".feels-temp");
const skyState = document.querySelector(".sky-state");

const geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=laramie&units=imperial&appid=9f5f429d31a00a5a5a09c336216a44e2";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=41.311367&lon=-105.591101&units=imperial&appid=9f5f429d31a00a5a5a09c336216a44e2";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // this is for testing the call
            await displayResults(data);
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(weatherData) {
    const data = weatherData
    weatherTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    windSpeed.innerText = weatherData.wind.speed.toFixed(1);
    feelTemp.innerText = weatherData.main.feels_like.toFixed(1);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherImg.setAttribute('src', iconsrc);
    weatherImg.setAttribute('alt', desc);
    skyState.textContent = desc;
}

//apiFetch(geoUrl);
const data = apiFetch(weatherUrl);
export {data};
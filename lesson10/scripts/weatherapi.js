/* Weather API script. Used to retrieve weather data from OpenWeatherMap. */
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=fairbanks&units=imperial&appid=9f5f429d31a00a5a5a09c336216a44e2";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=64.837845&lon=-147.716675&units=imperial&appid=9f5f429d31a00a5a5a09c336216a44e2";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            // displayResults(data);
            await displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

//apiFetch(geoUrl);
apiFetch(weatherUrl);
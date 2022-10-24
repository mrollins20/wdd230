// windchill.js
// calculate windchill using wind speed and temperature given.

// Retrieve html elements
let temperatureElement = document.querySelector(".temperature");
let windSpeedElement = document.querySelector(".wind-speed");
let windChillElement = document.querySelector(".wind-chill");
let feelsTempElement = document.querySelector(".feels-temp");

// create windchill values
let temp = temperatureElement.textContent;
let windSpeed = windSpeedElement.textContent;
let windChill = calcWindChill(temp, windSpeed);

// Place windchill values into document
windChillElement.textContent = windChill;
feelsTempElement.textContent = temp - windChill;

// windchill function
function calcWindChill(temp, windSpeed) {
    if (temp <= 10) {
        if (windSpeed > 4.8) {
            return (35.74 + 0.6215*temp - 35.75*(windSpeed**0.16) + 0.4275*temp*(windSpeed**0.16)).toFixed(1)
        }
        // If the wind speed is less than 4.9k/h, return 'N/A'
        else {
            return "N/A"
        }
    }
    // If the temperature is above 10C, return 'N/A'
    else {
        return "N/A"
    }
}

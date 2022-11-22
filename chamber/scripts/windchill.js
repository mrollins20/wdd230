// windchill.js
// calculate windchill using wind speed and temperature given.
import {data} from "./weatherapi.js";
// console.log(data) // DebugStatement: Ensure data imported successfully
// create windchill values
const weatherData = await data
const tempFah = await weatherData.main.temp;
const windSpeedMph = await weatherData.wind.speed;
//console.log(tempFah); // DebugStatement: Check temperature for fahrenheit value
//console.log(windSpeedMph); // DebugStatement: Check for miles value
const tempCel = calcCel(tempFah);
const windSpeedKph = calcKph(windSpeedMph);
const windChill = calcWindChill(tempCel, windSpeedKph);
// console.log(windChill); // DebugStatement: Check that the windchill calculation is correct
let fahWindChill = 0;
if (windChill != "N/A") {
    fahWindChill = calcFah(windChill);
    document.querySelector(".wind-chill").textContent = fahWindChill;
}
else {
    document.querySelector(".wind-chill-p").textContent = "Wind Chill: N/A";
}

// Place windchill values into document


// windchill function
function calcWindChill(temp, windSpeed) {
    if (temp <= 10) {
        if (windSpeed > 4.8) {
            return (35.74 + (0.6215*temp) - (35.75*(windSpeed**0.16)) + (0.4275*temp*(windSpeed**0.16))).toFixed(1)
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
// Fahrenheit function
function calcFah(temp) {
    return ((temp*(9/5))+32).toFixed(1)
}
// Celsius function
function calcCel(temp) {
    return (temp - 32)*(5/9)
}
// kph function
function calcKph(mph) {
    return mph*1.60934;
}
// mph function
function calcMph(kph) {
    return kph/1.60934;
}
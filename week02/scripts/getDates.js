// Fetches the current date and time.
const currentDateAndTime = new Date();
const amPm = 'AM';

// Retrieve the year from the current date.
let copyrightYear = currentDateAndTime.getFullYear();

//Retrieve the last date that the webpage was modified and convert it into parts.
let modificationDate = new Date(document.lastModified);

let modificationYear = modificationDate.getFullYear();
let modificationMonth = modificationDate.getMonth() + 1; //1 is added to the month value due to January's index being 0.
let modificationDay = modificationDate.getDate();

// Retrieve the values for hours and seconds
let modificationHours = determineImperialHours(modificationDate.getHours());
let modificationMinutes = modificationDate.getMinutes();

//Return the copyright year and Modification date.
document.getElementById("copyright-year").textContent = `${copyrightYear}`;

document.getElementById("lastModified").textContent = `Last Updated: ${modificationMonth}/${modificationDay}/${modificationYear} ${modificationHours}:${modificationMinutes}`;


// Determine if the number of seconds is less than 10. If so, add a zero before it.
function displayTwoDigits(seconds) {
    if (seconds < 10) {
        return `0` + seconds.toString();
    }
    else {
        return seconds;
    };
}
function determineImperialHours(militaryHours) {
    if (militaryHours < 12) {
        return militaryHours;
    }
    else {
        let imperialHours = militaryHours - 12;
        return imperialHours;
    }
}
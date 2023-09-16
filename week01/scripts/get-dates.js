// Fetches the current date and time.
const currentDateAndTime = new Date();

// Retrieve the year from the current date.
let copyrightYear = currentDateAndTime.getFullYear();

//Retrieve the last date that the webpage was modified and convert it into parts.
let modificationDate = new Date(document.lastModified);

let modificationYear = modificationDate.getFullYear();
let modificationMonth = modificationDate.getMonth() + 1; //1 is added to the month value due to January's index being 0.
let modificationDay = modificationDate.getDate();

// Retrieve the values for hours and seconds
let modificationHours = modificationDate.getHours();
let modificationSeconds = modificationDate.getSeconds();
//let modificationSeconds = 9 (This is a test statement)

// Runs determineSeconds function.
let modifiedSeconds = determineSeconds(modificationSeconds);

//Return the copyright year and Modification date.
document.getElementById("copyright-year").textContent = `${copyrightYear}`;

document.getElementById("lastModified").textContent = `Last Updated: ${modificationMonth}/${modificationDay}/${modificationYear} ${modificationHours}:${modifiedSeconds}`;


// Determine if the number of seconds is less than 10. If so, add a zero before it.
function determineSeconds(modificationSeconds) {
    if (modificationSeconds < 10) {
        return `0` + modificationSeconds.toString();
    }
    else {
        return modificationSeconds;
    };
}
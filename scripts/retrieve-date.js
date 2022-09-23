// Fetches the current date and time.
const currentDateAndTime = new Date();

// Retrieve the year from the current date.
let copyrightYear = currentDateAndTime.getFullYear();

//Retrieve the last date that the webpage was modified and convert it into parts.
let modificationDate = new Date(document.lastModified);
let modificationYear = modificationDate.getFullYear();
let modificationMonth = modificationDate.getMonth() + 1; //1 is added to the month value due to January's index being 0.
let modificationDay = modificationDate.getDate();
let modificationHours = modificationDate.getHours();
let modificationSeconds = modificationDate.getSeconds();
let modificationMiliseconds = modificationDate.getMilliseconds();

//Return the copyright year and Modification date.
document.getElementById("copyright-year").textContent = `${copyrightYear}`;

document.getElementById("last-modified-date").textContent = 
    `Last Updated: ${modificationMonth}/${modificationDay}/${modificationYear} 
    ${modificationHours}:${modificationSeconds}`;
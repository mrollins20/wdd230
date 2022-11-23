/*
This script is designed to fetch the date and last-modification date of the document, 
and then display those values in the document.
*/

// Fetches the current date and time.
const currentDateAndTime = new Date();

// Retrieve the year from the current date.
let copyrightYear = currentDateAndTime.getFullYear();
let currentMonth = determineMonth(currentDateAndTime.getMonth());
let currentDay = currentDateAndTime.getDate();
let weekDayNumber = currentDateAndTime.getDay();
let weekDay = determineWeekday(weekDayNumber);

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
document.querySelector(".current-date").textContent = `${weekDay}, ${currentDay} ${currentMonth} ${copyrightYear}`
document.getElementById("copyright-year").textContent = `${copyrightYear}`;

document.getElementById("last-modified-date").innerHTML = `Last Modification: <br>${modificationMonth}/${modificationDay}/${modificationYear} ${modificationHours}:${modifiedSeconds}`;


// Determine if the number of seconds is less than 10. If so, add a zero before it.
function determineSeconds(modificationSeconds) {
    if (modificationSeconds < 10) {
        return `0` + modificationSeconds.toString();
    }
    else {
        return modificationSeconds;
    };
}
function determineWeekday(weekDay) {
    switch (weekDay) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            break;
    }
}
function determineMonth(monthOfYear) {
    switch (monthOfYear) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            break;
    }
}
// Determine if the day of the week is monday or tuesday and display a special event message.
switch (weekDayNumber) {
    case 1:
        document.getElementsByClassName("invite")[0].classList.toggle("toggle-invite")//.toggle("invite")
        document.getElementById("invite-banner").style.backgroundColor = "#C8C8C8"
        break;
    case 2:
        document.getElementsByClassName("invite")[0].classList.toggle("toggle-invite")//.toggle("invite")
        document.getElementById("invite-banner").style.backgroundColor = "#C8C8C8"
        break;
    default:
        break;
}
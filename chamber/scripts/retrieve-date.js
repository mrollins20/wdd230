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
let WeekDay = determineWeekday(currentDateAndTime.getDay());

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
document.querySelector(".current-date").textContent = `${WeekDay}, ${currentDay} ${currentMonth} ${copyrightYear}`
document.getElementById("copyright-year").textContent = `${copyrightYear}`;

document.getElementById("last-modified-date").textContent = `Last Modification: ${modificationMonth}/${modificationDay}/${modificationYear} ${modificationHours}:${modifiedSeconds}`;


// Determine if the number of seconds is less than 10. If so, add a zero before it.
function determineSeconds(modificationSeconds) {
    if (modificationSeconds < 10) {
        return `0` + modificationSeconds.toString();
    }
    else {
        return modificationSeconds;
    };
}
function determineWeekday(dayOfWeek) {
    if (dayOfWeek == 0) {
        return "Sunday"
    }
    else if (dayOfWeek == 1) {
        return "Monday"
    }
    else if (dayOfWeek == 2) {
        return "Tuesday"
    }
    else if (dayOfWeek == 3) {
        return "Wednesday"
    }
    else if (dayOfWeek == 4) {
        return "Thursday"
    }
    else if (dayOfWeek == 5) {
        return "Friday"
    }
    else if (dayOfWeek == 6) {
        return "Saturday"
    }
}
function determineMonth(monthOfYear) {
    if (monthOfYear == 0) {
        return "January"
    }
    else if (monthOfYear == 1) {
        return "February"
    }
    else if (monthOfYear == 2) {
        return "March"
    }
    else if (monthOfYear == 3) {
        return "April"
    }
    else if (monthOfYear == 4) {
        return "May"
    }
    else if (monthOfYear == 5) {
        return "June"
    }
    else if (monthOfYear == 6) {
        return "July"
    }
    else if (monthOfYear == 7) {
        return "August"
    }
    else if (monthOfYear == 8) {
        return "September"
    }
    else if (monthOfYear == 9) {
        return "October"
    }
    else if (monthOfYear == 10) {
        return "November"
    }
    else if (monthOfYear == 11) {
        return "December"
    }
}
// Determine if the day of the week is monday or tuesday and display a special event message.
if (determineWeekday(dayOfWeek) == "Monday") {
    document.getElementsByClassName("invite")[0].classList.toggle("toggle-invite");
}
else if (determineWeekday(dayOfWeek) == "Tuesday") {
    document.getElementsByClassName("invite")[0].classList.toggle("toggle-invite");
}
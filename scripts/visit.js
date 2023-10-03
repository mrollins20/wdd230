// Declare Constant Variables
const visitCountElement = document.querySelector('.visit-count');
const count = getVisitCount();
proVisitCount();

// Set visitor count 
function setVisitCount(count) {
    //adds the user's page visit to the total view count of the site
    localStorage.setItem('visitorCount', JSON.stringify(count));
}
// Get Visitor Count
function getVisitCount() {
    //retrieves the visit count from storage
    return JSON.parse(localStorage.getItem('visitorCount'));
}
// Process Visitor Count
function proVisitCount() {
    // Takes the data from local storage and processes it to display on webpage
    if (count >= 0) {
        let newCount = count + 1;
        setVisitCount(newCount);
        visitCountElement.textContent = `Visit Count: ${newCount}`;
    }
    else {
        count = 0;
        setVisitCount(count);
        visitCountElement.textContent = `Visit Count: 0`;
    };
}
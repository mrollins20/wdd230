/* Prophets.js is used to acquire information about the different prophets of the church. */
/* Written by Marc Rollins */

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporarily checking for a valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Change the contents of birthDate to the prophet's birth date
    birthDate.textContent = `Date of birth: ${prophet.birthdate}`

    // Change the contents of birthPlace to the prophet's birth place
    birthPlace.textContent = `Place of birth: ${prophet.birthplace}`

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    // (Fill in the blank with the appropiate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append all the elements to the section(card)
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}
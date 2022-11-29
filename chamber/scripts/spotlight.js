// Create spotlight cards on the homepage.
import businesses from "../json/data.json" assert {type: "json"};

const cards = document.body.querySelector(".spotlights");// Target spotlights containin element

let randInt1 = Math.random()*9;
let int1 = Math.round(randInt1);
const calcInt = int1;
if (int1 < 3) {
    calcInt = (int1+3);
}

let randInt2 = calcInt/2;
let int2 = Math.round(randInt2);

let randInt3 = calcInt/3;
let int3 = Math.round(randInt3);

if (int1 != int2) {
    if (int2 != int3) {
        createCard(int1);
        createCard(int2);
        createCard(int3);
    };
};

function createCard (int) {
    // Create spotlight card
    let business = businesses[int];
    let businessName = business.name;
    let businessMessage = business.message;

    let businessEmail = business.email;
    let businessPhone = business.phone;

    let card = document.createElement("div");
    card.setAttribute("class", "spotlight");

    let cardName = document.createElement("h3");
    cardName.textContent = businessName;
    let cardMessage = document.createElement("p");
    cardMessage.textContent = businessMessage;
    let cardDivider = document.createElement("div");
    cardDivider.setAttribute("class", "divider");
    let cardEmail = document.createElement("p");
    cardEmail.textContent = businessEmail;
    let cardPhone = document.createElement("p");
    cardPhone.textContent = businessPhone;

    card.appendChild(cardName);
    card.appendChild(cardMessage);
    card.appendChild(cardDivider);
    card.appendChild(cardEmail);
    card.appendChild(cardPhone);

    cards.appendChild(card);
}
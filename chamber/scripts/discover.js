import businesses from "../json/data.json" assert {type: "json"};

console.log(businesses);
const cards = document.body.querySelector(".directory-cards");

for (let index = 0; index < businesses.length; index++) {
    let business = businesses[index];
    let businessName = business.name;
    let businessAddress = business.address;
    let businessPhone = business.phone;
    let businessWebsite = business.website;
    let businessImage = business.image;
    let businessMembership = business.membership;
    let businessMessage = business.message;

    let card = document.createElement("section");
    let cardName = document.createElement("h4");
    cardName.textContent = businessName;
    let cardAddress = document.createElement("p");
    cardAddress.textContent = businessAddress;
    let cardPhone = document.createElement("p");
    cardPhone.textContent = businessPhone;
    let cardWebsite = document.createElement("p");
    cardWebsite.textContent = businessWebsite;
    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", businessImage);
    cardImage.setAttribute("alt", `Company logo of ${businessName}`);
    let cardMembership = document.createElement("p");
    cardMembership.textContent = `Proud ${businessMembership} Member`;

    card.appendChild(cardName);
    card.appendChild(cardAddress);
    card.appendChild(cardPhone);
    card.appendChild(cardWebsite);
    card.appendChild(cardImage);
    card.appendChild(cardMembership);
    if (businessMembership == "Gold") {
        let cardMessage = document.createElement("p");
        cardMessage.textContent = businessMessage;
    };
    cards.appendChild(card);
}
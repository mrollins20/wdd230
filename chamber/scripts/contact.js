import people from "../json/people.json" assert {type: "json"};

const cards = document.body.querySelector(".member-cards");
createCards(people, cards);

function createCards(array, htmlElement) {
    for (let index = 0; index < array.length; index++) {
        let person = people[index];
        let personName = person.name;
        let personImage = person.image;
        let personTitle = person.title;

        let card = document.createElement("section");
        let cardName = document.createElement("h4");
        cardName.textContent = personName;
        let cardImage = document.createElement("img");
        cardImage.setAttribute("src", personImage);
        cardImage.setAttribute("alt", `Company logo of ${personName}`);
        let cardTitle = document.createElement("p");
        cardTitle.textContent = personTitle;

        card.appendChild(cardName);
        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        htmlElement.appendChild(card);
    };
}
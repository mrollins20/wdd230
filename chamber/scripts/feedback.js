document.querySelector(".submit-button").addEventListener("click", toggleMessage())
const message = document.body.querySelector(".feedback-msg");
setTimeout().toggleMessage();
function toggleMessage() {
    message.toggleAttribute(".feedback-msg-confirmation");
}
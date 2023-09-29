// Declare Constant Variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
// Click Event Listener
button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    }
    else {
        input.focus();
    }
});
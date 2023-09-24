const dark = document.querySelector('#dark')
const darkButton = document.querySelector("#dark-button");

// Switch between dark and light theme
darkButton.addEventListener('click', () => {
    dark.classList.toggle('dark');
    darkButton.classList.toggle('active');
    const darkText = document.querySelector("#dark-button").textContent;
    if (darkText == 'Dark Mode') {
        document.querySelector('#dark-button').textContent = 'Light Mode';
    }
    else {
        document.querySelector('#dark-button').textContent = 'Dark Mode';
    };
});
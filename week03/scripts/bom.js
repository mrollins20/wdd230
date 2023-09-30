// Declare Constant Variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Click Event Listener
// button.addEventListener('click', () => {
//     if (input.value != '') {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');
//         li.textContent = input.value;
//         deleteButton.textContent = '❌';
//         deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
//         li.append(deleteButton);
//         list.append(li);
//         deleteButton.addEventListener('click', () => {
//             list.removeChild(li);
//             input.focus();
//         });
//         input.focus();
//         input.value = '';
//     }
//     else {
//         input.focus();
//     };
// });
button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});
// Display List Function
function displayList(item) {
    //displays the list of chapters that are made by the user
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}
// Set Chapter List Function
function setChapterList() {
    //sets the user's favorite chapters to be saved in local storage
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
// Get Chapter List Function
function getChapterList() {
    //retrieves chapters list from local storage
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
// Delete Chapter Function
function deleteChapter(chapter) {
    //deletes the chapter from the list in local storage
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
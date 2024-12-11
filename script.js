// Get the button element
const changeTextButton = document.getElementById('changeTextButton');

// Add an event listener to the button
changeTextButton.addEventListener('click', function() {

// 1) Change the text of the heading (h1) element to "Text Changed!"
document.getElementById('header').textContent = "Text Changed!";

// 2) Change the text color of all paragraphs with the class 'text' to blue
const paragraphs = document.querySelectorAll('.text');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}

// 3) Log the text content of each li element to the console
const listItems = document.querySelectorAll('.list-item');
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].textContent);
}

// 4) Change the background color of the first li element to yellow
document.querySelector('.list-item').style.backgroundColor = 'yellow';

// 5) Change the text color of all li elements to green
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'green';
}
});

console.log("Hello World"); //Logging to the console, if u press f12 and go to the console tab you'll see the string we entered in ""

// Changing text on button click
const button = document.getElementById('magicButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.innerText = "✨ The JavaScript Magic worked! ✨";
    message.style.color = "orange";
});

// Reflecting user input in real-time
const input = document.getElementById('userInput');
const display = document.getElementById('displayText');

input.addEventListener('input', (event) => {
    display.innerText = "You are typing: " + event.target.value;
});
// Function to update the time, day, and date
const updateDateTime = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const dateTimeString = now.toLocaleString('en-US', options);
    document.getElementById('current-date-time').textContent = `Today is ${dateTimeString}`;
};

// Update the time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Handle user information form submission
document.getElementById('user-info').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mood = document.getElementById('mood').value;

    // Display the greeting message
    const greetingMessage = `The Animal Brand Company welcomes you, ${name}! We're glad you are feeling ${mood}!`;
    document.getElementById('greeting-message').textContent = greetingMessage;
});

// Polygon input handling
function getPolygonName(sides) {
    const polygonNames = {
        1: 'monogon',
        2: 'digon (or bigon)',
        3: 'triangle',
        4: 'quadrilateral',
        5: 'pentagon',
        6: 'hexagon',
        7: 'heptagon',
        8: 'octagon',
        9: 'nonagon',
        10: 'decagon'
    };
    return polygonNames[sides] || 'unknown polygon';
}

document.getElementById('polygon-input').addEventListener('change', function() {
    let number = parseFloat(this.value);

    // Convert to absolute value and round if necessary
    number = Math.round(Math.abs(number));

    const polygonName = getPolygonName(number);
    alert(`A polygon with ${number} sides is called a ${polygonName}.`);
});

// Animal brand themed functions
function displayAnimalFact() {
    alert("Did you know? Penguins can leap into the air while swimming.");
}

function suggestAnimalActivity() {
    alert("It's a great day for bird watching!");
}

function shareAnimalJoke() {
    alert("Why don't fish play basketball? Because they're afraid of the net!");
}

function recommendAnimalFood() {
    alert("Today's recommended food: Honey for the bears!");
}

function randomAnimalQuote() {
    const quotes = [
        "The early bird catches the worm!",
        "An elephant never forgets.",
        "Slow and steady wins the race.",
        "Curiosity killed the cat."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
}

// Add event listeners for animal-themed buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button:nth-of-type(1)').addEventListener('click', displayAnimalFact);
    document.querySelector('button:nth-of-type(2)').addEventListener('click', suggestAnimalActivity);
    document.querySelector('button:nth-of-type(3)').addEventListener('click', shareAnimalJoke);
    document.querySelector('button:nth-of-type(4)').addEventListener('click', recommendAnimalFood);
    document.querySelector('button:nth-of-type(5)').addEventListener('click', randomAnimalQuote);
});
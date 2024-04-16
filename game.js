// Global variables
let numSymbols;
let matches = 0;
let flippedCards = 0;
let firstCard = null;
let secondCard = null;

// Array of symbols
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

// Function to handle card click
function cardClick(event) {
    const card = event.target;
    
    // Check if the card is already flipped or if two cards are already flipped
    if (card.classList.contains('flipped') || flippedCards === 2) {
        return;
    }

    // Flip the card
    showSymbol(card);

    // Update the flipped card variables
    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
    }

    flippedCards++;

    // Check for a match if two cards are flipped
    if (flippedCards === 2) {
        setTimeout(checkMatch, 1000);
    }
}

// Function to show the symbol on the card
function showSymbol(card) {
    const symbol = card.getAttribute('data-symbol');
    // Add a text node to the card with the symbol
    const symbolNode = document.createTextNode(symbol);
    card.appendChild(symbolNode);
    card.classList.add('flipped');
}

// Function to check if two flipped cards match
function checkMatch() {
    if (firstCard && secondCard) {
        const symbol1 = firstCard.getAttribute('data-symbol');
        const symbol2 = secondCard.getAttribute('data-symbol');

        // If symbols match
        if (symbol1 === symbol2) {
            matches++;
            // If all matches found
            if (matches === numSymbols) {
                endGame();
            }
        } else {
            // Flip the cards back if no match
            hideSymbol(firstCard);
            hideSymbol(secondCard);
        }

        // Reset flipped card variables
        flippedCards = 0;
        firstCard = null;
        secondCard = null;
    }
}

// Function to hide the symbol on the card
function hideSymbol(card) {
    // Remove the text node to hide the symbol
    card.textContent = '';
    card.classList.remove('flipped');
}

// Function to generate a random symbol
function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to generate the game board
function generateBoard() {
    const gameBoard = document.getElementById('game');
    const startForm = document.getElementById('startForm');
    startForm.style.display = 'none';

    const numPairs = numSymbols;
    const numCards = numPairs * 2;
    const symbolsPool = symbols.slice(0, numPairs); // Slice the symbols array to match the number of pairs

    // Create an array to store each symbol twice
    const cardsSymbols = [...symbolsPool, ...symbolsPool];

    // Shuffle the symbols randomly
    for (let i = cardsSymbols.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsSymbols[i], cardsSymbols[j]] = [cardsSymbols[j], cardsSymbols[i]];
    }

    // Create and append card elements to the game board
    for (let i = 0; i < numCards; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.addEventListener('click', cardClick);
        card.setAttribute('data-symbol', cardsSymbols[i]);
        gameBoard.appendChild(card);
    }
}

// Function to handle the start button click
function startGame() {
    numSymbols = parseInt(document.getElementById('numSymbols').value);
    if (numSymbols > 8) {
        numSymbols = 8;
    }
    generateBoard();
}

// Add event listener for the start button
document.getElementById('startButton').addEventListener('click', startGame);

// Function to end the game
function endGame() {
    const gameBoard = document.getElementById('game');
    gameBoard.innerHTML = '<h2>Congratulations! You won!</h2><button onclick="location.reload()">Play Again</button>';
}

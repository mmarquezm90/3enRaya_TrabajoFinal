// We select the elements from the DOM
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('h2');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

// We define the winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle clicking on a cell
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = Array.from(cells).indexOf(clickedCell);

    // If the cell is already occupied or the game is over, we do nothing.
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    // We updated the status and interface
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

// Function to mark the cell
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
}

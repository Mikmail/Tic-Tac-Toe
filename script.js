// Define players as objects
const playerX = {
  name: '',
  symbol: 'X',
  color: 'red'
};
const playerO = {
  name: '',
  symbol: 'O',
  color: 'blue'
};

// Keep track of current player
let currentPlayer = playerX;

// Store cells in an array
const cells = document.querySelectorAll('td');

// Attach click event listener to cells
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    if (this.textContent === '') {
      this.textContent = currentPlayer.symbol;
      this.style.color = currentPlayer.color;
      if (checkWin(currentPlayer.symbol)) {
        alert(currentPlayer.name + ' wins!');
        return;
      }
      switchPlayer();
    }
  });
}

// Switch players
function switchPlayer() {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
  } else {
    currentPlayer = playerX;
  }
}

// Check for win
function checkWin(symbol) {
  // Check rows
  for (let i = 0; i <= 6; i += 3) {
    if (
      cells[i].textContent === symbol &&
      cells[i + 1].textContent === symbol &&
      cells[i + 2].textContent === symbol
    ) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      cells[i].textContent === symbol &&
      cells[i + 3].textContent === symbol &&
      cells[i + 6].textContent === symbol
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    cells[0].textContent === symbol &&
    cells[4].textContent === symbol &&
    cells[8].textContent === symbol
  ) {
    return true;
  }
  if (
    cells[2].textContent === symbol &&
    cells[4].textContent === symbol &&
    cells[6].textContent === symbol
  ) {
    return true;
  }

  return false;
}

// Check for tie
function checkTie() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      return false;
    }
  }
  alert('It\'s a tie!');
  return true;
}

// Reset the board
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
});

// Get player names
const playerXName = prompt('Enter the name of player X:');
playerX.name = playerXName;
const playerOName = prompt('Enter the name of player O:');
playerO.name = playerOName;

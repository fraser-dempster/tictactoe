let xTurn = true;

const Player = (name) => {
  const getName = () => name;
  const setName = (newName) => {
    name = newName;
  };
  return { getName };
};

const clickHandler = (e) => {
  if (xTurn) {
    gameBoard.setBoard(e.currentTarget.id, "X");
    xTurn = false;
    displayController.playerTurn();
    displayController.winConditions();
  } else {
    gameBoard.setBoard(e.currentTarget.id, "O");
    xTurn = true;
    displayController.playerTurn();
    displayController.winConditions();
  }
};

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;
  const setBoard = (index, value) => {
    board[index] = value;
    if (document.getElementById(index).innerHTML === "") {
      document.getElementById(index).innerHTML += value;
    } else {
      alert("This cell is already taken");
    }
  };
  const resetBoard = () => {
    xTurn = true;
    board = ["", "", "", "", "", "", "", "", ""];
    document.getElementsByClassName("outcome-container")[0].innerHTML = "";
    displayController.displayBoard();
  };
  const renderGameBoard = () => {
    getBoard().map((element, index) => {
      boardContainer.innerHTML += `<div class="cell" id=${index} key=${index}>${element}</div>`;
    });
  };
  return { getBoard, setBoard, resetBoard, renderGameBoard };
})();

const displayController = (() => {
  const displayBoard = () => {
    const board = gameBoard.getBoard();
    const boardContainer = document.querySelector(".container");
    boardContainer.innerHTML = "";
    board.forEach((element, index) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("id", index);
      cell.setAttribute("data-index", index);
      cell.textContent = element;
      cell.addEventListener("click", clickHandler);
      boardContainer.appendChild(cell);
      playerTurn();
    });
  };

  const playerTurn = () => {
    const playerTurn = document.querySelector(".player-turn");

    xTurn
      ? (playerTurn.textContent = "Player 1's turn")
      : (playerTurn.textContent = "Player 2's turn");
  };

  const winConditions = () => {
    const board = gameBoard.getBoard();
    const winningConditions = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];

    winningConditions.forEach((condition) => {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === "X") {
          document.getElementsByClassName(
            "outcome-container"
          )[0].innerHTML = `<dialog open class="outcome">${player1.getName()} wins</dialog>`;
        } else {
          document.getElementsByClassName(
            "outcome-container"
          )[0].innerHTML = `<dialog open class="outcome">${player2.getName()} wins</dialog>`;
        }
      }
    });
    if (!board.includes("")) {
      alert("It's a draw");
    }
  };
  return {
    displayBoard,
    playerTurn,
    clickHandler,
    winConditions,
  };
})();

// aiPlayer = () => {
//   const board = gameBoard.getBoard();
//   const randomIndex = Math.floor(Math.random() * board.length);
//   if (board[randomIndex] === "") {
//     gameBoard.setBoard(randomIndex, "O");
//   } else {
//     aiPlayer();
//   }
// };

displayController.displayBoard();
document
  .querySelector("button")
  .addEventListener("click", gameBoard.resetBoard);
// aiPlayer();

const player1 = Player("Joelle");
const player2 = Player("Fraser");

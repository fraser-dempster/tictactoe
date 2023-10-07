const clickHandler = (e) => {
  gameBoard.setBoard(e.currentTarget.id, "X");
};

const Player = (name) => {
  const getName = () => name;

  return { getName };
};

const gameBoard = (() => {
  let board = ["1", "1", "2", "", "", "", "", "", ""];

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
    board = ["", "", "", "", "", "", "", "", ""];
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
    });
  };

  // const addClickEvent = () => {
  //   const cells = document.querySelectorAll(".cell");
  //   cells.forEach((cell) => {
  //     cell.addEventListener("click", clickHandler);
  //   });
  // };

  // const displayMessage = (message) => {
  //   const messageContainer = document.querySelector(".message-container");
  //   messageContainer.textContent = message;
  // };
  // const displayResetButton = () => {
  //   const resetButton = document.querySelector(".reset-button");
  //   resetButton.style.display = "block";
  // };
  // const hideResetButton = () => {
  //   const resetButton = document.querySelector(".reset-button");
  //   resetButton.style.display = "none";
  // };
  return {
    displayBoard,
  };
})();

displayController.displayBoard();

const player1 = Player("Player 1");
const player2 = Player("Player 2");

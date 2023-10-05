const Player = (name) => {
  const getName = () => name;
  return { getName };
};

const gameBoard = (() => {
  let board = ["2", "1", "1", "3", "1", "2", "1", "1", "1"];
  const getBoard = () => board;
  const setBoard = (index, value) => {
    board[index] = value;
  };
  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };
  return { getBoard, setBoard, resetBoard };
})();

let boardContainer = document.getElementById("container");

gameBoard.setBoard(0, "d");

gameBoard.getBoard().map((element, index) => {
  return (boardContainer.innerHTML += `<div class="cell" key=${index} data-index=${index}>${element}</div>`);
});

// const displayController = (() => {
//   const displayBoard = () => {
//     const board = gameBoard.getBoard();
//     const boardContainer = document.querySelector(".board-container");
//     boardContainer.innerHTML = "";
//     board.forEach((element, index) => {
//       const cell = document.createElement("div");
//       cell.classList.add("cell");
//       cell.setAttribute("data-index", index);
//       cell.textContent = element;
//       boardContainer.appendChild(cell);
//     });
//   };
//   const displayMessage = (message) => {
//     const messageContainer = document.querySelector(".message-container");
//     messageContainer.textContent = message;
//   };
//   const displayResetButton = () => {
//     const resetButton = document.querySelector(".reset-button");
//     resetButton.style.display = "block";
//   };
//   const hideResetButton = () => {
//     const resetButton = document.querySelector(".reset-button");
//     resetButton.style.display = "none";
//   };
//   return {
//     displayBoard,
//     displayMessage,
//     displayResetButton,
//     hideResetButton,
//   };
// })();

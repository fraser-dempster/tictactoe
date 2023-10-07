const Player = (name) => {
  const getName = () => name;
  return { getName };
};
const clickHandler = (e) => {
  // e.currentTarget.style["background-color"] = "red";
  gameBoard.setBoard(e.currentTarget.id, "X");
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

let boardContainer = document.getElementById("container");

gameBoard.renderGameBoard();

var list = document.querySelectorAll(".cell");
for (let item of list) {
  item.addEventListener("click", clickHandler, { once: true });
}

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

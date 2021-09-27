var app = {
  init: function () {
    console.log("init !");
    app.drawBoard();
  },
  player: {
    x: 0,
    y: 0,
    direction: "right",
  },
  targetCell: () => {
    x = 5;
    y = 3;
  },
  drawBoard: () => {
    const board = document.getElementById("board");
    // je veux créer 4 lignes en div
    for (let i = 0; i < 4; i++) {
      let row = document.createElement("div");
      row.className = "row";
      console.log(row);
      // Je veux rajouter 6 Div dans mes 4 row
      for (let j = 0; j < 6; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        console.log(cell);
        row.appendChild(cell);
      }
      board.appendChild(row);
    }
  },
};

document.addEventListener("DOMContentLoaded", app.init);

const app = {
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
    //j'utilise let "y" p/r l'axe Y
    for (let y = 0; y < 4; y++) {
      const row = document.createElement("div");
      row.className = "row";
      // Je veux rajouter 6 Div dans mes 4 row
      // j utilise let "x" par rapport a l axe X
      for (let x = 0; x < 6; x++) {
        const cell = document.createElement("div");
        cell.className = "cell";

        if (x === app.targetCell.x && y === app.targetCell.y) {
          cell.classlist.add("targetCell");
        }
        if (x === app.player.x && y === app.player.y) {
          const playerDiv = document.createElement("div");
          playerDiv.className = "player";
          cell.appendChild(playerDiv);
        }
        row.appendChild(cell);
      }
      board.appendChild(row);
    }

    //
  },
};

document.addEventListener("DOMContentLoaded", app.init);
// const clicked = document.addEventListener("click", () => {
//   console.log("clic clic boom");
// });

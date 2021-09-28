const app = {
  init: function () {
    console.log("init !");
    app.drawBoard();
    app.listenKeyboardEvents();
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
          playerDiv.classList.add(app.player.direction);
          cell.appendChild(playerDiv);
        }
        row.appendChild(cell);
      }
      board.appendChild(row);
    }
  },
  clearBoard: () => {
    const toClear = document.getElementById("board");
    toClear.innerHTML = "";
  },
  redrawBoard: () => {
    app.clearBoard();
    app.drawBoard();
  },
  turnLeft: () => {
    switch (app.player.direction) {
      case "right":
        app.player.direction = "up";
        break;
      case "up":
        app.player.direction = "left";
        break;
      case "left":
        app.player.direction = "down";
        break;
      case "down":
        app.player.direction = "right";
        break;
    }
    app.redrawBoard;
  },
  turnRight: () => {
    switch (app.player.direction) {
      case "right":
        app.player.direction = "down";
        break;
      case "up":
        app.player.direction = "right";
        break;
      case "left":
        app.player.direction = "up";
        break;
      case "down":
        app.player.direction = "left";
        break;
    }
    app.redrawBoard;
  },
  moveForward: () => {
    switch (app.player.direction) {
      case "right":
        // si le joueur a atteint la limite du plateau, on affiche une erreur et on ne fait rien.
        if (app.player.x === 5) {
          console.log("Impossible d'avancer. Limite de la grille atteinte.");
        } else {
          // sinon, on modifie les coordonées du joueur
          // app.player.x = app.player.x + 1;
          app.player.x += 1;
        }
        break;
      case "down":
        if (app.player.y === 3) {
          console.log("Impossible d'avancer. Limite de la grille atteinte.");
        } else {
          app.player.y += 1;
        }
        break;
      case "left":
        if (app.player.x === 0) {
          console.log("Impossible d'avancer. Limite de la grille atteinte.");
        } else {
          app.player.x -= 1;
        }
        break;
      case "up":
        if (app.player.y <= 0) {
          console.log("Impossible d'avancer. Limite de la grille atteinte.");
        } else {
          app.player.y -= 1;
        }
        break;
    }

    app.redrawBoard();
  },
  listenKeyboardEvents: function () {
    document.addEventListener("keyup", function (evt) {
      console.log(evt.code);
      // En fonction du code de la touche pressée
      // appeler la bonne méthode de app
      // (moveFoward, turnLeft ou turnRight)
      switch (evt.code) {
        case "ArrowUp":
          app.moveForward();
          break;
        case "ArrowLeft":
          app.turnLeft();
          break;
        case "ArrowRight":
          app.turnRight();
          break;
        case "ArrowDown":
          app.turnRight();
          break;
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
// const clicked = document.addEventListener("click", () => {
//   console.log("clic clic boom");
// });

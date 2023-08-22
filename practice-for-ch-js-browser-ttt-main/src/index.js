// Add your import statements for View and Game here
import Game from "../ttt_node/game.js";
import View from "./ttt-view.js";

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".ttt")
  console.log(box);
  const game = new Game();
  const view = new View(game, box);
});




class View {
  constructor(game, el) {
    this.game = game; 
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    let ul = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.setAttribute("data-row", `${i}`);
        li.setAttribute("data-col", `${j}`);
        ul.appendChild(li);
      }
    }
    this.el.appendChild(ul);

  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;
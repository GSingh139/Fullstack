const board = document.getElementById("board");
const colorPicker = document.getElementById("colorPicker");
const strokeSize = document.getElementById("strokeSize");
const clearBtn = document.getElementById("clearBtn");

let active = false;
let line;

board.addEventListener("mousedown", e => {
  active = true;
  line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("stroke", colorPicker.value);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke-width", strokeSize.value);
  line.setAttribute("stroke-linecap", "round");
  line.setAttribute("stroke-linejoin", "round");
  const rect = board.getBoundingClientRect();
  line.setAttribute("d", `M ${e.clientX - rect.left} ${e.clientY - rect.top}`);
  board.appendChild(line);
});

board.addEventListener("mousemove", e => {
  if (!active) return;
  const rect = board.getBoundingClientRect();
  const d = line.getAttribute("d");
  line.setAttribute("d", d + ` L ${e.clientX - rect.left} ${e.clientY - rect.top}`);
});

board.addEventListener("mouseup", () => active = false);
board.addEventListener("mouseleave", () => active = false);

clearBtn.addEventListener("click", () => {
  while (board.firstChild) board.removeChild(board.firstChild);
});

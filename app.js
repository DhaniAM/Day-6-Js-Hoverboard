const board = document.querySelector(".board");
const colors = [
	"#4deeea",
	"#74ee15",
	"#ffe700",
	"#f000ff",
	"#001eff",
];

for (let count = 1; count <= 144; count++) {
	const box = document.createElement("div");
	box.classList.add("box");
	board.appendChild(box);
	box.addEventListener("mouseover", () => addColor(box));
	box.addEventListener("mouseout", () => removeColor(box));
}

function addColor(element) {
	const pickColor = Math.floor(Math.random() * colors.length);
	const color = colors[pickColor];
	element.style.background = color;
	element.style.boxShadow = `0px 0px 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = "#505050";
	element.style.boxShadow = "none";
}

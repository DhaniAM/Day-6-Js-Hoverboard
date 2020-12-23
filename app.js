const board = document.querySelector(".board");
const colors = [
	"#751A33",
	"#B34233",
	"#D28F33",
	"#D4B95E",
	"#4EA2A2",
	"#1A8693"
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
	element.style.boxShadow = `0px 0px 5px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = "#505050";
	element.style.boxShadow = "none";
}

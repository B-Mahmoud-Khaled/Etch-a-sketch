const container = document.querySelector(".container");
const layout = document.querySelector(".layout");
const card = document.querySelector(".card");
const select = document.querySelector(".select");
const gridSize = document.querySelector(".gridSize");
const root = document.querySelector(":root");
const grid = document.querySelector(".grid");
const rootStyle = getComputedStyle(root);
const clearBtn = document.querySelector(".clearBtn");
const rainbowMode = document.querySelector(".rainbowMode");
const blackColor = document.querySelector(".blackColor");
const eraser = document.querySelector(".eraser");

gridSize.value = 16;
let buttonState = "0";

let generateRandomColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

blackColor.addEventListener("click", () => (buttonState = "0"));
rainbowMode.addEventListener("click", () => (buttonState = "1"));
eraser.addEventListener("click", () => {buttonState = "2"})

function checkValidSize(size) {
	if (size >= 2 && size <= 100) {
		createCanvas(size);
	} else {
		size = 16;
		createCanvas(size);
		console.log("bad size");
	}
	root.style.setProperty("--canvasSize", size);
}

function createCanvas(size) {
	for (let i = 0; i < size * size; i++) {
		const div = document.createElement("div");
		div.classList.add("grid");
		div.addEventListener("mouseover", () => {
			if (buttonState == "1") {
				div.style.backgroundColor = generateRandomColor();
			} else if (buttonState == "0") {
				div.style.backgroundColor = "black";
			} else if (buttonState == "2") {
				div.style.backgroundColor = "white";
			}
		});
		container.appendChild(div);
	}
}

function clearCanvas() {
	card.style.display = "none";
	container.innerHTML = "";
}

createCanvas(gridSize.value);

layout.addEventListener("click", () => {
	card.style.display = "flex";
});

select.addEventListener("click", () => {
	clearCanvas();
	checkValidSize(gridSize.value);
});

clearBtn.addEventListener("click", () => {
	clearCanvas();
	createCanvas(gridSize.value);
});

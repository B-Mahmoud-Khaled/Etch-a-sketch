const container = document.querySelector(".container");
const layout = document.querySelector(".layout");
const card = document.querySelector(".card");
const select = document.querySelector(".select");
const gridSize = document.querySelector(".gridSize");
const root = document.querySelector(":root");
const grid = document.querySelector(".grid");
const rootStyle = getComputedStyle(root);

window.onload = () => {
	for (let i = 0; i < rootStyle.getPropertyValue("--canvasSize") ** 2; i++) {
		const div = document.createElement("div");
		div.classList.add("grid");
		container.appendChild(div);
	}
};

layout.addEventListener("click", () => {
	card.style.display = "flex";
});

select.addEventListener("click", () => {
	root.style.setProperty("--canvasSize", gridSize.value);
	card.style.display = "none";
	container.innerHTML = "";
	for (let i = 0; i < gridSize.value ** 2; i++) {
		const div = document.createElement("div");
		div.classList.add("grid");
		container.appendChild(div);
	}
});

grid.addEventListener('click', () => grid.style.backgroundColor = "black" );
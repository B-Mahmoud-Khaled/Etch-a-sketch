const container = document.querySelector(".container");
const layout = document.querySelector(".layout");
const card = document.querySelector(".card");
const select = document.querySelector(".select");
const gridSize = document.querySelector(".gridSize");
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root)

for (let i = 0 ; i < rootStyle.getPropertyValue('--canvasSize')**2; i++) {
  const div = document.createElement("div");
  div.classList.toggle("grid");
  container.appendChild(div);
}

console.log(root.style.getPropertyValue('--canvasSize'));

layout.addEventListener("click", () => {
  card.style.display = "flex";
});



select.addEventListener("click", () => {
  root.style.setProperty('--canvasSize', gridSize.value);
  card.style.display = "none";
  container.innerHTML = ""
  for (let i = 0; i < gridSize.value**2; i++) {
    const div = document.createElement("div");
    div.classList.toggle("grid");
    container.appendChild(div);
  }
});

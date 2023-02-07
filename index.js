const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    // div.textContent = `${i+1}`
    div.classList.toggle('grid');
    container.appendChild(div);
}


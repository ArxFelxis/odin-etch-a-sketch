const grid = document.querySelector(".grid")
const btn = document.querySelector(".num-grid")

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div")
    grid.appendChild(div)
}   
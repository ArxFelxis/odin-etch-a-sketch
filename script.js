const grid = document.querySelector(".grid")
const btn = document.querySelector(".num-grid")  

function getGridSize(n) {
    // Get number of tiles to loop
    for (let i = 0; i < n*(n+1); i++) {
    const div = document.createElement("div")
    grid.appendChild(div)

    // Indicate number of tiles per row & number of rows
    document.querySelectorAll('.grid > div')
    .forEach((el, index) => {
    if (index % (n+1) === 0) {
    el.style.setProperty('width', '100%', 'important')
    el.style.border = "0"
    el.style.height = "0"
    } else {
        el.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "grey"
    })
    //     el.addEventListener("mouseout", (event) => {
    //         event.target.style.backgroundColor = "white"
    // })
}})
}
}

btn.addEventListener("click", () => {
    if (document.querySelectorAll('.grid > div')) {
        (document.querySelectorAll('.grid > div')).forEach((el) => {
            el.remove()
        })
    }
    let num = Number(prompt("Please enter your grid size."))
    if (num >= 100) {
        return alert("Please choose a smaller grid.")
    } else {
        return getGridSize(num)
    }
})
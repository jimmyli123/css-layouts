
document.querySelector("#block").addEventListener('click', changeToInline)
document.querySelector("#flexbox").addEventListener('click', changeToFlexbox)
document.querySelector("#grid").addEventListener('click', changeToGrid)
let show = document.querySelector("#showCase")

function changeToInline() {
    show.className = "block"
}

function changeToFlexbox() {
    show.className = "flexbox"
    let flexboxButtons = document.querySelectorAll(".flexbox__button")
    for (let item of flexboxButtons) {
        item.style.display="flex"
    }
    
}

function changeToGrid() {
    show.className = "grid"
}



document.querySelector("#block").addEventListener('click', changeToInline)
document.querySelector("#flexbox").addEventListener('click', changeToFlexbox)
document.querySelector("#grid").addEventListener('click', changeToGrid)
let show = document.querySelector("#showCase")

function changeToInline() {
    show.className = "block"
}

function changeToFlexbox() {
    show.className = "flexbox"
}

function changeToGrid() {
    show.className = "grid"
}


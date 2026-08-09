let inc = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let final = document.getElementById("total")

let count = 0
let total = 0

function increment() {
    count += 1
    inc.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    total += count
    final.innerText = total
    count = 0
    inc.innerText = count
}

function reset() {
    saveEl.innerText = "Previous Entries :"
    inc.innerText = 0
    final.innerText =  0
}
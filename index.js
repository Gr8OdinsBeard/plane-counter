//initialise count as 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//listen for clicks on increment button
function increment() {
    count += 1
    //change the count-el in the HTML to reflect the new count
    countEl.textContent = count
}

function save() {
    let countDash = count + " - "
    console.log(countDash)
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
    console.log(count)
}
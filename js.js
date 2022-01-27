const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")
const result = document.querySelector(".result")
const clear = document.querySelector(".clear")
const clearAll = document.querySelector(".clear-all")
const input = document.querySelector(".input")


console.log(numbers)


numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        numberPress(e.target.textContent)
    })
})

function numberPress(number) {
    if (input.value === "") {
        input.value = number;
    } else {
        input.value += number;
    }
}

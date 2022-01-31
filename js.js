const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")
const clear = document.querySelectorAll(".clear")
const input = document.querySelector(".input")
const dot = document.querySelector(".dot")

memoryCurrentNumber = 0,
    memoryNewNumber = false,
    memoryPendingOperator = "";

console.log(numbers)


numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        numberPress(e.target.textContent)
    })
})

function numberPress(number) {
    if (memoryNewNumber) {
        input.value = number;
        memoryNewNumber = false;
    } else {
        if (input.value === "") {
            input.value = number;
        } else {
            input.value += number;
        };
    };
};
operators.forEach((number) => {
    number.addEventListener('click', (e) => {
        operations(e.target.textContent)
    })
})

// function revers(number) {
//     let str = number
//     let arr = str.split('');
//     arr.reverse();
//     arr.join(' ')
//     console.log(arr);

// }
// revers("412415")

function operations(op) {
    let localOperation = input.value;
    if (memoryNewNumber && memoryPendingOperator !== "=") {
        input.value = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        if (memoryPendingOperator === "+") {
            memoryCurrentNumber += +localOperation;
        } else if (memoryPendingOperator === "-") {
            memoryCurrentNumber -= +localOperation;
        } else if (memoryPendingOperator === "*") {
            memoryCurrentNumber *= +localOperation;
        } else if (memoryPendingOperator === "/") {
            memoryCurrentNumber /= +localOperation;
        } else {
            memoryCurrentNumber = +localOperation;
        }
        input.value = memoryCurrentNumber;
        memoryPendingOperator = op;
    };
}

// https://www.figma.com/file/8xyLcN1Z0Xd7YJgCgeoxjW/Lending_na_verstku?node-id=2%3A22


clear.forEach((number) => {
    number.addEventListener('click', (e) => {
        clears(e.target.textContent)
    })
})

function clears(op) {
    if (op == 'CE') {
        input.value = '0'
        memoryNewNumber = true;
    } else if (op === 'C') {
        input.value = '';
        memoryNewNumber = true;
        memoryCurrentNumber = '';
        memoryPendingOperation = '';
    };
};

dot.addEventListener('click', (e) => {
    dots(e.target.textContent)
})

function dots() {
    let localDotMemory = input.value;
    if (memoryNewNumber) {
        localDotMemory = '0.';
        memoryNewNumber = false;
    } else {
        if (localDotMemory.indexOf('.') === -1) {
            localDotMemory += '.';
        };
    };
    input.value = localDotMemory;
};
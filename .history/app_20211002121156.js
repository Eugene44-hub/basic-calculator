// const button = document.querySelector('button');
// const themeNumber = document.querySelector('span');
const calContainer = document.querySelector('.cal-container');
const deleteButton = document.querySelector('delete-button');
const resetButton = document.querySelector('reset-button');
const equalsButton = document.querySelector('reset-button');
class Calculator {
    constructor() {

    }

    changeTheme(color) {

    }
    toggle(number) {
        if (number == 1) {
            document.querySelector('.circle').style.left = '';

        }
        if (number == 2) {
            document.querySelector('.circle').style.left = '50%';
            document.body.style.backgroundColor = ''
        }
        if (number == 3) {
            document.querySelector('.circle').style.left = '90%';
            document.body.style.backgroundColor = ''
        }
    }
}
const calculator = new Calculator;

function eventListeners() {
    calContainer.addEventListener('click', e => {
        calculator.toggle(e.target.textContent)
    })
}
eventListeners()
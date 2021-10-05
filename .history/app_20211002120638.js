// const button = document.querySelector('button');
// const themeNumber = document.querySelector('span');
const calContainer = document.querySelector('.cal-container')
class Calculator {
    constructor() {

    }

    changeTheme(color) {

    }
    toggle(number) {
        if (number == 1) {
            document.querySelector('.circle').style.left = '0%'
        }
        if (number == 2) {
            document.querySelector('.circle').style.left = '50%'
        }
        if (number == 3) {
            document.querySelector('.circle').style.left = '100%'
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
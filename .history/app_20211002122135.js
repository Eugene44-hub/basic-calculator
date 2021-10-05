// const button = document.querySelector('button');
// const themeNumber = document.querySelector('span');
const calContainer = document.querySelector('.cal-container');

class Calculator {
    constructor() {

    }


    toggle(number) {
        const deleteButton = document.querySelector('#delete-button');
        const resetButton = document.querySelector('#reset-button');
        const equalsButton = document.querySelector('#reset-button');
        const buttonContainer = document.querySelector('.button-container');
        const screen = document.querySelector('.output');
        if (number == 1) {
            document.querySelector('.circle').style.left = '';
            deleteButton.style.backgroundColor = ''
            resetButton.style.backgroundColor = ''
            equalsButton.style.backgroundColor = ''
            screen.style.backgroundColor = ''
            buttonContainer.style.backgroundColor = ''

        }
        if (number == 2) {
            document.querySelector('.circle').style.left = '50%';
            document.body.style.backgroundColor = '';
            deleteButton.style.backgroundColor = ''
            resetButton.style.backgroundColor = ''
            equalsButton.style.backgroundColor = ''
            screen.style.backgroundColor = ''
        }
        if (number == 3) {
            document.querySelector('.circle').style.left = '90%';
            document.body.style.backgroundColor = ''
            deleteButton.style.backgroundColor = ''
            resetButton.style.backgroundColor = ''
            equalsButton.style.backgroundColor = ''
            screen.style.backgroundColor = ''

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
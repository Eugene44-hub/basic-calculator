// const themeNumber = document.querySelector('span');
const calContainer = document.querySelector('.cal-container');

class Calculator {
    constructor() {

    }
    changeBackground(bodyColor, delButtonColor, ) {

        deleteButton.style.backgroundColor = color
        resetButton.style.backgroundColor = color
        equalsButton.style.backgroundColor = color
        screen.style.backgroundColor = ''
        buttonContainer.style.backgroundColor = ''
    }

    toggle(number) {
        const deleteButton = document.querySelector('#delete-button');
        const resetButton = document.querySelector('#reset-button');
        const equalsButton = document.querySelector('#reset-button');
        const buttonContainer = document.querySelector('.button-container');
        const screen = document.querySelector('.output');
        if (number == 1) {
            document.querySelector('.circle').style.left = '';
        }
        if (number == 2) {
            document.querySelector('.circle').style.left = '50%';
        }
        if (number == 3) {
            document.querySelector('.circle').style.left = '90%';

        }
    }
}
const calculator = new Calculator;

function eventListeners() {
    const button = document.querySelector('button');
    calContainer.addEventListener('click', e => {
        calculator.toggle(e.target.textContent)

        if (e.target.tagName === 'button') {
            console.log(e.target)
        }
    })
}
eventListeners()
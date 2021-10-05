// const themeNumber = document.querySelector('span');
const calContainer = document.querySelector('.cal-container');

class Calculator {
    constructor() {

    }
    changeBackground(bodyColor, delButtonColor, resetButtonColor, equalsButtonColor, buttonContainerColor, screenColor) {
        const deleteButton = document.querySelector('#del-button');
        const resetButton = document.querySelector('#reset-button');
        const equalsButton = document.querySelector('#reset-button');
        const buttonContainer = document.querySelector('.button-container')
        const screen = document.querySelector('.output');
        document.body.style.backgroundColor = body
        deleteButton.style.backgroundColor = delButtonColor
        resetButton.style.backgroundColor = resetButtonColor
        equalsButton.style.backgroundColor = equalsButtonColor
        screen.style.backgroundColor = screenColor
        buttonContainer.style.backgroundColor = buttonContainerColor
    }

    toggle(number) {

        if (number == 1) {
            document.querySelector('.circle').style.left = '';
            this.changeBackground()
        }
        if (number == 2) {
            document.querySelector('.circle').style.left = '50%';
            this.changeBackground('hsl(0, 0%,90%)')
        }
        if (number == 3) {
            document.querySelector('.circle').style.left = '90%';
            this.changeBackground()

        }
    }
}
const calculator = new Calculator;

function eventListeners() {
    const button = document.querySelector('button');
    calContainer.addEventListener('click', e => {
        calculator.toggle(e.target.textContent)


    })
}
eventListeners()
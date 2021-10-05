// const themeNumber = document.querySelector('span');
const calContainer = document.querySelector('.cal-container');

class Calculator {
    constructor() {

    }
    changeBackground(bodyColor, delButtonColor, resetButtonColor, equalsButtonColor, buttonContainerColor, screenColor, toggleBarColor, toggle, textColor) {
        const deleteButton = document.querySelector('#del-button');
        const resetButton = document.querySelector('#reset-button');
        const equalsButton = document.querySelector('#reset-button');
        const buttonContainer = document.querySelector('.button-container')
        const output = document.querySelector('.output');
        const toggleBar = document.querySelector('.bar')
        const toggleBar = document.querySelector('.bar')


        document.body.style.backgroundColor = bodyColor
        document.body.style.color = textColor
        deleteButton.style.backgroundColor = delButtonColor
        resetButton.style.backgroundColor = resetButtonColor
        equalsButton.style.backgroundColor = equalsButtonColor
        output.style.backgroundColor = screenColor
        buttonContainer.style.backgroundColor = buttonContainerColor
        toggleBar.style.backgroundColor = toggleBarColor

    }

    toggle(number) {

        if (number == 1) {
            document.querySelector('.circle').style.left = '';
            this.changeBackground()
        }
        if (number == 2) {
            document.querySelector('.circle').style.left = '50%';
            this.changeBackground('hsl(0, 0%,90%)', 'hsl(185, 42%, 37%)', 'hsl(185, 42%, 37%)', 'hsl(25, 98%, 40%)', 'hsl(0, 5%, 81%)', 'hsl(0, 0%, 93%)', 'hsl(0, 5%, 81%)', 'black')
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
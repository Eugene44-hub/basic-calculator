// const themeNumber = document.querySelector('span');
const calContainer = document.querySelector('.cal-container');

class Calculator {
    constructor() {

    }
    changeBackground(bodyColor, delButtonColor, resetButtonColor, equalsButtonColor, buttonContainerColor, screenColor, toggleBarColor, toggleColor, textColor) {
        const deleteButton = document.querySelector('#del-button');
        const resetButton = document.querySelector('#reset-button');
        const equalsButton = document.querySelector('#reset-button');
        const buttonContainer = document.querySelector('.button-container')
        const output = document.querySelector('.output');
        const toggleBar = document.querySelector('.bar')
        const toggle = document.querySelector('.circle')


        document.body.style.backgroundColor = bodyColor
        document.body.style.color = textColor
        deleteButton.style.backgroundColor = delButtonColor
        resetButton.style.backgroundColor = resetButtonColor
        equalsButton.style.backgroundColor = equalsButtonColor
        output.style.backgroundColor = screenColor
        buttonContainer.style.backgroundColor = buttonContainerColor
        toggleBar.style.backgroundColor = toggleBarColor
        toggle.style.backgroundColor = toggleColor
            /*Light gray (main background): hsl(0, 0%, 90%)
- Grayish red (toggle background, keypad background): hsl(0, 5%, 81%)
- Very light gray (screen background): hsl(0, 0%, 93%)

#### Keys

- Dark moderate cyan (key background): hsl(185, 42%, 37%)
- Very dark cyan (key shadow): hsl(185, 58%, 25%)

- Orange (key background, toggle): hsl(25, 98%, 40%)
- Dark orange (key shadow): hsl(25, 99%, 27%)

- Light grayish yellow (key background): hsl(45, 7%, 89%)
- Dark grayish orange (key shadow): hsl(35, 11%, 61%)

#### Text

- Very dark grayish yellow: hsl(60, 10%, 19%)
- White (text): hsl(0, 0, 100%) */

    }

    toggle(number) {

        if (number == 1) {
            document.querySelector('.circle').style.left = '';
            this.changeBackground()
        }
        if (number == 2) {
            document.querySelector('.circle').style.left = '50%';
            this.changeBackground('hsl(0, 0%,90%)', 'hsl(185, 42%, 37%)', 'hsl(185, 42%, 37%)', 'hsl(25, 98%, 40%)', 'hsl(0, 5%, 81%)', 'hsl(0, 0%, 93%)', 'hsl(0, 5%, 81%)', hsl(25, 98 % , 40 % )
                'black')
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
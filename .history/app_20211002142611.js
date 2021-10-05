// const themeNumber = document.querySelector('span');
const button = document.querySelectorAll('button');
const calContainer = document.querySelector('.cal-container');

class Calculator {
    constructor(button) {
        this.button = button;
    }
    changeBackground(bodyColor, delButtonColor, resetButtonColor, equalsButtonColor, buttonContainerColor, screenColor, toggleBarColor, toggleColor, textColor) {
        const deleteButton = document.querySelector('#del-button');
        const resetButton = document.querySelector('#reset-button');
        const equalsButton = document.querySelector('#equals-button');
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
        resetButton.style.boxColor = resetButtonColor
        deleteButton.style.backgroundColor = delButtonColor

        /*Very dark violet (main background): hsl(268, 75%, 9%)
- Very dark violet (toggle background, keypad background, screen background): hsl(268, 71%, 12%)

#### Keys

- Dark violet (key background): hsl(281, 89%, 26%)
- Vivid magenta (key shadow): hsl(285, 91%, 52%)

- Pure cyan (key background, toggle): hsl(176, 100%, 44%)
- Soft cyan (key shadow): hsl(177, 92%, 70%)

- Very dark violet (key background): hsl(268, 47%, 21%)
- Dark magenta (key shadow): hsl(290, 70%, 36%)

#### Text

- Light yellow: hsl(52, 100%, 62%)
- Very dark blue: hsl(198, 20%, 13%)
- White (text): hsl(0, 0, 100%) */

    }

    toggle(number) {

        if (number == 1) {
            document.querySelector('.circle').style.left = '';
            this.changeBackground()
        }
        if (number == 2) {
            document.querySelector('.circle').style.left = '50%';
            for (let i = 0; i < this.button.length; i++) {
                this.button[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
                this.button[i].style.boxShadow = ''
                this.button[i].style.color = 'black';
            }

            this.changeBackground('hsl(0, 0%,90%)', 'hsl(185, 42%, 37%)', 'hsl(185, 42%, 37%)', 'hsl(25, 98%, 40%)', 'hsl(0, 5%, 81%)', 'hsl(0, 0%, 93%)', 'hsl(0, 5%, 81%)', 'hsl(25, 98%, 40%)',
                'black')
        }
        if (number == 3) {
            document.querySelector('.circle').style.left = '90%';

            for (let i = 0; i < this.button.length; i++) {
                this.button[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
                this.button[i].style.boxShadow = '0 4px hsl(290, 70%, 36%)'
                this.button[i].style.color = 'hsl(52, 100%, 62%)';

            }
            this.changeBackground('hsl(268, 75%, 9%)', 'hsl(281, 89%, 26%)', 'hsl(281, 89%, 26%)', 'hsl(176, 100%, 44%)', 'hsl(268, 71%, 12%)', 'hsl(268, 71%, 12%)', 'hsl(268, 71%, 12%)', 'hsl(176, 100%, 44%)', 'hsl(52, 100%, 62%)');

        }
    }
};

function eventListeners() {
    const calculator = new Calculator(button)
    calContainer.addEventListener('click', e => {
        calculator.toggle(e.target.textContent)


    })
}
eventListeners()